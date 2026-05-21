const baseMathQuestions = [
  {
    id: "math-001",
    unit: "一億以內的數",
    q: "34567892 讀作下列哪一個？",
    options: ["三千四百五十六萬七千八百九十二", "三億四千五百六十七萬八千九十二", "三千四百五十六萬七百八十二", "三十四萬五千六百七十八"],
    answer: 0,
    explain: "34567892 是三千四百五十六萬七千八百九十二。"
  },
  {
    id: "math-002",
    unit: "一億以內的數",
    q: "八千零五萬三千零二寫成數字是？",
    options: ["80503002", "80053002", "8053002", "85003002"],
    answer: 0,
    explain: "八千零五萬是 80050000，再加 3002，得到 80503002。"
  },
  {
    id: "math-003",
    unit: "一億以內的數",
    q: "72950000 的千萬位數字是？",
    options: ["7", "2", "9", "5"],
    answer: 0,
    explain: "72950000 的千萬位是最左邊的 7。"
  },
  {
    id: "math-004",
    unit: "一億以內的數",
    q: "下列哪一個數最大？",
    options: ["4567890", "5467890", "4568790", "4567980"],
    answer: 1,
    explain: "比較最高位數，5467890 的百萬位是 5，最大。"
  },
  {
    id: "math-005",
    unit: "一億以內的數",
    q: "65000000 約等於幾千萬？",
    options: ["5千萬", "6千萬", "7千萬", "8千萬"],
    answer: 2,
    explain: "65000000 四捨五入到千萬位，約為 7 千萬。"
  },

  {
    id: "math-006",
    unit: "整數的乘法",
    q: "234 × 6 = ?",
    options: ["1204", "1304", "1404", "1504"],
    answer: 2,
    explain: "234 × 6 = 1404。"
  },
  {
    id: "math-007",
    unit: "整數的乘法",
    q: "125 × 8 = ?",
    options: ["900", "1000", "1100", "1200"],
    answer: 1,
    explain: "125 × 8 = 1000。"
  },
  {
    id: "math-008",
    unit: "整數的乘法",
    q: "48 × 25 可以先算 25 × 4 = 100，再算？",
    options: ["100 × 8", "100 × 12", "100 × 48", "100 ÷ 12"],
    answer: 1,
    explain: "48 = 4 × 12，所以 48 × 25 = 100 × 12 = 1200。"
  },
  {
    id: "math-009",
    unit: "整數的乘法",
    q: "307 × 40 = ?",
    options: ["1228", "12280", "12080", "13280"],
    answer: 1,
    explain: "307 × 4 = 1228，再乘以 10，得到 12280。"
  },
  {
    id: "math-010",
    unit: "整數的乘法",
    q: "一盒鉛筆有 24 枝，36 盒共有幾枝？",
    options: ["840", "864", "884", "904"],
    answer: 1,
    explain: "24 × 36 = 864。"
  },

  {
    id: "math-011",
    unit: "整數的除法",
    q: "864 ÷ 8 = ?",
    options: ["108", "118", "98", "88"],
    answer: 0,
    explain: "864 ÷ 8 = 108。"
  },
  {
    id: "math-012",
    unit: "整數的除法",
    q: "735 ÷ 7 = ?",
    options: ["95", "100", "105", "115"],
    answer: 2,
    explain: "735 ÷ 7 = 105。"
  },
  {
    id: "math-013",
    unit: "整數的除法",
    q: "一袋糖果有 96 顆，平均分給 12 人，每人幾顆？",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explain: "96 ÷ 12 = 8。"
  },
  {
    id: "math-014",
    unit: "整數的除法",
    q: "625 ÷ 5 = ?",
    options: ["105", "115", "125", "135"],
    answer: 2,
    explain: "625 ÷ 5 = 125。"
  },
  {
    id: "math-015",
    unit: "整數的除法",
    q: "430 ÷ 20 的商和餘數是？",
    options: ["商 21 餘 10", "商 20 餘 30", "商 22 餘 10", "商 21 餘 0"],
    answer: 0,
    explain: "20 × 21 = 420，430 - 420 = 10。"
  },

  {
    id: "math-016",
    unit: "角度",
    q: "直角是多少度？",
    options: ["45度", "60度", "90度", "180度"],
    answer: 2,
    explain: "直角是 90 度。"
  },
  {
    id: "math-017",
    unit: "角度",
    q: "平角是多少度？",
    options: ["90度", "120度", "180度", "360度"],
    answer: 2,
    explain: "平角是 180 度。"
  },
  {
    id: "math-018",
    unit: "角度",
    q: "下列哪一個是銳角？",
    options: ["30度", "90度", "120度", "180度"],
    answer: 0,
    explain: "小於 90 度的角是銳角。"
  },
  {
    id: "math-019",
    unit: "角度",
    q: "下列哪一個是鈍角？",
    options: ["45度", "80度", "100度", "90度"],
    answer: 2,
    explain: "大於 90 度且小於 180 度的角是鈍角。"
  },
  {
    id: "math-020",
    unit: "角度",
    q: "一個圓周角是幾度？",
    options: ["90度", "180度", "270度", "360度"],
    answer: 3,
    explain: "繞一圈是 360 度。"
  },

  {
    id: "math-021",
    unit: "公里",
    q: "1 公里等於幾公尺？",
    options: ["10公尺", "100公尺", "1000公尺", "10000公尺"],
    answer: 2,
    explain: "1 公里 = 1000 公尺。"
  },
  {
    id: "math-022",
    unit: "公里",
    q: "3 公里 250 公尺等於幾公尺？",
    options: ["325", "3025", "3250", "3500"],
    answer: 2,
    explain: "3 公里 = 3000 公尺，加 250 公尺是 3250 公尺。"
  },
  {
    id: "math-023",
    unit: "公里",
    q: "5200 公尺等於？",
    options: ["5公里20公尺", "5公里200公尺", "52公里", "520公里"],
    answer: 1,
    explain: "5200 公尺 = 5 公里 200 公尺。"
  },
  {
    id: "math-024",
    unit: "公里",
    q: "小明走了 2 公里 400 公尺，小華走了 1800 公尺，誰走得比較遠？",
    options: ["小明", "小華", "一樣遠", "無法比較"],
    answer: 0,
    explain: "2 公里 400 公尺 = 2400 公尺，比 1800 公尺遠。"
  },
  {
    id: "math-025",
    unit: "公里",
    q: "7500 公尺 - 2 公里 = ?",
    options: ["5500公尺", "5700公尺", "7300公尺", "9500公尺"],
    answer: 0,
    explain: "2 公里 = 2000 公尺，7500 - 2000 = 5500。"
  },

  {
    id: "math-026",
    unit: "三角形",
    q: "三角形有幾個邊？",
    options: ["2個", "3個", "4個", "5個"],
    answer: 1,
    explain: "三角形有 3 個邊。"
  },
  {
    id: "math-027",
    unit: "三角形",
    q: "三角形的內角和是多少度？",
    options: ["90度", "120度", "180度", "360度"],
    answer: 2,
    explain: "三角形三個內角相加是 180 度。"
  },
  {
    id: "math-028",
    unit: "三角形",
    q: "有一個三角形兩角分別是 50 度和 60 度，第三角是多少度？",
    options: ["60度", "70度", "80度", "90度"],
    answer: 1,
    explain: "180 - 50 - 60 = 70。"
  },
  {
    id: "math-029",
    unit: "三角形",
    q: "三個邊一樣長的三角形是？",
    options: ["直角三角形", "等腰三角形", "正三角形", "鈍角三角形"],
    answer: 2,
    explain: "三邊等長的三角形叫正三角形。"
  },
  {
    id: "math-030",
    unit: "三角形",
    q: "有一個角是 90 度的三角形是？",
    options: ["銳角三角形", "直角三角形", "鈍角三角形", "正三角形"],
    answer: 1,
    explain: "有一個角是直角的三角形叫直角三角形。"
  },

  {
    id: "math-031",
    unit: "分數",
    q: "2/4 約分後是？",
    options: ["1/4", "1/2", "2/2", "4/2"],
    answer: 1,
    explain: "2/4 的分子分母同除以 2，得到 1/2。"
  },
  {
    id: "math-032",
    unit: "分數",
    q: "下列哪一個分數最大？",
    options: ["1/2", "1/3", "1/4", "1/5"],
    answer: 0,
    explain: "分子都是 1 時，分母越小，分數越大。"
  },
  {
    id: "math-033",
    unit: "分數",
    q: "3/8 和 5/8 哪一個比較大？",
    options: ["3/8", "5/8", "一樣大", "不能比較"],
    answer: 1,
    explain: "分母相同時，分子越大，分數越大。"
  },
  {
    id: "math-034",
    unit: "分數",
    q: "1/4 + 2/4 = ?",
    options: ["1/8", "2/8", "3/4", "3/8"],
    answer: 2,
    explain: "同分母分數相加，分母不變，分子相加，得到 3/4。"
  },
  {
    id: "math-035",
    unit: "分數",
    q: "7/10 - 3/10 = ?",
    options: ["4/10", "10/10", "3/10", "4/20"],
    answer: 0,
    explain: "同分母分數相減，分母不變，7 - 3 = 4。"
  },

  {
    id: "math-036",
    unit: "小數",
    q: "0.5 等於哪一個分數？",
    options: ["1/2", "1/5", "5/10", "以上皆可"],
    answer: 3,
    explain: "0.5 = 1/2，也等於 5/10。"
  },
  {
    id: "math-037",
    unit: "小數",
    q: "3.6 和 3.45 哪一個比較大？",
    options: ["3.6", "3.45", "一樣大", "不能比較"],
    answer: 0,
    explain: "3.6 可看成 3.60，3.60 大於 3.45。"
  },
  {
    id: "math-038",
    unit: "小數",
    q: "0.7 + 0.2 = ?",
    options: ["0.5", "0.9", "1.0", "1.2"],
    answer: 1,
    explain: "0.7 + 0.2 = 0.9。"
  },
  {
    id: "math-039",
    unit: "小數",
    q: "4.08 的 8 在哪一位？",
    options: ["個位", "十分位", "百分位", "千分位"],
    answer: 2,
    explain: "4.08 中，8 在百分位。"
  },
  {
    id: "math-040",
    unit: "小數",
    q: "1.25 + 0.75 = ?",
    options: ["1.5", "1.75", "2", "2.25"],
    answer: 2,
    explain: "1.25 + 0.75 = 2。"
  },

  {
    id: "math-041",
    unit: "周長與面積",
    q: "長方形長 8 公分、寬 5 公分，周長是多少？",
    options: ["13公分", "26公分", "40公分", "80公分"],
    answer: 1,
    explain: "長方形周長 = (長 + 寬) × 2 = (8 + 5) × 2 = 26。"
  },
  {
    id: "math-042",
    unit: "周長與面積",
    q: "正方形邊長 6 公分，周長是多少？",
    options: ["12公分", "24公分", "36公分", "48公分"],
    answer: 1,
    explain: "正方形周長 = 邊長 × 4 = 6 × 4 = 24。"
  },
  {
    id: "math-043",
    unit: "周長與面積",
    q: "長方形長 9 公分、寬 4 公分，面積是多少？",
    options: ["13平方公分", "26平方公分", "36平方公分", "40平方公分"],
    answer: 2,
    explain: "長方形面積 = 長 × 寬 = 9 × 4 = 36。"
  },
  {
    id: "math-044",
    unit: "周長與面積",
    q: "正方形邊長 7 公分，面積是多少？",
    options: ["14平方公分", "28平方公分", "49平方公分", "56平方公分"],
    answer: 2,
    explain: "正方形面積 = 邊長 × 邊長 = 7 × 7 = 49。"
  },
  {
    id: "math-045",
    unit: "周長與面積",
    q: "一個長方形面積 48 平方公分，長是 8 公分，寬是多少？",
    options: ["4公分", "5公分", "6公分", "7公分"],
    answer: 2,
    explain: "48 ÷ 8 = 6。"
  },

  {
    id: "math-046",
    unit: "整數四則",
    q: "36 + 24 × 2 = ?",
    options: ["84", "120", "96", "72"],
    answer: 0,
    explain: "先乘除後加減，24 × 2 = 48，36 + 48 = 84。"
  },
  {
    id: "math-047",
    unit: "整數四則",
    q: "(36 + 24) × 2 = ?",
    options: ["84", "100", "120", "144"],
    answer: 2,
    explain: "括號先算，36 + 24 = 60，60 × 2 = 120。"
  },
  {
    id: "math-048",
    unit: "整數四則",
    q: "100 - 48 ÷ 6 = ?",
    options: ["8", "52", "92", "108"],
    answer: 2,
    explain: "先算 48 ÷ 6 = 8，再算 100 - 8 = 92。"
  },
  {
    id: "math-049",
    unit: "整數四則",
    q: "72 ÷ 8 × 5 = ?",
    options: ["9", "40", "45", "50"],
    answer: 2,
    explain: "由左到右計算，72 ÷ 8 = 9，9 × 5 = 45。"
  },
  {
    id: "math-050",
    unit: "整數四則",
    q: "商店有 5 箱飲料，每箱 24 瓶，賣出 38 瓶後還剩幾瓶？",
    options: ["72", "82", "92", "102"],
    answer: 1,
    explain: "5 × 24 = 120，120 - 38 = 82。"
  }
];

