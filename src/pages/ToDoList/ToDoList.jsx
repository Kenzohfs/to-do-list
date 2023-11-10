import React, { useEffect, useState } from "react";

import {
  ToDoListWrapper,
  Container,
  ContainerActions,
} from "./ToDoList.styled.js";

import ContainerList from "../../components/ContainerList/ContainerList.jsx";
import AddMore from "../../components/AddMore/AddMore.jsx";
import CustomButton from "../../components/CustomButton/CustomButton.jsx";

const initialList = [
  {
    value: "VALIDAÇÃO",
    tasks: [
      { isDone: true, value: "Criar Repositório no github" },
      {
        isDone: true,
        value: "Criar projeto em React com Vite",
      },
      {
        isDone: true,
        value: "Aprender styled-components",
      },
      {
        isDone: true,
        value: "Desenvolver o projeto",
      },
      {
        isDone: true,
        value: "Hospeder projeto online",
      },
      {
        isDone: true,
        value: "Entregar o projeto",
      },
    ],
  },
  {
    value: "IMPORTANTE",
    tasks: [
      {
        isDone: false,
        value: "Estudar para prova de validação",
      },
    ],
  },
  {
    value: "WEG",
    tasks: [
      {
        isDone: true,
        value: "Arrumar bug de coleta de status",
      },
      {
        isDone: false,
        value: "Resolver questão de horas devendo",
      },
    ],
  },
  {
    value: "COMPRAS",
    tasks: [
      {
        isDone: true,
        value: "Comprar lanche",
      },
      {
        isDone: false,
        value: "Comprar novo pano",
      },
    ],
  },
  {
    value: "GAME",
    tasks: [
      {
        isDone: false,
        value: "Buscar itens de missão secundária",
      },
      {
        isDone: true,
        value: "Comprar novo jogo",
      },
    ],
  },
];

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("list")) || initialList
  );
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newColumnText, setNewColumnText] = useState("");

  const showForm = () => {
    setIsInputVisible(!isInputVisible);
  };

  const addColumn = () => {
    if (newColumnText === "") {
      setIsInputVisible(false);
      return;
    }

    setToDoList([...toDoList, { value: newColumnText, tasks: [] }]);

    setIsInputVisible(false);
    setNewColumnText("");
  };

  const handleOnDeleteColumn = (index) => {
    const newList = toDoList.filter((__, i) => i !== index);
    setToDoList(newList);
  };

  const onAddTask = (text, index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].tasks.push({
      isDone: false,
      value: text,
    });
    setToDoList(newToDoList);
  };

  const onCheckTask = (index, taskIndex) => {
    const newToDoList = [...toDoList];
    const task = newToDoList[index].tasks[taskIndex];

    task.isDone = !task.isDone;

    setToDoList(newToDoList);
  };

  const onDeleteTask = (index, taskIndex) => {
    const newToDoList = [...toDoList];
    newToDoList[index].tasks = newToDoList[index].tasks.filter(
      (__, i) => i !== taskIndex
    );

    setToDoList(newToDoList);
  };

  const onClearTasks = (index) => {
    const newToDoList = [...toDoList];
    newToDoList[index].tasks = [];

    setToDoList(newToDoList);
  };

  const resetList = () => {
    setToDoList(initialList);
    localStorage.clear();
    window.location.reload();
  };

  const onEditTask = (index, taskIndex, text) => {
    const newToDoList = [...toDoList];
    newToDoList[index].tasks[taskIndex].value = text;

    setToDoList(newToDoList);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <Container>
      {isInputVisible ? (
        <ContainerActions>
          <AddMore
            text={newColumnText}
            onChange={setNewColumnText}
            onClick={addColumn}
          />
        </ContainerActions>
      ) : (
        <ContainerActions>
          <CustomButton onClick={resetList}>Reset</CustomButton>
          <CustomButton onClick={showForm}>Add</CustomButton>
        </ContainerActions>
      )}
      <ToDoListWrapper>
        {toDoList.map((item, index) => (
          <ContainerList
            key={index}
            name={item.value}
            index={index}
            onDelete={() => handleOnDeleteColumn(index)}
            onAddTask={onAddTask}
            tasks={item.tasks}
            onCheckTask={onCheckTask}
            onDeleteTask={onDeleteTask}
            onClearTasks={onClearTasks}
            onEditTask={onEditTask}
          />
        ))}
      </ToDoListWrapper>
    </Container>
  );
};

export default ToDoList;
