import React, { useState } from "react";

function ToyForm({handleNewToy}) {

  const [input, setInput] = useState({
    name: "",
    image: "",
  });

  function handleChanges(e) {
    setInput({[e.target.name]: e.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newToy = {
      name: input.name,
      image: input.image
    }
    fetch("http://localhost:3001/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newToy),
  })
    .then((r) => r.json())
    .then(handleNewToy);
}

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange = {handleChanges}
          value = {input.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange = {handleChanges}
          value = {input.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
