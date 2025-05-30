import React, { useState } from 'react';

export default function App() {
  const [score, setScore] = useState('');
  const [province, setProvince] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const mockData = [
    { school: '北京大学', type: '985/211', city: '北京', minScore: 680 },
    { school: '复旦大学', type: '985/211', city: '上海', minScore: 670 },
    { school: '浙江大学', type: '985/211', city: '杭州', minScore: 660 },
    { school: '华中科技大学', type: '985/211', city: '武汉', minScore: 640 },
    { school: '湖南大学', type: '211', city: '长沙', minScore: 610 },
  ];

  const handleSubmit = () => {
    const numScore = parseInt(score);
    if (!province || isNaN(numScore)) return alert("请输入有效信息");
    const result = mockData.filter(item => numScore >= item.minScore - 20);
    setRecommendations(result);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>志愿填报助手</h1>
      <input placeholder="高考分数" value={score} onChange={e => setScore(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
      <input placeholder="所在省份" value={province} onChange={e => setProvince(e.target.value)} style={{ display: 'block', marginBottom: 10 }} />
      <button onClick={handleSubmit}>推荐志愿</button>
      {recommendations.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h2>推荐结果：</h2>
          <ul>
            {recommendations.map((item, i) => (
              <li key={i}>{item.school}（{item.type} · {item.city}） - 录取线约：{item.minScore}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}