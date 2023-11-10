import React, { useState } from "react";

import Delete from "../../assets/delete.png";

import { ContainerListWrapper, Title, Header } from "./ContainerList.styled.js";
import AddMore from "../AddMore/AddMore";
import Task from "../Task/Task";
import CustomButton from "../CustomButton/CustomButton.jsx";

const ContainerList = ({
  name = "",
  onDelete = () => {},
  tasks = [],
  onAddTask = () => {},
  index = 0,
  onCheckTask = () => {},
  onDeleteTask = () => {},
  onClearTasks = () => {},
  onEditTask = () => {},
}) => {
  const [text, setText] = useState("");

  const addCard = () => {
    if (text === "") return;
    onAddTask(text, index);
  };

  const handleOnCheckTask = (taskIndex) => {
    onCheckTask(index, taskIndex);
  };

  const handleOnDeleteTask = (taskIndex) => {
    onDeleteTask(index, taskIndex);
  };

  const handleOnClearTasks = () => {
    onClearTasks(index);
  };

  const handleOnEdit = (taskIndex, newTask) => {
    onEditTask(index, taskIndex, newTask);
  };

  return (
    <ContainerListWrapper>
      <Header>
        <Title>{name}</Title>
        <button
          onClick={onDelete}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <img src={Delete} alt="Del" />
        </button>
      </Header>

      {/* cards */}
      {tasks.map((item, index) => {
        return (
          <Task
            item={item}
            key={index}
            index={index}
            handleOnCheck={handleOnCheckTask}
            handleOnDelete={handleOnDeleteTask}
            handleOnEdit={handleOnEdit}
          />
        );
      })}

      {/* add card */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "space-between",
        }}
      >
        <AddMore text={text} onChange={setText} onClick={addCard} />
        <CustomButton onClick={handleOnClearTasks}>Clear</CustomButton>
      </div>
    </ContainerListWrapper>
  );
};

export default ContainerList;