function buildOptions(correct, distractors, answerIndex) {
  const uniqueDistractors = distractors
    .filter((item) => item !== correct)
    .filter((item, index, array) => array.indexOf(item) === index)
    .slice(0, 3);

  while (uniqueDistractors.length < 3) {
    uniqueDistractors.push(correct + uniqueDistractors.length + 7);
  }

  const options = uniqueDistractors.map(String);
  options.splice(answerIndex, 0, String(correct));

  return { options, answer: answerIndex };
}

function createMathQuestion(number) {
  const id = `math-${String(number).padStart(3, "0")}`;
  const index = number - 51;
  const answerIndex = index % 4;
  const type = index % 10;

  if (type === 0) {
    const value = 10000000 + index * 234567;
    const digit = Math.floor(value / 1000000) % 10;
    const result = buildOptions(digit, [digit + 1, Math.max(0, digit - 1), (digit + 3) % 10], answerIndex);
    return {
      id,
      unit: "一億以內的數",
      q: `${value} 的百萬位數字是？`,
      ...result,
      explain: `${value} 從右邊數第七位是百萬位，百萬位數字是 ${digit}。`
    };
  }

  if (type === 1) {
    const a = 120 + index * 3;
    const b = 4 + (index % 6);
    const correct = a * b;
    const result = buildOptions(correct, [correct + b, correct - b, correct + 100], answerIndex);
    return {
      id,
      unit: "整數的乘法",
      q: `${a} × ${b} = ?`,
      ...result,
      explain: `${a} × ${b} = ${correct}。`
    };
  }

  if (type === 2) {
    const divisor = 3 + (index % 7);
    const quotient = 24 + index;
    const dividend = divisor * quotient;
    const result = buildOptions(quotient, [quotient + 2, quotient - 2, quotient + divisor], answerIndex);
    return {
      id,
      unit: "整數的除法",
      q: `${dividend} ÷ ${divisor} = ?`,
      ...result,
      explain: `${divisor} × ${quotient} = ${dividend}，所以答案是 ${quotient}。`
    };
  }

  if (type === 3) {
    const angle = 20 + ((index * 10) % 150);
    const correct = angle < 90 ? "銳角" : angle === 90 ? "直角" : "鈍角";
    const choices = ["銳角", "直角", "鈍角", "平角"];
    const options = choices.filter((item) => item !== correct);
    options.splice(answerIndex, 0, correct);
    return {
      id,
      unit: "角度",
      q: `${angle} 度的角屬於哪一種角？`,
      options,
      answer: answerIndex,
      explain: "小於 90 度是銳角，等於 90 度是直角，大於 90 度且小於 180 度是鈍角。"
    };
  }

  if (type === 4) {
    const km = 2 + (index % 8);
    const meters = 50 * (index % 18);
    const correct = km * 1000 + meters;
    const result = buildOptions(correct, [correct + 100, correct - 100, km * 100 + meters], answerIndex);
    return {
      id,
      unit: "公里",
      q: `${km} 公里 ${meters} 公尺等於幾公尺？`,
      ...result,
      explain: `${km} 公里 = ${km * 1000} 公尺，再加 ${meters} 公尺，共 ${correct} 公尺。`
    };
  }

  if (type === 5) {
    const first = 35 + (index % 6) * 5;
    const second = 45 + (index % 5) * 5;
    const correct = 180 - first - second;
    const result = buildOptions(correct, [correct + 5, correct - 5, 180 - first], answerIndex);
    return {
      id,
      unit: "三角形",
      q: `三角形兩個角是 ${first} 度和 ${second} 度，第三個角是多少度？`,
      ...result,
      explain: `三角形內角和是 180 度，180 - ${first} - ${second} = ${correct}。`
    };
  }

  if (type === 6) {
    const denominator = 6 + (index % 7);
    const left = 1 + (index % (denominator - 2));
    const right = Math.min(denominator - 1, left + 1);
    const correct = `${right}/${denominator}`;
    const options = [`${left}/${denominator}`, correct, `${right}/${denominator + 1}`, `${left}/10`];
    const normalized = options.filter((item, optionIndex, array) => array.indexOf(item) === optionIndex);

    while (normalized.length < 4) normalized.push(`${normalized.length + 1}/${denominator + 2}`);
    normalized.splice(normalized.indexOf(correct), 1);
    normalized.splice(answerIndex, 0, correct);

    return {
      id,
      unit: "分數",
      q: `${left}/${denominator} 和 ${right}/${denominator} 哪一個比較大？`,
      options: normalized.slice(0, 4),
      answer: answerIndex,
      explain: `分母相同時，分子越大，分數越大，所以 ${correct} 較大。`
    };
  }

  if (type === 7) {
    const a = ((index % 9) + 1) / 10;
    const b = (((index + 3) % 8) + 1) / 10;
    const correct = Number((a + b).toFixed(1));
    const result = buildOptions(correct, [Number((correct + 0.1).toFixed(1)), Number((correct - 0.1).toFixed(1)), Number((a * b).toFixed(2))], answerIndex);
    return {
      id,
      unit: "小數",
      q: `${a.toFixed(1)} + ${b.toFixed(1)} = ?`,
      ...result,
      explain: `小數點對齊相加，${a.toFixed(1)} + ${b.toFixed(1)} = ${correct.toFixed(1)}。`
    };
  }

  if (type === 8) {
    const width = 3 + (index % 8);
    const length = width + 4 + (index % 5);
    const correct = length * width;
    const result = buildOptions(correct, [(length + width) * 2, correct + width, correct - width], answerIndex);
    return {
      id,
      unit: "周長與面積",
      q: `長方形長 ${length} 公分、寬 ${width} 公分，面積是多少平方公分？`,
      ...result,
      explain: `長方形面積 = 長 × 寬 = ${length} × ${width} = ${correct}。`
    };
  }

  const a = 40 + index;
  const b = 6 + (index % 9);
  const c = 2 + (index % 5);
  const correct = a + b * c;
  const result = buildOptions(correct, [(a + b) * c, correct + c, correct - c], answerIndex);
  return {
    id,
    unit: "整數四則",
    q: `${a} + ${b} × ${c} = ?`,
    ...result,
    explain: `先乘除後加減，${b} × ${c} = ${b * c}，${a} + ${b * c} = ${correct}。`
  };
}

const generatedMathQuestions = Array.from({ length: 150 }, (_, index) =>
  createMathQuestion(index + 51)
);

export const mathQuestions = [...baseMathQuestions, ...generatedMathQuestions];
