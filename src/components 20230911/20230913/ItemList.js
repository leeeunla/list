import { useState } from "react";

export function ItemList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  //리액트 onChange이벤트는 바닐라(자바)스크립트에서 keydown 이벤트처럼
  //입력할때마다 발생함. (설계방식이 다름)
  function onChange(e) {
    setNewItem(e.target.value);
  }
  function addItem() {
    const temp = [...items, newItem];
    setItems(temp);
    setNewItem(""); //input 입력창을 clear 시킴
    console.log("addItem함수안", items);
  }
  console.log("ItemList컴포넌트 안", items);
  return (
    <>
      <input
        Placeholder="물품이름을 입력하세요"
        onChange={onChange}
        value={newItem}
      />
      <button onClick={addItem}>물품추가</button>
      <h3>물품목록</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
