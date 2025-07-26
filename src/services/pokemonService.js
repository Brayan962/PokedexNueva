import {useState, useEffect} from 'react';
export const useGetPokemons = (page = 0, limit = 20) => {
    const  [pokemonData, setPokemonData] = useState({
        count:0,
        results: []
    })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(
        ()=>{
            setIsLoading(true);
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${limit*page}`)
            .then((response)=>{
                if( response.status === 200) {
                    return response.json();
                } else {
                    setError("Error al Cargar la Data Intente de Nuevo");
                    setIsLoading(false);
                }
            }).then(
                (jsonData)=>{
                    setPokemonData(jsonData);
                    setIsLoading(false);
                }
            ).catch(
                (e)=>{
                    console.error("useGetPokemon", e);
                    setError("Ocurrio un error, intente de Nuevo.")
                    setIsLoading(false);
                }
            )

        }, [page, limit, setPokemonData, setError, setIsLoading ]
    );

    return {
        pokemonData,
        isLoading,
        error
    }
}
export const useGetPokemon = (pokemonCod) => {
    const  [pokemonData, setPokemonData] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(
        ()=>{
            setIsLoading(true);
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonCod}`)
            .then((response)=>{
                if( response.status === 200) {
                    return response.json();
                } else {
                    setError("Error al Cargar la Data Intente de Nuevo");
                    setIsLoading(false);
                }
            }).then(
                (jsonData)=>{
                    setPokemonData(jsonData);
                    setIsLoading(false);
                }
            ).catch(
                (e)=>{
                    console.error("useGetPokemon", e);
                    setError("Ocurrio un error, intente de Nuevo.")
                    setIsLoading(false);
                }
            )

        }, [pokemonCod, setPokemonData, setError, setIsLoading ]
    );

    return {
        pokemonData,
        isLoading,
        error
    }
}

export const getPokemonImg = ( url ) => {
    let pokemonCod = url.split('/').splice(-2,1)[0] || ''
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png
    return [
        pokemonCod,
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCod}.png`
    ];
}