import { Link } from "react-router-dom";


export default function Animal({ animal, buttonAction, buttonText, image}){
    return(
        <div className={'card w-25'}>
            <img src={image} className='card-img-top0'/>
            <div className='card-body'/> 
            <h3 className='card-title'>{animal.name}</h3>
            <h6 className='card-text'>{animal.species}</h6>
            <div className='btn-group inline-block'>
                <button 
                    className={'btn btn-danger w-50'}
                    onClick={() => buttonAction(animal._id)}
                >
                    {buttonText}
                </button>
                <button type='button' className='btn btn-primary w-50 '>
                    <Link className='text-decoration-none text-white' to={`/UpdateAnimal/${animal._id}`}>Update</Link>
                </button>
            </div>
        </div>
    )
}