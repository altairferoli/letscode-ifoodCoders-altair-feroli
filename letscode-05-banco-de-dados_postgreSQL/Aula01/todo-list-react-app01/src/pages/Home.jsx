import { useState } from "react";
import { TodoListItem } from "../components/TodoListItem";
import "./Home.css";

export function Home() {
  const itemsArray = useState(() => {
    let todoItems = [
      { id: 1, text: "Wake up at 5:30 a.m.", checked: true },
      { id: 2, text: "Get out for a walk", checked: true },
      { id: 3, text: "Make the bed and organize the bedroom", checked: false },
      { id: 4, text: "Do the daily exercise session", checked: false },
      { id: 5, text: "Take a shower", checked: true },
      { id: 6, text: "Make the breakfeast", checked: true },
      { id: 7, text: "Get to work", checked: true },
    ];
    return todoItems;
  });

  function updateChecked(id, checked) {
    const findId = itemsArray.findIndex((item) => {
      return item.id === id;
    });
    itemsArray[findId].checked = checked;
    console.table(itemsArray);
  }

  return (
    <div className="container">
      {itemsArray.map(({ id, text, checked }) => {
        return (
          <TodoListItem
            id={id}
            text={text}
            key={id}
            checked={checked}
            updateChecked={updateChecked}
          />
        );
      })}
    </div>
  );
}
