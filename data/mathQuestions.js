function buildOptions(correct, distractors, answerIndex) {
  const unique = distractors
    .filter((item) => item !== correct)
    .filter((item, index, array) => array.indexOf(item) === index)
    .slice(0, 3);

  while (unique.length < 3) {
    unique.push(String(Number(correct) + unique.length + 7));
  }

  const options = unique.map(String);
  options.splice(answerIndex, 0, String(correct));

  return { options, answer: answerIndex };
}

function padId(number) {
  return `math-${String(number).padStart(3, "0")}`;
}

const builders = [
  {
    unit: "多位數的乘除",
    build(index, id, answer) {
      const a = 320 + index * 7;
      const b = 12 + (index % 8);
      const correct = a * b;
      return {
        id,
        unit: this.unit,
        q: `${a} × ${b} = ?`,
        ...buildOptions(correct, [correct + b, correct - b, correct + 100], answer),
        explain: `${a} × ${b} = ${correct}。`
      };
    }
  },
  {
    unit: "四邊形",
    build(index, id, answer) {
      const shapes = [
        ["兩組對邊互相平行的四邊形是？", "平行四邊形", ["三角形", "圓形", "五邊形"], "平行四邊形有兩組對邊互相平行。"],
        ["只有一組對邊平行的四邊形是？", "梯形", ["正方形", "長方形", "圓形"], "梯形有一組對邊互相平行。"],
        ["四個角都是直角，且四邊等長的是？", "正方形", ["菱形", "梯形", "三角形"], "正方形四邊等長，四個角都是直角。"],
        ["四個角都是直角的四邊形是？", "長方形", ["圓形", "梯形", "五邊形"], "長方形有四個直角。"]
      ];
      const item = shapes[index % shapes.length];
      return {
        id,
        unit: this.unit,
        q: item[0],
        ...buildOptions(item[1], item[2], answer),
        explain: item[3]
      };
    }
  },
  {
    unit: "概數",
    build(index, id, answer) {
      const value = 3400 + index * 237;
      const correct = Math.round(value / 100) * 100;
      return {
        id,
        unit: this.unit,
        q: `${value} 四捨五入到百位約是多少？`,
        ...buildOptions(correct, [correct + 100, correct - 100, value], answer),
        explain: `看十位數字決定是否進位，${value} 約為 ${correct}。`
      };
    }
  },
  {
    unit: "數量規律",
    build(index, id, answer) {
      const start = 3 + index;
      const gap = 2 + (index % 6);
      const seq = [start, start + gap, start + gap * 2, start + gap * 3];
      const correct = start + gap * 4;
      return {
        id,
        unit: this.unit,
        q: `${seq.join("、")}、？ 依照規律，下一個數是多少？`,
        ...buildOptions(correct, [correct + gap, correct - gap, correct + 1], answer),
        explain: `每次增加 ${gap}，所以下一個數是 ${correct}。`
      };
    }
  },
  {
    unit: "小數乘法",
    build(index, id, answer) {
      const a = Number((1.2 + (index % 9) * 0.3).toFixed(1));
      const b = 2 + (index % 5);
      const correct = Number((a * b).toFixed(1));
      return {
        id,
        unit: this.unit,
        q: `${a.toFixed(1)} × ${b} = ?`,
        ...buildOptions(correct.toFixed(1), [(correct + 0.1).toFixed(1), (correct - 0.1).toFixed(1), (a + b).toFixed(1)], answer),
        explain: `${a.toFixed(1)} × ${b} = ${correct.toFixed(1)}。`
      };
    }
  },
  {
    unit: "周長和面積",
    build(index, id, answer) {
      const width = 4 + (index % 8);
      const length = width + 5 + (index % 6);
      const isArea = index % 2 === 0;
      const correct = isArea ? length * width : (length + width) * 2;
      return {
        id,
        unit: this.unit,
        q: `長方形長 ${length} 公分、寬 ${width} 公分，${isArea ? "面積" : "周長"}是多少？`,
        ...buildOptions(correct, [length * width, (length + width) * 2, correct + width], answer),
        explain: isArea
          ? `長方形面積 = 長 × 寬 = ${length} × ${width} = ${correct}。`
          : `長方形周長 = (長 + 寬) × 2 = (${length} + ${width}) × 2 = ${correct}。`
      };
    }
  },
  {
    unit: "等值分數",
    build(index, id, answer) {
      const numerator = 1 + (index % 5);
      const denominator = numerator + 3 + (index % 4);
      const multiplier = 2 + (index % 5);
      const correct = `${numerator * multiplier}/${denominator * multiplier}`;
      return {
        id,
        unit: this.unit,
        q: `${numerator}/${denominator} 的等值分數是哪一個？`,
        ...buildOptions(correct, [`${numerator + 1}/${denominator}`, `${numerator}/${denominator + 1}`, `${numerator * multiplier}/${denominator}`], answer),
        explain: `分子分母同乘 ${multiplier}，得到 ${correct}。`
      };
    }
  },
  {
    unit: "簡化計算",
    build(index, id, answer) {
      const a = 25;
      const b = 4 * (3 + (index % 8));
      const correct = a * b;
      return {
        id,
        unit: this.unit,
        q: `25 × ${b} 可以先算 25 × 4 = 100，再算什麼？`,
        ...buildOptions(`100 × ${b / 4}`, [`100 × ${b}`, `25 × ${b / 4}`, `4 × ${b}`], answer),
        explain: `${b} = 4 × ${b / 4}，所以 25 × ${b} = 100 × ${b / 4} = ${correct}。`
      };
    }
  },
  {
    unit: "時間的計算",
    build(index, id, answer) {
      const startHour = 7 + (index % 5);
      const startMinute = (index * 5) % 60;
      const addMinutes = 35 + (index % 6) * 10;
      const total = startHour * 60 + startMinute + addMinutes;
      const hour = Math.floor(total / 60);
      const minute = total % 60;
      const correct = `${hour}:${String(minute).padStart(2, "0")}`;
      return {
        id,
        unit: this.unit,
        q: `${startHour}:${String(startMinute).padStart(2, "0")} 經過 ${addMinutes} 分鐘後是幾點幾分？`,
        ...buildOptions(correct, [`${hour}:${String((minute + 10) % 60).padStart(2, "0")}`, `${hour - 1}:${String(minute).padStart(2, "0")}`, `${hour + 1}:${String(minute).padStart(2, "0")}`], answer),
        explain: `把時間換成分鐘相加，經過 ${addMinutes} 分鐘後是 ${correct}。`
      };
    }
  },
  {
    unit: "立方公分",
    build(index, id, answer) {
      const length = 3 + (index % 5);
      const width = 2 + (index % 4);
      const height = 2 + (index % 3);
      const correct = length * width * height;
      return {
        id,
        unit: this.unit,
        q: `長方體長 ${length} 公分、寬 ${width} 公分、高 ${height} 公分，體積是多少立方公分？`,
        ...buildOptions(correct, [length * width, (length + width + height), correct + length], answer),
        explain: `長方體體積 = 長 × 寬 × 高 = ${length} × ${width} × ${height} = ${correct}。`
      };
    }
  }
];

export const mathQuestions = Array.from({ length: 200 }, (_, index) => {
  const builder = builders[Math.floor(index / 20)];
  return builder.build(index % 20, padId(index + 1), index % 4);
});
