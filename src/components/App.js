import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(toys => setToys(toys))
  },[])
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(deleteToy) {
    const newToys = toys.filter(toy => toy.id !== deleteToy.id);
    setToys(newToys);
  }

  function handleUpdateToy(updateToy) {
    const newToys = toys.map((toy) => toy.id === updateToy.id? updateToy : toy);
    setToys(newToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy = {handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys} handleDeleteToy = {handleDeleteToy} handleUpdateToy = {handleUpdateToy}/>
    </>
  );
}

export default App;
