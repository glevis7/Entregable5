import React from 'react'
import '../PokedexPage/stylescomp/Banner.css'

const Banner = () => {

    return (
        <div className='banner__superior'>   
            <div className="banner1__poke">
             <img src='/imags/image 11.png' alt='' className="bannerPoke-text" />
            </div>
            <div className="banner2__poke">
                <img src='/imags/bolapoke.png' alt='' className="bannerPoke-bola" />
            </div>
        </div>
    )
}

export default Banner
