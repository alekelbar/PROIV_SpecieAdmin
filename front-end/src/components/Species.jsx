import React, { useState } from "react";
import { UpdateSpecieForm } from "./UpdateSpecieForm";

const Species = ({ species, setSpecies }) => {
  const [update, setUpdate] = useState({
    update: false,
    content: "",
  });

  const handleDelete = (id) => {
    const request = {
      method: "DELETE",
    };

    fetch(`http://localhost:8000/species/${id}`, request)
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((error) => console.log);

    setSpecies((e) => e.filter((specie) => specie.SpeciesId !== id));
  };

  const handleUpdate = (specie) => {
    console.log(specie);
    setUpdate({
      update: true,
      content: specie,
    });
  };

  return (
    <div className="w-3/4 flex flex-col">
      <table className="table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="bg-red-400 text-sm py-2 rounded">Description</th>
            <th className="bg-red-300 text-sm py-2 rounded">Manager</th>
          </tr>
        </thead>
        <tbody>
          {species.length ? (
            species.map((specie) => {
              return (
                <tr
                  key={specie.SpeciesId}
                  className="bg-gray-800 hover:bg-gray-700"
                >
                  <td className="w-2/4 text-sm text-center mb-3 py-3">
                    {specie.SpeciesDrescription}
                  </td>
                  <td className="flex justify-evenly py-3">
                    <button
                      onClick={() => handleUpdate(specie)}
                      className="rounded hover:bg-green-600 p-2 text-xs bg-green-800"
                    >
                      UPDATE
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(specie.SpeciesId);
                      }}
                      className="rounded p-2 text-xs bg-red-800 hover:bg-red-600"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No data found bro {"</3"}</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      {update.update ? <UpdateSpecieForm updateSpecie={update} /> : null}
    </div>
  );
};

export default Species;
