export const PokemonCard = ({ pokemonData }) => {
  return (
    <li className="w-[400px] h-[430px] bg-white flex flex-col items-center shadow-xl/20 rounded-md hover:scale-110 transition-transform duration-300">
      <figure className="w-[400px] h-[150px] bg-green-100 rounded-bl-full rounded-br-full flex flex-col items-center">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt="pokemon.img"
          className="w-[200px] h-[200px]"
        />
      </figure>
      <h1 className="pt-11 text-3xl font-bold">{pokemonData.name}</h1>
      <p className="text-center font-bold bg-green-600 text-white rounded-l-2xl rounded-r-2xl w-[150px] p-2 mt-2">
        {pokemonData.types.map((cur) => cur.type.name).join(", ")}
      </p>
      <div className="grid grid-cols-3 gap-10 mt-5 pl-5 pr-5">
        <p>
          <span className="font-bold">Height : </span> {pokemonData.height}
        </p>
        <p>
          <span className="font-bold">Weight : </span> {pokemonData.weight}
        </p>
        <p>
          <span className="font-bold">Speed : </span>{" "}
          {pokemonData.stats[5].base_stat}
        </p>
        <p>
          <span className="font-bold">Experience : </span>{" "}
          {pokemonData.base_experience}
        </p>
        <p>
          <span className="font-bold">Attack : </span>{" "}
          {pokemonData.stats[1].base_stat}
        </p>
        <p>
          <span className="font-bold">Abilities : </span>{" "}
          {pokemonData.abilities.map((abilityInfo) =>abilityInfo.ability.name).slice(0,1).join(", ")}
        </p>
      </div>
    </li>
  );
};
