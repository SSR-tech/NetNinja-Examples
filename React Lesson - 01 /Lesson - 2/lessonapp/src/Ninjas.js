import React from "react";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const allNinjas = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>
          <h2>Name: {ninja.name}</h2>
        </div>
        <div>
          <h2>Age: {ninja.age}</h2>
        </div>
        <div>
          <h2>Belt: {ninja.belt}</h2>
        </div>
        <div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete Ninja
          </button>
        </div>
      </div>
    ) : null;
  });

  return <div className="ninja-list">{allNinjas}</div>;
};

export default Ninjas;
