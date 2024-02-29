import { Route, Routes } from 'react-router-dom'
import UpdatePage from './Pages/UpdatePage'
import HomePage from './Pages/HomePage'




export default function App() {
    return(
        
        <div className='App'>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/UpdateAnimal/:animalId' element={<UpdatePage />}/>
        </Routes>
        </div>
    )
}