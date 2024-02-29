import { useState, useEffect } from 'react'
import AnimalList from '../components/AnimalList/AnimalList'


export default function App(){
    const [animals, setAnimals] = useState([])
    const [newAnimal, setNewAnimal] = useState({
        name: '',
        species: '',
        image: '',
        reservedForAdoption: false
    })

    //createAnimals
    const createAnimal = async () => {
        const body = {...newAnimal}
        try {
            const response = await fetch('/api/animal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const createdAnimal = await response.json()
            const animalsCopy = [createdAnimal,...animals]
            setAnimals(animalsCopy)
            setNewAnimal({
                name: '',
                species: '',
                image: '',
                reservedForAdoption: false
            })
        } catch (error) {   
            console.error(error)
        }
    }
    const updateAnimal = async (id, updatedAnimal) => {
        try {
            const index = animals.findIndex((animal) => animal._id === id)
            const animalsCopy = [...animals]
            const response = await fetch(`/api/animal/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedAnimal)
            })
            animalsCopy[index]={...animalsCopy[index], ...updatedAnimal}
            setAnimals(animalsCopy)
        } catch (error) {
            console.error(error)
        }
    }
    //deleteTodos
    const deleteAnimal = async (id) => {
        try {
            const index = animals.findIndex((animal) => animal._id === id)
            const AnimalsCopy = [...animals]
            const response = await fetch(`/api/animal/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            AnimalsCopy.splice(index, 1)
            setAnimals(AnimalsCopy)
        } catch (error) {
            console.error(error)
        }
    }

    //getTodos
    const getAnimals = async () => {
        try{
            const response = await fetch('/api/animal')
            const foundAnimals = await response.json()
            setAnimals(foundAnimals.reverse())
            
        } catch(error){
            console.error(error)
        }
    }
    useEffect(() => {
        getAnimals()
    }, [])
    return(
        <>
            
            <h1>Sunny Animal Shleter</h1>
            <div className='d-flex'>
            <AnimalList
            newAnimal={newAnimal}
            setNewAnimal={setNewAnimal}
            createAnimal={createAnimal}
            updateAnimal={updateAnimal}
            animals={animals}
            deleteAnimal={deleteAnimal}
            />
            </div>
        </>
    )
}