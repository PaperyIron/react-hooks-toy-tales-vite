import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  function handleDeleteToy(id) {
    const updatedToys = toys.filter((toy) => toy.id !== id);
    setToys(updatedToys);
  }

  function handleLike(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDelete={handleDeleteToy}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
