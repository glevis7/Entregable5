import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './stylepages/PokedexPage.css'
import Banner from '../components/Pokebanner/Banner'



const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  console.log(selectValue)

  const trainer = useSelector(reducer => reducer.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
  const [pokemons, getAllPokemons, getPokemonsByType] = useFetch(url)

  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getAllPokemons()
    } else {
      getPokemonsByType(selectValue)
    }
  }, [selectValue])


  const inputSearch = useRef()


  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const cbFilter = poke => poke.name.includes(inputValue)

  return (
    <>
      <Banner />
      <div className="pokex__All">
        <span className="pokex__Welc">Welcome {trainer}</span>, <span className="pokex__text"> here you can find your favorite pokemon.</span>
        <div className="pokex__input__all">
          <form className="pokex__form" onSubmit={handleSubmit}>
            <input className="pokex__input" ref={inputSearch} type="text" />
            <button className="pokex__search">Search</button>
          </form>
          <SelectType setSelectValue={setSelectValue} />
        </div>
        <div className="pokex__filter">
          {
            pokemons?.results.filter(cbFilter).map(poke => (
              <PokeCard
                key={poke.url}
                url={poke.url}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default PokedexPage