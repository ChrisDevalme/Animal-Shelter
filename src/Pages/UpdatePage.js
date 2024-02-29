import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";



export default function UpdateAnimal(){
    const params = useParams()
    const animalId = params.animalId

    const [animal, setAnimal] = useState(null);

    const getAnimal = async () => {
        try{
            const response = await fetch(`/api/animal/${animalId}`);
            const data = await response.json();
            setAnimal(data);
        }catch(error){
            console.error(error)
        }   
      };

    const updateAnimal = async () => {
        try {
            const response = await fetch(`/api/animal/${animalId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(animal)
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAnimal();
    }, []);

    const loaded = () => {
        return (
          <div className='card text-center w-200' style={{width: "550px"}}>
            <h1 className='card-header'>
              {animal.name}
            </h1>
            <div className='card-body'>
                <h4 className='card-text'>Press Enter to save</h4>
                <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                    <input 
                    placeholder='Name' 
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                    type="text" 
                    value={animal.title} 
                    onChange={(e) => {
                        setAnimal({...animal, title: e.target.value})
                    }} 
                    onKeyDown={(e) => {
                        e.key === 'Enter' && updateAnimal()
                    }}
                    />
                </div>
                <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">URL</span>
                <input 
                placeholder='Species'
                className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                type="text" 
                value={animal.species} 
                onChange={(e) => {
                    setAnimal({...animal, url: e.target.value})
                }} 
                onKeyDown={(e) => {
                    e.key === 'Enter' && updateAnimal()
                }}

                
                />
                </div>
                <br/>
                <Link className='btn btn-primary text-center' to='/'>Home</Link>
            </div>

          </div>
          
        );
      };

    const loading = () => {
        return <h1>Loading...</h1>;
      };

    return animal ? loaded() : loading();
}
