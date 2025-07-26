import { useParams } from "react-router"
import { useGetPokemon } from "../services/pokemonService";
import { AddToCollection } from "../components/PokemonActions/AddToCollection";

export const Detail = () => {
    const { pokecod } = useParams();
    const { pokemonData, isLoading, error } = useGetPokemon(pokecod);
    return (
        <>
            {isLoading && <div>Cargando ....</div>}
            {error && <div>Error al Cargar el Pokemon</div>}
            {!isLoading && pokemonData && (
                <div className="max-w-5xl mx-auto p-4">
                    <h1 className="text-xl font-bold">Mostrar Detalles de: {pokecod} {pokemonData.name} </h1>
                    <div className="flex gap-2">
                        <strong className="w-32">Nombre:</strong>
                        <span>{pokemonData.name}</span>
                    </div>
                    <div className="flex gap-2">
                        <img className="w-16 h-16 object-cover" src={pokemonData.sprites.front_default} />
                        <img className="w-16 h-16 object-cover" src={pokemonData.sprites.back_default} />
                    </div>
                    <div>
                        <AddToCollection
                            code={pokecod}
                            name={pokemonData.name}
                        />
                    </div>
                    <div className="flex gap-2">
                        <strong className="w-32">XP:</strong>
                        <span>{pokemonData.name}</span>
                    </div>
                    <div className="flex flex-col">
                        <strong>Tipos: </strong>
                        {pokemonData.types.map((type) => {
                            return (
                                <div key={type.slot} className="pl-8">
                                    {type.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-col">
                        <strong>Stats Pokemon: </strong>
                        {pokemonData.stats.map((stat) => {
                            return (
                                <div key={stat.stat.name} className="pl-8 flex gap-4">
                                    <span className="w-32">{stat.stat.name}</span>
                                    <span>{stat.base_stat}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}