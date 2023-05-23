import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CherryDetails() {
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setPokemonDetail(response.data);
    });
  }, []);

  console.log(pokemonDetail);

  return (
    <>
      <div>
        {/* {pokemonDetail.map(({ name }) => (
          <p>{name}</p>
        ))} */}
      </div>
    </>
  );
}
