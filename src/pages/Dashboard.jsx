import { useState } from "react"
import { useNavigate } from "react-router";
import { useGetPokemons } from "../services/pokemonService"
import { PokemonList } from "../components/PokemonList/PokemonList";
import { Paging } from "../components/Paging/Paging";

export const DashBoard = ()=>{
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const navigate = useNavigate();

    const {pokemonData, isLoading, error} = useGetPokemons(page -1, limit);
    return (
        <section className="container">
        <h1 className="title">Pokedex Nacional</h1>
        {isLoading && <section>Cargando ....</section>}
        {pokemonData.results.length > 0 && (
            <>
                <PokemonList
                    pokemons={pokemonData.results}
                    onShowDetail={(pokecod)=>{
                        navigate(`/detail/${pokecod}`)
                    }}
                />
                <Paging
                    totalElements={pokemonData.count}
                    limit={limit}
                    page={page}
                    onPageChange={setPage}
                    onLimitChange={setLimit}
                />
            </>
        )}
        </section>
    )
}