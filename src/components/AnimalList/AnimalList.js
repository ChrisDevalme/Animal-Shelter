import styles from './AnimalList.module.scss'
import Animal from '../Animal/Animal'
 
export default function AnimalList ({ 
    newAnimal, 
    createAnimal, 
    setNewAnimal, 
    animals,
    updateAnimals,
    deleteAnimal
}){
    return(
        <div className={styles.animallist}>
            Add New Animal:
            <input 
            className={styles.input}
            placeholder='Name' 
            type="text" 
            value={newAnimal.name} 
            onChange={(e) => {
                setNewAnimal({...newAnimal, name: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createAnimal()
            }}
            />
             <input 
            className={styles.input}
            placeholder='Species' 
            type="text" 
            value={newAnimal.species} 
            onChange={(e) => {
                setNewAnimal({...newAnimal, species: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createAnimal()
            }}
            />
            <input 
            className={styles.input}
            placeholder='Image Url' 
            type="text" 
            value={newAnimal.image} 
            onChange={(e) => {
                setNewAnimal({...newAnimal, image: e.target.value})
            }} 
            onKeyDown={(e) => {
                e.key === 'Enter' && createAnimal()
            }}
            />
            <h3>Animals</h3>
            {animals.map(animal =>(
            <Animal
                image={animal.image}
                key={animal._id}
                animal={animal}
                buttonAction={deleteAnimal}
                buttonText={'Found A New home'}
            />
            ))}
        </div>
    )
}