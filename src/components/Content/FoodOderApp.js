import React, { useState } from 'react';
import './FoodOderApp.css'; // nhớ tạo file FoodOrderApp.css

const FoodOrderApp = () => {
  const [menu] = useState([
    { id: 1, name: 'Phở bò', price: 40000 },
    { id: 2, name: 'Bánh mì', price: 20000 },
    { id: 3, name: 'Cơm tấm', price: 50000 },
    { id: 4, name: 'Hủ tiếu', price: 35000 },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [money, setMoney] = useState('');
  const [total, setTotal] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleOrder = () => {
    const selectedFoods = menu.filter(item => selectedItems.includes(item.id));
    const totalPrice = selectedFoods.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalPrice);
    setRemaining(money - totalPrice);
  };

  return (
    <div className="container_menu">
      <h2 className="title">🍴 Thực đơn nhà hàng 🍴</h2>
      
      <div className="menu">
        {menu.map(item => (
          <label key={item.id} className="menu-item">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
            <span>{item.name}</span>
            <span className="price">{item.price.toLocaleString()}đ</span>
          </label>
        ))}
      </div>

      <div className="input-section">
        <input
          type="number"
          placeholder="💵 Nhập số tiền bạn có"
          value={money}
          onChange={(e) => setMoney(Number(e.target.value))}
        />
        <button onClick={handleOrder}>Đặt hàng</button>
      </div>

      <div className="result">
        <h3>Kết quả đơn hàng:</h3>
        <p><strong>Tổng tiền món đã chọn:</strong> {total.toLocaleString()}đ</p>
        <p><strong>Tiền dư còn lại:</strong> {remaining.toLocaleString()}đ</p>
      </div>
    </div>
  );
};

export default FoodOrderApp;
