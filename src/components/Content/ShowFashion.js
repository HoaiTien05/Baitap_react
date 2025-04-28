import React, { useState, useEffect } from "react";
import getData from "./getData"; // sửa lại đúng 'default import'

export default function ShowFashion() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    myfile: "",
    type_room: "",
    area: "",
    price: "",
    oldprice: "",
  });

  const [roomList, setRoomList] = useState([]);

  // Lấy dữ liệu từ localStorage hoặc getData khi load trang
  useEffect(() => {
    const storedRooms = localStorage.getItem("rooms");
    if (storedRooms) {
      setRoomList(JSON.parse(storedRooms));
    } else {
      const data = getData(); // gọi đúng getData()
      localStorage.setItem("rooms", JSON.stringify(data));
      setRoomList(data);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "myfile") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0]?.name || "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const saveLocalStorage = (event) => {
    event.preventDefault();
    const updatedList = [...roomList, formData];
    setRoomList(updatedList);
    localStorage.setItem("rooms", JSON.stringify(updatedList));

    setFormData({
      id: "",
      name: "",
      myfile: "",
      type_room: "",
      area: "",
      price: "",
      oldprice: "",
    });
  };

  const handleMessage = (event) => {
    event.preventDefault();
    alert("Thanks for your order!");
  };

  return (
    <div className="container">
      <h2>Add Room</h2>
      <form>
        <label>Enter your name:</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Enter Image:</label>
        <input
          type="file"
          name="myfile"
          onChange={handleChange}
        />

        <label>Enter TypeRoom:</label>
        <input
          className="form-control"
          type="text"
          name="type_room"
          value={formData.type_room}
          onChange={handleChange}
        />

        <label>Enter Area:</label>
        <input
          className="form-control"
          type="text"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />

        <label>Enter Price:</label>
        <input
          className="form-control"
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <label>Enter oldPrice:</label>
        <input
          className="form-control"
          type="text"
          name="oldprice"
          value={formData.oldprice}
          onChange={handleChange}
        />

        <button
          type="submit"
          id="add"
          onClick={saveLocalStorage}
          className="btn btn-primary"
        >
          Add
        </button>
        <button
          type="button"
          id="order"
          onClick={handleMessage}
          className="btn btn-primary"
          style={{ marginLeft: "10px" }}
        >
          Đặt Phòng
        </button>
      </form>

      <br /><br />

      {/* Table */}
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>TYPE ROOM</th>
            <th>IMAGE</th>
            <th>AREA</th>
            <th>PRICE</th>
            <th>OLDPRICE</th>
          </tr>
        </thead>
        <tbody>
          {roomList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.type_room}</td>
              <td>
                <img
                  src={"images/" + item.myfile}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  alt=""
                />
              </td>
              <td>{item.area}</td>
              <td>{item.price}</td>
              <td>{item.oldprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
