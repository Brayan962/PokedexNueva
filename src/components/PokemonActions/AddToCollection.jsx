import { useLocalStorage } from "../../services/localStorageServices";
import { Link } from 'react-router';

export const AddToCollection = (
    {
        code,
        name
    }
)=>{
    const [collection, saveCollection] = useLocalStorage("my_collection", []);

    const isPokemonInCollection = collection?.find(
        (pokemon)=>pokemon.code === code
    );
    const addToCollection = ()=>{
        const pokemonToAdd = {
            code: code,
            name: name,
            url: `https://pokeapi.co/api/v2/pokemon/${code}/`
        }
        saveCollection([...collection, pokemonToAdd]);
    }
    const removeFromCollection = ()=>{
        const newCollection = collection.filter(
            (pokemon)=>pokemon.code !== code
        );
        saveCollection(newCollection);
    }

    return (
        <>
            {isPokemonInCollection ?
                <div className="flex gap-4">
                    <Link to="/my-collection"
                        className="px-4 py-2 bg-red-700 text-white text-xs rounded-sm"
                    >View In My Collection</Link>
                    <button onClick={()=>removeFromCollection()}
                        className="px-4 py-2 bg-red-700 text-white text-xs rounded-sm"
                        >
                        Remove from Collection
                    </button>
                </div>
                :
                <button onClick={()=>addToCollection()} 
                    className="px-4 py-2 bg-red-700 text-white text-xs rounded-sm"
                >
                    Add to Collection
                </button>
            }
        </>
    )
}