"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Coins, Home, ShoppingBag, Sparkles, Trophy, RotateCcw, CheckCircle2, XCircle } from "lucide-react";

type SubjectId = "math" | "chinese" | "science" | "social";
type PageId = "home" | "learn" | "quiz" | "shop";

type Question = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

type Quiz = {
  unitName: string;
  reward: number;
  questions: Question[];
};

type HistoryRecord = {
  subject: string;
  score: number;
  total: number;
  reward: number;
  date: string;
};

type LearningProfile = {
  coins: number;
  owned: string[];
  completedUnits: number;
  streak: number;
  history: HistoryRecord[];
};

type ShopItem = {
  id: string;
  name: string;
  price: number;
  emoji: string;
  desc: string;
};

const subjects: Array<{ id: SubjectId; name: string; icon: string; color: string }> = [
  { id: "math", name: "數學", icon: "➗", color: "from-amber-100 to-orange-100" },
  { id: "chinese", name: "國語", icon: "📖", color: "from-rose-100 to-pink-100" },
  { id: "science", name: "自然", icon: "🔬", color: "from-emerald-100 to-lime-100" },
  { id: "social", name: "社會", icon: "🌏", color: "from-sky-100 to-cyan-100" },
];

const quizBank: Record<SubjectId, Quiz> = {
  math: {
    unitName: "四年級數學｜分數與小數複習",
    reward: 80,
    questions: [
      { q: "1/2 等於下列哪一個小數？", options: ["0.2", "0.5", "1.2", "2.0"], answer: 1, explain: "1 ÷ 2 = 0.5，所以 1/2 等於 0.5。" },
      { q: "0.75 可以寫成哪一個分數？", options: ["1/4", "2/4", "3/4", "4/3"], answer: 2, explain: "0.75 = 75/100，約分後是 3/4。" },
      { q: "3.6 比 3.45 大還是小？", options: ["大", "小", "一樣大", "無法比較"], answer: 0, explain: "3.6 可看成 3.60，3.60 > 3.45。" },
      { q: "下列哪一個數最接近 1？", options: ["0.1", "0.9", "1.8", "2.1"], answer: 1, explain: "0.9 與 1 的差是 0.1，最接近 1。" },
      { q: "2/4 可以約分成？", options: ["1/4", "1/2", "2/2", "4/2"], answer: 1, explain: "2/4 的分子分母同除以 2，得到 1/2。" },
      { q: "0.3 + 0.4 = ?", options: ["0.07", "0.34", "0.7", "7"], answer: 2, explain: "小數點對齊相加，0.3 + 0.4 = 0.7。" },
      { q: "5/10 等於？", options: ["0.05", "0.5", "5", "10"], answer: 1, explain: "5 ÷ 10 = 0.5。" },
      { q: "哪一個分數最大？", options: ["1/4", "1/2", "1/8", "1/10"], answer: 1, explain: "同樣是 1 份，分母越小，每份越大，所以 1/2 最大。" },
      { q: "4.08 的 8 在哪一位？", options: ["個位", "十分位", "百分位", "千分位"], answer: 2, explain: "4.08 中，0 是十分位，8 是百分位。" },
      { q: "1.25 + 0.75 = ?", options: ["1.5", "1.75", "2", "2.5"], answer: 2, explain: "1.25 + 0.75 = 2.00。" },
    ],
  },
  chinese: {
    unitName: "四年級國語｜詞語理解複習",
    reward: 70,
    questions: [
      { q: "「專心致志」的意思最接近哪一個？", options: ["非常害怕", "全神貫注", "跑得很快", "心情難過"], answer: 1, explain: "專心致志表示精神集中、全神貫注。" },
      { q: "「欣賞」一詞通常表示？", options: ["討厭", "責備", "喜愛並觀看", "忘記"], answer: 2, explain: "欣賞表示以喜愛的心情觀看或感受。" },
      { q: "下列哪個詞語和「勇敢」相反？", options: ["膽小", "努力", "開心", "聰明"], answer: 0, explain: "勇敢的相反詞是膽小。" },
      { q: "「井井有條」形容什麼？", options: ["很混亂", "很整齊有秩序", "很危險", "很安靜"], answer: 1, explain: "井井有條表示整齊、有條理。" },
      { q: "「豐富」最適合形容？", options: ["內容很多", "聲音很小", "速度很慢", "顏色很暗"], answer: 0, explain: "豐富表示種類或內容很多。" },
      { q: "「迫不及待」表示？", options: ["不想做", "等不及", "很生氣", "慢慢來"], answer: 1, explain: "迫不及待表示急切到不能再等待。" },
      { q: "「溫暖」的相反詞是？", options: ["寒冷", "明亮", "整齊", "快速"], answer: 0, explain: "溫暖的相反詞是寒冷。" },
      { q: "下列哪一個是成語？", options: ["很高", "努力讀書", "畫蛇添足", "跑步"], answer: 2, explain: "畫蛇添足是成語，表示多此一舉。" },
      { q: "「寬廣」可以形容？", options: ["道路很大很開闊", "聲音很尖", "味道很酸", "時間很短"], answer: 0, explain: "寬廣表示空間大、開闊。" },
      { q: "「仔細」的意思是？", options: ["隨便", "認真細心", "快速離開", "非常吵"], answer: 1, explain: "仔細表示認真且細心。" },
    ],
  },
  science: {
    unitName: "四年級自然｜植物與生活複習",
    reward: 75,
    questions: [
      { q: "植物行光合作用主要需要什麼？", options: ["陽光", "石頭", "塑膠", "金屬"], answer: 0, explain: "植物需要陽光、水和二氧化碳進行光合作用。" },
      { q: "植物的根主要功能是？", options: ["開花", "吸收水分", "製造種子", "吸引昆蟲"], answer: 1, explain: "根可以固定植物並吸收水分與養分。" },
      { q: "葉子的主要功能之一是？", options: ["吸收陽光製造養分", "讓植物移動", "發出聲音", "變成石頭"], answer: 0, explain: "葉子能吸收陽光，幫助植物製造養分。" },
      { q: "種子發芽通常需要？", options: ["水分和適合溫度", "冰塊", "油漆", "鹽巴"], answer: 0, explain: "種子發芽需要水分、空氣與合適溫度。" },
      { q: "花的功能通常和什麼有關？", options: ["繁殖", "煮飯", "發電", "搬運"], answer: 0, explain: "花和植物繁殖有關，可形成果實與種子。" },
      { q: "仙人掌的刺主要可以幫助？", options: ["減少水分散失", "增加重量", "發出音樂", "變成動物"], answer: 0, explain: "刺可以減少水分散失，也可保護植物。" },
      { q: "植物需要空氣中的哪一種氣體進行光合作用？", options: ["二氧化碳", "氦氣", "氖氣", "水蒸氣"], answer: 0, explain: "植物會吸收二氧化碳進行光合作用。" },
      { q: "果實的功能之一是？", options: ["保護種子", "製造玻璃", "產生電力", "吸收聲音"], answer: 0, explain: "果實可以保護種子，並幫助種子傳播。" },
      { q: "觀察植物時，哪一項做法較合適？", options: ["每天記錄變化", "隨意拔掉根", "不澆水", "放在密閉盒中"], answer: 0, explain: "觀察實驗應持續記錄，避免破壞植物。" },
      { q: "下列哪一個是植物？", options: ["榕樹", "石頭", "塑膠瓶", "鐵釘"], answer: 0, explain: "榕樹是植物。" },
    ],
  },
  social: {
    unitName: "四年級社會｜家鄉與生活複習",
    reward: 75,
    questions: [
      { q: "地圖上的比例尺可以幫助我們知道什麼？", options: ["實際距離", "天氣溫度", "人的心情", "食物味道"], answer: 0, explain: "比例尺可用來換算地圖距離與實際距離。" },
      { q: "社區中的圖書館主要提供什麼服務？", options: ["借書與閱讀", "修車", "賣蔬菜", "製造衣服"], answer: 0, explain: "圖書館提供閱讀、借書與學習資源。" },
      { q: "下列哪一項是公共設施？", options: ["公園", "私人玩具", "個人鉛筆盒", "家中沙發"], answer: 0, explain: "公園是大家可以使用的公共設施。" },
      { q: "保護家鄉環境可以怎麼做？", options: ["垃圾分類", "亂丟垃圾", "浪費水", "破壞公物"], answer: 0, explain: "垃圾分類、節約資源能保護環境。" },
      { q: "看地圖時，方位可以幫助我們？", options: ["判斷方向", "知道味道", "測量體重", "聽音樂"], answer: 0, explain: "方位可以幫助判斷東西南北。" },
      { q: "社區居民共同遵守規則，是為了？", options: ["維持安全與秩序", "讓大家吵架", "浪費時間", "增加垃圾"], answer: 0, explain: "規則能讓社區生活更安全、有秩序。" },
      { q: "下列哪一項屬於家鄉特色？", options: ["地方小吃", "亂丟垃圾", "破壞環境", "不守規則"], answer: 0, explain: "地方小吃、傳統活動、景點都可能是家鄉特色。" },
      { q: "遇到火災應該撥打？", options: ["119", "1100", "1234", "1688"], answer: 0, explain: "在台灣，火災或救護可撥打 119。" },
      { q: "社區志工常見的工作是？", options: ["協助服務居民", "破壞公園", "亂停車", "亂貼廣告"], answer: 0, explain: "志工會協助社區服務與公共活動。" },
      { q: "尊重不同文化代表什麼？", options: ["理解並接納差異", "嘲笑別人", "只接受自己想法", "拒絕溝通"], answer: 0, explain: "尊重文化差異可以讓社會更和諧。" },
    ],
  },
};

