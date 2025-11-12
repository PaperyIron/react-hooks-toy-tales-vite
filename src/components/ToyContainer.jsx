import React from "react";
import ToyCard from "./ToyCard";
import { useState, useEffect } from "react";

function ToyContainer() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error('Error getting toys', error));
  }, []);

  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} />
      ))}
    </div>
  );
}

export default ToyContainer;
