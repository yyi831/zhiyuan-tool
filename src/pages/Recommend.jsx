import React, { useState } from "react";

const mockData = [
  {
    name: "华中科技大学",
    city: "武汉",
    score: 640,
    reason: "工程学强校，地处中部，性价比高",
    majors: ["自动化", "电子信息"]
  },
  {
    name: "湖南大学",
    city: "长沙",
    score: 610,
    reason: "湖南省重点大学，金融专业较强",
    majors: ["金融学", "会计学"]
  }
];

export default function Recommend() {
  const [score, setScore] = useState("");
  const [results, setResults] = useState([]);

  const handleRecommend = () => {
    const s = parseInt(score);
    if (!s) return alert("请输入有效分数");
    const list = mockData.filter(d => s >= d.score - 20).map(d => ({
      ...d,
      level: s > d.score + 10 ? "冲一冲" : s >= d.score ? "稳一稳" : "保一保"
    }));
    setResults(list);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🎯 智能推荐</h2>
      <div className="space-x-2 mb-4">
        <input
          className="border px-2 py-1 rounded"
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="输入高考分数"
        />
        <button
          onClick={handleRecommend}
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          推荐志愿
        </button>
      </div>
      <div className="space-y-4">
        {results.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">{item.name} · {item.city}</h3>
            <p className="text-sm text-gray-600">推荐策略：{item.level}</p>
            <p className="text-sm text-gray-800 mb-1">理由：{item.reason}</p>
            <p className="text-sm">推荐专业：{item.majors.join(" / ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
