import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>pokemon</h1>
      <hr />
      <ul>
        <li>d</li>
        <li>d</li>
        <li>d</li>
      </ul>
    </>
  );
};

export default PokemonApp;