const shopItems: ShopItem[] = [
  { id: "sprout_red", name: "紅芽勇士", price: 80, emoji: "🌱", desc: "答題時帶來勇氣" },
  { id: "sprout_blue", name: "藍芽智者", price: 120, emoji: "💧", desc: "錯題解析小幫手" },
  { id: "sprout_yellow", name: "黃芽閃電", price: 150, emoji: "⚡", desc: "連續挑戰加成" },
  { id: "forest_bg", name: "森林基地", price: 100, emoji: "🌳", desc: "首頁背景收藏" },
  { id: "star_badge", name: "星星徽章", price: 60, emoji: "⭐", desc: "努力學習的證明" },
  { id: "treasure", name: "探險寶箱", price: 200, emoji: "🎁", desc: "稀有收藏道具" },
];

function getInitialState(): LearningProfile {
  return {
    coins: 120,
    owned: ["sprout_red"],
    completedUnits: 0,
    streak: 1,
    history: [],
  };
}

export default function SproutLearningApp() {
  const [page, setPage] = useState<PageId>("home");
  const [profile, setProfile] = useState<LearningProfile>(getInitialState);
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>("math");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [lastReward, setLastReward] = useState(0);

  const currentQuiz = quizBank[selectedSubject];
  const questions = currentQuiz.questions;
  const currentQuestion = questions[currentIndex];
  const correctCount = answers.filter((a, idx) => a === questions[idx].answer).length;
  const progress = finished ? 100 : Math.round((currentIndex / questions.length) * 100);

  const ownedItems = useMemo(() => shopItems.filter((item) => profile.owned.includes(item.id)), [profile.owned]);

  function startQuiz(subjectId: SubjectId) {
    setSelectedSubject(subjectId);
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
    setLastReward(0);
    setPage("quiz");
  }

  function chooseAnswer(optionIndex: number) {
    if (finished) return;
    const nextAnswers = [...answers, optionIndex];
    setAnswers(nextAnswers);

    if (currentIndex + 1 >= questions.length) {
      const finalCorrect = nextAnswers.filter((a, idx) => a === questions[idx].answer).length;
      const accuracy = finalCorrect / questions.length;
      const baseReward = currentQuiz.reward;
      const bonus = accuracy >= 0.8 ? 40 : accuracy >= 0.6 ? 20 : 10;
      const reward = baseReward + bonus;
      setLastReward(reward);
      setProfile((prev) => ({
        ...prev,
        coins: prev.coins + reward,
        completedUnits: prev.completedUnits + 1,
        history: [
          {
            subject: currentQuiz.unitName,
            score: finalCorrect,
            total: questions.length,
            reward,
            date: new Date().toLocaleDateString("zh-TW"),
          },
          ...prev.history,
        ].slice(0, 8),
      }));
      setFinished(true);
      return;
    }

    setTimeout(() => setCurrentIndex((prev) => prev + 1), 300);
  }

  function resetQuiz() {
    setCurrentIndex(0);
    setAnswers([]);
    setFinished(false);
    setLastReward(0);
  }

  function buyItem(item: ShopItem) {
    if (profile.owned.includes(item.id)) return;
    if (profile.coins < item.price) return;
    setProfile((prev) => ({
      ...prev,
      coins: prev.coins - item.price,
      owned: [...prev.owned, item.id],
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-sky-50 p-4 text-slate-800">
      <div className="mx-auto max-w-5xl">
        <header className="mb-5 flex flex-col gap-3 rounded-3xl bg-white/80 p-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-3xl">🌱</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">小芽探險學院</h1>
              <p className="text-sm text-slate-500">完成學科任務，收集小芽夥伴與獎勵。</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="rounded-full px-3 py-2 text-sm" variant="secondary"><Coins className="mr-1 h-4 w-4" /> {profile.coins} 能量</Badge>
            <Badge className="rounded-full px-3 py-2 text-sm" variant="secondary"><Trophy className="mr-1 h-4 w-4" /> 完成 {profile.completedUnits} 課</Badge>
            <Badge className="rounded-full px-3 py-2 text-sm" variant="secondary"><Sparkles className="mr-1 h-4 w-4" /> 連續 {profile.streak} 天</Badge>
          </div>
        </header>

        <nav className="mb-5 grid grid-cols-3 gap-2 rounded-3xl bg-white/70 p-2 shadow-sm">
          <Button variant={page === "home" ? "default" : "ghost"} className="rounded-2xl" onClick={() => setPage("home")}><Home className="mr-2 h-4 w-4" />首頁</Button>
          <Button variant={page === "learn" ? "default" : "ghost"} className="rounded-2xl" onClick={() => setPage("learn")}><BookOpen className="mr-2 h-4 w-4" />開始複習</Button>
          <Button variant={page === "shop" ? "default" : "ghost"} className="rounded-2xl" onClick={() => setPage("shop")}><ShoppingBag className="mr-2 h-4 w-4" />商店</Button>
        </nav>

        {page === "home" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-3">
            <Card className="rounded-3xl md:col-span-2">
              <CardContent className="p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="relative flex h-48 flex-1 items-center justify-center rounded-3xl bg-gradient-to-br from-green-100 to-lime-50">
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.4 }} className="text-8xl">🌱</motion.div>
                    <span className="absolute bottom-4 rounded-full bg-white/80 px-3 py-1 text-sm font-medium shadow-sm">目前夥伴：紅芽勇士</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-xl font-bold">今日任務</h2>
                    <p className="text-slate-600">完成任一科目 10 題挑戰，幫助小芽獲得成長能量。</p>
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-2 flex justify-between text-sm"><span>今日任務進度</span><span>{profile.completedUnits > 0 ? "完成" : "尚未完成"}</span></div>
                      <Progress value={profile.completedUnits > 0 ? 100 : 20} />
                    </div>
                    <Button className="rounded-2xl" onClick={() => setPage("learn")}>開始今日複習</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">收藏圖鑑</h2>
                <div className="grid grid-cols-3 gap-3">
                  {ownedItems.map((item) => (
                    <div key={item.id} className="rounded-2xl bg-white p-3 text-center shadow-sm">
                      <div className="text-3xl">{item.emoji}</div>
                      <div className="mt-1 text-xs font-medium">{item.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl md:col-span-3">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">最近學習紀錄</h2>
                {profile.history.length === 0 ? (
                  <p className="text-slate-500">尚未完成測驗，先去完成一課吧。</p>
                ) : (
                  <div className="grid gap-3 md:grid-cols-2">
                    {profile.history.map((record, idx) => (
                      <div key={idx} className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="font-semibold">{record.subject}</div>
                        <div className="mt-1 text-sm text-slate-500">{record.date}｜答對 {record.score}/{record.total}｜獲得 {record.reward} 能量</div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}

        {page === "learn" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4 md:grid-cols-4">
            {subjects.map((subject) => (
              <Card key={subject.id} className="overflow-hidden rounded-3xl">
                <CardContent className={`bg-gradient-to-br ${subject.color} p-6`}>
                  <div className="mb-4 text-5xl">{subject.icon}</div>
                  <h2 className="text-xl font-bold">{subject.name}</h2>
                  <p className="mt-2 min-h-12 text-sm text-slate-600">{quizBank[subject.id].unitName}</p>
                  <Button className="mt-5 w-full rounded-2xl" onClick={() => startQuiz(subject.id)}>挑戰 10 題</Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {page === "quiz" && !finished && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="rounded-3xl">
              <CardContent className="p-6">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <Badge variant="outline" className="mb-2 rounded-full">{currentQuiz.unitName}</Badge>
                    <h2 className="text-xl font-bold">第 {currentIndex + 1} 題 / 共 {questions.length} 題</h2>
                  </div>
                  <Button variant="ghost" className="rounded-2xl" onClick={() => setPage("learn")}>返回單元</Button>
                </div>
                <Progress value={progress} className="mb-6" />
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="mb-5 text-lg font-bold leading-relaxed">{currentQuestion.q}</h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {currentQuestion.options.map((option, idx) => (
                      <Button key={idx} variant="outline" className="h-auto justify-start rounded-2xl p-4 text-left text-base" onClick={() => chooseAnswer(idx)}>
                        <span className="mr-3 rounded-full bg-slate-100 px-2 py-1 text-xs">{String.fromCharCode(65 + idx)}</span>{option}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {page === "quiz" && finished && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <Card className="rounded-3xl">
              <CardContent className="p-6 text-center">
                <div className="text-6xl">🎉</div>
                <h2 className="mt-3 text-2xl font-bold">任務完成！</h2>
                <p className="mt-2 text-slate-600">答對 {correctCount} / {questions.length} 題，獲得 {lastReward} 能量。</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <Button className="rounded-2xl" onClick={() => setPage("shop")}>去商店兌換</Button>
                  <Button variant="outline" className="rounded-2xl" onClick={resetQuiz}><RotateCcw className="mr-2 h-4 w-4" />再挑戰一次</Button>
                  <Button variant="ghost" className="rounded-2xl" onClick={() => setPage("learn")}>選其他科目</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">答題檢討</h3>
                <div className="space-y-3">
                  {questions.map((question, idx) => {
                    const isCorrect = answers[idx] === question.answer;
                    return (
                      <div key={idx} className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-start gap-2">
                          {isCorrect ? <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" /> : <XCircle className="mt-1 h-5 w-5 text-red-500" />}
                          <div>
                            <div className="font-semibold">{idx + 1}. {question.q}</div>
                            <div className="mt-1 text-sm text-slate-500">你的答案：{question.options[answers[idx]]}｜正確答案：{question.options[question.answer]}</div>
                            {!isCorrect && <div className="mt-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">解析：{question.explain}</div>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {page === "shop" && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <Tabs defaultValue="shop" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2 rounded-2xl bg-white/80">
                <TabsTrigger value="shop" className="rounded-2xl">兌換商店</TabsTrigger>
                <TabsTrigger value="collection" className="rounded-2xl">我的收藏</TabsTrigger>
              </TabsList>
              <TabsContent value="shop">
                <div className="grid gap-4 md:grid-cols-3">
                  {shopItems.map((item) => {
                    const owned = profile.owned.includes(item.id);
                    const affordable = profile.coins >= item.price;
                    return (
                      <Card key={item.id} className="rounded-3xl">
                        <CardContent className="p-6">
                          <div className="text-5xl">{item.emoji}</div>
                          <h3 className="mt-3 text-lg font-bold">{item.name}</h3>
                          <p className="mt-1 min-h-10 text-sm text-slate-500">{item.desc}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <Badge variant="secondary" className="rounded-full"><Coins className="mr-1 h-4 w-4" />{item.price}</Badge>
                            <Button className="rounded-2xl" disabled={owned || !affordable} onClick={() => buyItem(item)}>
                              {owned ? "已擁有" : affordable ? "兌換" : "能量不足"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="collection">
                <div className="grid gap-4 md:grid-cols-3">
                  {ownedItems.map((item) => (
                    <Card key={item.id} className="rounded-3xl">
                      <CardContent className="p-6 text-center">
                        <div className="text-6xl">{item.emoji}</div>
                        <h3 className="mt-3 text-lg font-bold">{item.name}</h3>
                        <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </div>
    </div>
  );
}
