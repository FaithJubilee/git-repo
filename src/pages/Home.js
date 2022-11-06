import React from 'react'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'
import * as ContentMgtURL from "../urls/Routing";

import './home.scss'

const Home = () => {
    const navigator = useNavigate()
    const handleClick = () => {
        navigator(`${ContentMgtURL.LANDING_ROUTE}/repositories`)
    }
  return (
    <div className='home'>
        <h1>This is the Home Section for this page and we will be able to display this in the browser</h1>
        <Button clickHandler={handleClick} />
    </div>
  )
}

export default Home