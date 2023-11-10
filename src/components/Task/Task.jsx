import React, { useState } from "react";

import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.png";

import { ContainerActions, ContainerTask, Text } from "./Task.styled";
import Input from "../Input/Input";

const Task = ({ item, handleOnCheck, index, handleOnDelete, handleOnEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.value);

  const toggleEdit = () => {
    if (isEditing) {
      handleOnEdit(index, editValue);
    }

    setIsEditing(!isEditing);
  };

  return (
    <ContainerTask>
      <div style={{ width: "10%" }}>
        <input
          type="checkbox"
          onChange={() => handleOnCheck(index)}
          checked={item.isDone}
        />
      </div>

      {!isEditing ? (
        <Text $check={item.isDone}>{item.value}</Text>
      ) : (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      )}
      <ContainerActions>
        <button
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            width: "15px",
          }}
          onClick={toggleEdit}
        >
          <img src={Edit} style={{ width: "100%" }} alt="Edit" />
        </button>

        <button
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            width: "15px",
          }}
          onClick={() => handleOnDelete(index)}
        >
          <img src={Delete} style={{ width: "100%" }} alt="Del" />
        </button>
      </ContainerActions>
    </ContainerTask>
  );
};

export default Task;
