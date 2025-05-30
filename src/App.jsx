import React, { useState } from 'react';

const mockSchools = [
  {
    name: "华中科技大学",
    type: "985/211",
    city: "武汉",
    province: "湖北",
    minScore: 640,
    intro: "华中科技大学是中国著名的工科强校，位于湖北武汉。",
    majors: ["自动化", "计算机科学与技术"]
  },
  {
    name: "湖南大学",
    type: "211",
    city: "长沙",
    province: "湖南",
    minScore: 610,
    intro: "湖南大学是位于长沙的国家重点大学，历史悠久。",
    majors: ["金融学", "法学"]
  },
  {
    name: "中南大学",
    type: "985/211",
    city: "长沙",
    province: "湖南",
    minScore: 630,
    intro: "中南大学以医学与工程学科见长，位于湖南长沙。",
    majors: ["临床医学", "土木工程"]
  }
];

const App = () => {
  const [score, setScore] = useState('');
  const [province, setProvince] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = () => {
    const numScore = parseInt(score);
    if (!province || isNaN(numScore)) {
      alert("请输入有效信息");
      return;
    }

    const result = mockSchools
      .filter(s => numScore >= s.minScore - 20)
      .map(s => {
        const level = numScore >= s.minScore + 10 ? "冲一冲" :
                      numScore >= s.minScore ? "稳一稳" : "保一保";
        return { ...s, level };
      });

    setRecommendations(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎓 志愿填报助手</h1>

      <div className="max-w-md mx-auto space-y-4">
        <input
          type="number"
          className="w-full border rounded px-4 py-2"
          placeholder="请输入你的高考分数"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <input
          type="text"
          className="w-full border rounded px-4 py-2"
          placeholder="请输入所在省份（如 湖南）"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          推荐志愿
        </button>
      </div>

      {recommendations.length > 0 && (
        <div className="mt-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">推荐结果：</h2>
          {recommendations.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-bold">{item.name} ({item.type} · {item.city})</h3>
              <p className="text-sm text-gray-600 mb-1">录取线约：{item.minScore}，推荐策略：{item.level}</p>
              <p className="text-sm text-gray-800 mb-1">推荐专业：{item.majors.join(' / ')}</p>
              <p className="text-sm text-gray-700">{item.intro}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
