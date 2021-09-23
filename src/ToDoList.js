import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./ToDoList.css";

const ToDoList = () => {
  let color = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const [task,setTask] = useState("");
  const [taskList,setTaskList] = useState([]);

  const addTask = ()=>{
    let newTaskList = [...taskList];
    newTaskList.push(task);
    setTaskList(newTaskList);
    document.getElementById("searchInput").value="";
  }
  const removeTask = (task)=> {
    let newTaskList = [...taskList];
    newTaskList = newTaskList.filter(el => el !== task);
    setTaskList(newTaskList);
  }
  useEffect(() => {
    console.log(taskList)
  }, [taskList]);

  return (
    <Container>
      <Row className="heading">
        <span>TO DO LIST</span>
      </Row>
      <Row className="searchBar">
        <InputGroup className="mb-3">
          <FormControl
            id="searchInput"
            placeholder="ADD TASK"
            aria-label="ADD TASK"
            aria-describedby="basic-addon2"
            onChange={(e)=>{setTask(e.target.value)}}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={addTask}>
            ADD
          </Button>
        </InputGroup>
      </Row>
      <Row>
        <ListGroup>
          {taskList &&
            taskList.map((el,index) => (
              <ListGroup.Item variant={color[index%7]} onClick={()=>{removeTask(el)}}>{el}</ListGroup.Item>
            ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default ToDoList;
