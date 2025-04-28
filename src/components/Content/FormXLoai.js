import { useState } from 'react';

export default function FormXLoai() {
    const [math, setMath] = useState('');
    const [physics, setPhysics] = useState('');
    const [average, setAverage] = useState(null);
    const [classification, setClassification] = useState('');
  
    const calculateResult = () => {
      const mathScore = parseFloat(math);
      const physicsScore = parseFloat(physics);
  
      if (isNaN(mathScore) || isNaN(physicsScore)) {
        alert('Vui lòng nhập đúng điểm số!');
        return;
      }
  
      const avg = (mathScore + physicsScore) / 2;
      setAverage(avg.toFixed(2));
  
      if (avg >= 9) {
        setClassification('Xuất sắc');
      } else if (avg >= 8) {
        setClassification('Giỏi');
      } else if (avg >= 7) {
        setClassification('Khá');
      } else if (avg >= 5) {
        setClassification('Trung bình');
      } else {
        setClassification('Kém');
      }
    };
  
    return (
      <div className="">
        <h1 className="">Xếp loại học sinh</h1>
  
        <div className="">
          <label className="">Điểm Toán:</label>
          <input
            type="number"
            value={math}
            onChange={(e) => setMath(e.target.value)}
            placeholder="Nhập điểm Toán"/>
        </div>
  
        <div className="">
          <label className="">Điểm Lý:</label>
          <input
            type="number"
            value={physics}
            onChange={(e) => setPhysics(e.target.value)}
            placeholder="Nhập điểm Lý"/>
        </div>
  
        <button onClick={calculateResult}> Submit </button>
  
        {average !== null && (
          <div className="">
            <p className="">Điểm trung bình: <strong>{average}</strong></p>
            <p className="">Xếp loại: <strong>{classification}</strong></p>
          </div>
        )}
      </div>
    );
  }