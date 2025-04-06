import React from 'react'
import { GiGoldShell } from "react-icons/gi";

function Card({rank,photo,username,score}) {
  return (
    <div className='card'>
        <div className='rank'>
            <p>
            {rank}
            </p>
        </div>
        <div className='photo'>
            <img src={photo} alt="" />
        </div>
        <div className='username'>
            <p>{username}</p>
        </div>
        <div className='score'>
            <p>{score}</p>
        </div>
        <div className='coinn'>
            <img src="./coin.jpg" alt="" />

        </div>
    </div>
  )
}

export default Card