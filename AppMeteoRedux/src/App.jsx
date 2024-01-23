import { useState, useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import DatiTempo from './components/DatiTempo'

function App() {

  const [newCitta, setNewCitta] = useState('Bologna')

  const newName = (data) => {
    setNewCitta(data)
  }

  const [dati, setDati] = useState([])
  const [datiNextDays, setDatiNextDays] = useState([])
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${newCitta}&appid=7c48ada1d0831c1f833c11567a35921c`
  const urlNextDays = `https://api.openweathermap.org/data/2.5/forecast?q=${newCitta}&appid=7c48ada1d0831c1f833c11567a35921c`

  const fetchData = async () => {
      try{
          const risposta = await fetch(url)
          if(risposta.ok){
              let data = await risposta.json()
              setDati(data)
          } else {
            alert('Nome inserito non valido')
            console.log('errore nella risposta fetch');
          }
      }
      catch(error){
          console.log('L\'errore è' + error);
      }
  }

  const fetchDataNextDays = async () => {
    try{
        const risposta = await fetch(urlNextDays)
        if(risposta.ok){
            let data = await risposta.json()
            setDatiNextDays(data)
        } else {
            console.log('errore nella risposta fetch');
        }
    }
    catch(error){
        console.log('L\'errore è' + error);
    }
  }

  useEffect(() => { 
      fetchData()
      fetchDataNextDays()
  }, [newCitta])

  return (
    <>
      <Search newName={newName}></Search>
      <DatiTempo dati={dati} datiNextDays={datiNextDays}/>
    </>
  )
}

export default App
