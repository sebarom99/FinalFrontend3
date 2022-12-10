import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import { GlobalStates } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [doctores, setDoctores] = useState([])

    const { tema } = useContext(GlobalStates)

    useEffect(() => {
        const fetchData = async () => {
            await axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setDoctores(res.data))
        }
        fetchData()
    }, [])

    return (
        <div className='home' style={{background:tema.backgroundHome, color:tema.color}}>
            <h1>Home</h1>
            <div className='card-grid'>
                {doctores?.map(item => {
                    return <Link to={`/${item.id}`}><Card key={item.id} id={item.id} name={item.name} username={item.username} /></Link>
                })}
            </div>
        </div>
  )
}

export default Home