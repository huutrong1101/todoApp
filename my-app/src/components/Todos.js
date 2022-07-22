import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

function Todos(props) {
  const [todo, setTodo] = useState("");

  const inputRef = useRef();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Hãy nhập nội dung!!!");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
      inputRef.current.focus();
    }
  };

  return (
    <div className="addTodos">
      <input
        type="text"
        className="todo-input"
        onChange={(e) => handleChange(e)}
        value={todo}
        ref={inputRef}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
