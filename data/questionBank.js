import { mathQuestions } from "./mathQuestions";
import { chineseQuestions } from "./chineseQuestions";

export const questionBank = {
  math: {
    subjectName: "數學",
    unitName: "四年級數學｜康軒方向綜合複習",
    reward: 100,
    drawCount: 20,
    questions: mathQuestions
  },
  chinese: {
    subjectName: "國語",
    unitName: "四年級國語｜康軒方向綜合複習",
    reward: 100,
    drawCount: 20,
    questions: chineseQuestions
  },
  science: {
    unitName: "四年級自然｜植物與生活複習",
    reward: 75,
    drawCount: 20,
    questions: [
      { id: "science-001", q: "植物行光合作用主要需要什麼？", options: ["陽光", "石頭", "塑膠", "金屬"], answer: 0, explain: "植物需要陽光、水和二氧化碳進行光合作用。" },
      { id: "science-002", q: "植物的根主要功能是？", options: ["開花", "吸收水分", "製造種子", "吸引昆蟲"], answer: 1, explain: "根可以固定植物並吸收水分與養分。" },
      { id: "science-003", q: "葉子的主要功能之一是？", options: ["吸收陽光製造養分", "讓植物移動", "發出聲音", "變成石頭"], answer: 0, explain: "葉子能吸收陽光，幫助植物製造養分。" },
      { id: "science-004", q: "種子發芽通常需要？", options: ["水分和適合溫度", "冰塊", "油漆", "鹽巴"], answer: 0, explain: "種子發芽需要水分、空氣與合適溫度。" },
      { id: "science-005", q: "花的功能通常和什麼有關？", options: ["繁殖", "煮飯", "發電", "搬運"], answer: 0, explain: "花和植物繁殖有關，可形成果實與種子。" },
      { id: "science-006", q: "仙人掌的刺主要可以幫助？", options: ["減少水分散失", "增加重量", "發出音樂", "變成動物"], answer: 0, explain: "刺可以減少水分散失，也可保護植物。" },
      { id: "science-007", q: "植物需要空氣中的哪一種氣體進行光合作用？", options: ["二氧化碳", "氦氣", "氖氣", "水蒸氣"], answer: 0, explain: "植物會吸收二氧化碳進行光合作用。" },
      { id: "science-008", q: "果實的功能之一是？", options: ["保護種子", "製造玻璃", "產生電力", "吸收聲音"], answer: 0, explain: "果實可以保護種子，並幫助種子傳播。" },
      { id: "science-009", q: "觀察植物時，哪一項做法較合適？", options: ["每天記錄變化", "隨意拔掉根", "不澆水", "放在密閉盒中"], answer: 0, explain: "觀察實驗應持續記錄，避免破壞植物。" },
      { id: "science-010", q: "下列哪一個是植物？", options: ["榕樹", "石頭", "塑膠瓶", "鐵釘"], answer: 0, explain: "榕樹是植物。" },
    ],
  },
  social: {
    unitName: "四年級社會｜家鄉與生活複習",
    reward: 75,
    drawCount: 20,
    questions: [
      { id: "social-001", q: "地圖上的比例尺可以幫助我們知道什麼？", options: ["實際距離", "天氣溫度", "人的心情", "食物味道"], answer: 0, explain: "比例尺可用來換算地圖距離與實際距離。" },
      { id: "social-002", q: "社區中的圖書館主要提供什麼服務？", options: ["借書與閱讀", "修車", "賣蔬菜", "製造衣服"], answer: 0, explain: "圖書館提供閱讀、借書與學習資源。" },
      { id: "social-003", q: "下列哪一項是公共設施？", options: ["公園", "私人玩具", "個人鉛筆盒", "家中沙發"], answer: 0, explain: "公園是大家可以使用的公共設施。" },
      { id: "social-004", q: "保護家鄉環境可以怎麼做？", options: ["垃圾分類", "亂丟垃圾", "浪費水", "破壞公物"], answer: 0, explain: "垃圾分類、節約資源能保護環境。" },
      { id: "social-005", q: "看地圖時，方位可以幫助我們？", options: ["判斷方向", "知道味道", "測量體重", "聽音樂"], answer: 0, explain: "方位可以幫助判斷東西南北。" },
      { id: "social-006", q: "社區居民共同遵守規則，是為了？", options: ["維持安全與秩序", "讓大家吵架", "浪費時間", "增加垃圾"], answer: 0, explain: "規則能讓社區生活更安全、有秩序。" },
      { id: "social-007", q: "下列哪一項屬於家鄉特色？", options: ["地方小吃", "亂丟垃圾", "破壞環境", "不守規則"], answer: 0, explain: "地方小吃、傳統活動、景點都可能是家鄉特色。" },
      { id: "social-008", q: "遇到火災應該撥打？", options: ["119", "1100", "1234", "1688"], answer: 0, explain: "在台灣，火災或救護可撥打 119。" },
      { id: "social-009", q: "社區志工常見的工作是？", options: ["協助服務居民", "破壞公園", "亂停車", "亂貼廣告"], answer: 0, explain: "志工會協助社區服務與公共活動。" },
      { id: "social-010", q: "尊重不同文化代表什麼？", options: ["理解並接納差異", "嘲笑別人", "只接受自己想法", "拒絕溝通"], answer: 0, explain: "尊重文化差異可以讓社會更和諧。" },
    ],
  },
};
