import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=300";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (curEle) => {
        try {
          const response = await fetch(curEle.url);
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
          setError(error);
        }
      });
      const detailedResponse = await Promise.all(detailedPokemonData);
      console.log(detailedResponse);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  if (loading) {
    return (
      <div className="text-center font-bold text-4xl pt-5">Loading...</div>
    );
  }

  const handleInput =(e) =>{
    const input_value = e.target.value;
    
    setSearch(input_value.trim())
  }
  
  // search bar
  const searchContainer = pokemon.filter((curPoke) => curPoke.name.toLowerCase().includes(search.toLowerCase()));
   

  return (
    <>
      <section className="flex flex-col items-center bg-blue-100 min-h-screen w-full">
        <header>
          <h1 className="text-4xl font-bold pt-5">Lets Catch Pokemon</h1>
        </header>
        <div className="mt-3 mb-3">
          <input
            type="text"
            className="p-2 outline-0 bg-white rounded-md w-[300px] border-4 border-b-black border-t-white border-l-white border-r-white"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e)=>handleInput(e)}
          />
        </div>

        <div>
          <ul className="xl:grid xl:grid-cols-3 xl:gap-10 mt-5 lg:grid lg:grid-cols-2 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 flex flex-col gap-10 ">
            {searchContainer.map((curPokemon) => {
              return (
                <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};
