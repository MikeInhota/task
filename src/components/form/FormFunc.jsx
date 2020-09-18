import React, { useState } from "react";
import "./style.css";

const Form = (props) => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [project, setProject] = useState();

  const handleSubmit = (e) => {
    e.preventDefaul();
    const task = {id: Date.now(), title, description, status, project};
    props.addTask(task);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Tasks</h1>
      <input
        value={title}
        type="text"
        placeholder="titulo"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="descrição"
        onChange={(e) => setDescription(e.target.value)}
      />
      <select onChange={(e) => setProject(e.target.value)}>
        {props.projects.map((project) => (
          <option key={project.name}>{project.name}</option>
        ))}
      </select>
      <button>Salvar</button>
    </form>
  );
};

export default Form;
