import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slice"
import { useNavigate } from "react-router-dom"
import './stylepages/HomePage.css'

const HomePage = () => {

  const trainer = useSelector(reducer => reducer.trainer)

  const inputTrainer = useRef()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainerG(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }



  return (
    <div className="container">
      <div >
        <img src='/imags/image 11.png' alt='' className="banner-text" />
      </div>
      <h2 className="hi">Hello coach!</h2>
      <p className="info">To start, give me your name😁</p>
      <form className="inputTrainer__container" onSubmit={handleSubmit}>
        <input  id='inputTrainer' ref={inputTrainer} type="text" />
        <button className="all">Gotta carch'em all!</button>
      </form>
      <div className="pokebase">
        <div className="banner1"></div>
        <div className="banner2">
          <img src='/imags/bolapoke.png' alt='' className="banner-bola" />
        </div>
      </div>
    </div>
  )
}

export default HomePage