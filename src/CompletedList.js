import React,{useState} from "react";
import {Container,Row,Col,ListGroup} from "react-bootstrap";
import { useSelector } from "react-redux";
import "./CompletedList.css";



const CompletedList = () => {
    const CompletedTaskList = useSelector((state)=>state.updateCompletedTaskList);
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

    return (
        <div>
            {CompletedTaskList&&CompletedTaskList.map((el,index) => (
                  <ListGroup.Item  variant={color[index%7]}><span className="completedTask">{el}</span></ListGroup.Item>
            ))}
        </div>
    );
};

export default CompletedList;