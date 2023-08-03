import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './stylepages/PokedexPage.css'
import './stylepages/PokeIdPage.css'
import Banner from '../components/Pokebanner/Banner'


const PokeIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id])
  console.log(pokemon?.sprites.other)

  return (
    <>
      <Banner />
      <article className="pokeIdcard">
        <header className={`pokeIdcard__header ${pokemon?.types[0].type.name}-gradient`}></header>
        <img className="pokeIdcard__image" src={pokemon?.sprites.other['official-artwork']?.front_default} alt="" />
        <div className="pokeIdcard__id__container">
          <span className="pokeIdcard__id">#:</span><span>{pokemon?.id}</span>
        </div>
        <h2 className="pokeIdcard__name">{pokemon?.name}</h2>
        <ul className="pokeIdcard__features">
          <li>
            <h2 className="pokeIdcard__Wh">weight:</h2>
            <span className="pokeIdcard__wh">{pokemon?.weight}</span>
          </li>
          <li>
            <h2 className="pokeIdcard__Hg">Height:</h2>
            <span className="pokeIdcard__hg">{pokemon?.height}</span>
          </li>
        </ul>

        <div className="pokeIdcard__types__abilities">

          <div className="pokeIdcard__types">
            <h4 className="pokeIdcardtype">Types:</h4>
            <ul className="pokeIdcard__typename__container">
              <li className="pokeIdcard__typename">{pokemon?.types[0]?.type.name}</li>
              <li className="pokeIdcard__typename">{pokemon?.types[1]?.type.name}</li>
            </ul>
          </div>

          <div className="pokeIdcard__abilities">
            <h4 className="pokeIdcardtype">Abilities:</h4>
            <ul className="pokeIdcard__abilities__container">
              {pokemon?.abilities.map(abilityInfo => (
                <li className="pokeIdcard__abilities__item" key={abilityInfo.ability.url}>
                  {abilityInfo.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pokeIdcard__value">
          <h4 className="pokeIdcard__h4">Stat:</h4>
          <ul className="pokeIdcard__stats">
            {pokemon?.stats.map(statInfo => (
              <li className="pokeIdcard__stat" key={statInfo.stat.url}>
                <span className="pokeIdcard__stat__name">{statInfo.stat.name}</span>
                <span className="pokeIdcard__stat__value">{statInfo.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <article className="pokeIdcard">
        <h3 className="pokeIdcard__moves">Movements:</h3>
        <ul className="pokeIdcard__moves__container">
          {pokemon?.moves.map(moveInfo => (
            <li className="pokeIdcard__moves__item" key={moveInfo.move.url}>{moveInfo.move.name}</li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default PokeIdPage