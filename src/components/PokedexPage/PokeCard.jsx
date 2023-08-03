import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './stylescomp/PokeCard.css'

const PokeCard = ({ url }) => {

    const [pokemon, getSinglePokemon] = useFetch(url)

    useEffect(() => {
        getSinglePokemon()
    }, [])

    console.log(pokemon)

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }


    return (
        <article className="pokecard" onClick={handleClick}>
            <header className={`pokecard__header ${pokemon?.types[0].type.name}-gradient`}>
                <img className="pokecard__image" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <section className="pokecard__body">
                <h3 className="pokecard__name">{pokemon?.name}</h3>
                <ul className="pokecard__types">
                    {pokemon?.types.map(typeInfo => (
                    <li className="pokecard__typename" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))}
                </ul>
                <p className="pokecardtype">Types</p>
                <hr className="pokecard__hr" />
                <ul className="pokecard__stats">
                    {pokemon?.stats.map(statInfo => (
                        <li className="pokecard__stat" key={statInfo.stat.url}>
                            <span className="pokecard__stat__name">{statInfo.stat.name}</span>
                            <span className="pokecard__stat__value">{statInfo.base_stat}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}

export default PokeCard