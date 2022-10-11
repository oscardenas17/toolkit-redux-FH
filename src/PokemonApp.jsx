import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, startLoadingPokemons } from "./store/slices/pokemon";

const PokemonApp = () => {
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>pokemon</h1>
      <hr />
      <span> {isLoading ? "Loading" : "NotLoading"} </span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}> {name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      ></button>
    </>
  );
};

export default PokemonApp;
