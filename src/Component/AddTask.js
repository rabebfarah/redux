import React, { useState } from "react";
import { Card, Form, InputGroup, Button, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, doneTask} from "../JS/actions";

const AddTask = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const filtred = useSelector((state) => state.filtred);

  const add = (e) => {
    e.preventDefault();
    dispatch(addTask({ text: text, isDone: false, id: Date.now() }));
    setText("");
  };

  return (
    <Card style={{width:"800px",height:"600px",marginTop:"150px",position:"absolute",marginLeft:"370px",border:"solid 2px braown"}} >
      <Card.Body >
        <h1 style={{marginTop:" 30"}}>TO DO'S!</h1>

        <Form onSubmit={add}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <InputGroup.Append>
                <Button variant="success" onClick={add}>
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button
          variant="info"
         
          onClick={() => dispatch(doneTask())}
        >
          {filtred ? "ALL" : "isDone"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddTask;