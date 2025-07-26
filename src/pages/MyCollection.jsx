import { useLocalStorage } from "../services/localStorageServices"
import { useNavigate } from "react-router"
import { PokemonList } from "../components/PokemonList/PokemonList"

export const MyCollection = () => {
    const [pokemonData,] = useLocalStorage("my_collection", [])
    const navigate = useNavigate();
    return (
        <section className="max-w-6xl mx-auto p-4">
            <h1 className="text-xl font-bold">Mi Coleccion Pokemones</h1>
            <PokemonList
                pokemons={pokemonData}
                onShowDetail={(pokecod) => {
                    navigate(`/detail/${pokecod}`)
                }}
            />
        </section>
    )
}