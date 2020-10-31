import React from "react";

export default function ItemRepository({ repository, handleRemoveRepository }) {
  return (
    <li>
      {repository.title}
      <button onClick={() => handleRemoveRepository(repository.id)}>
        Remover
      </button>
    </li>
  );
}
