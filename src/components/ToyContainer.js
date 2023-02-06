import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteToy, handleUpdateToy}) {
  const toyCards = toys.map((toy) => {
  return <ToyCard key={toy.id} toy={toy} deleteToy={handleDeleteToy} onUpdateToy={handleUpdateToy}/>
})
  return (
    <div id="toy-collection">
      {toyCards}
    </div>
  );
}

export default ToyContainer;
