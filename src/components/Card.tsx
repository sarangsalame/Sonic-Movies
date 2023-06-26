import '../styles/Card.css'
import DummyImage from '../images/dummyPoster.jpg'
import { useNavigate } from 'react-router-dom'


interface CardProps {
    poster_path:string|null,
    title: string|undefined,
    movieId:number,
}

function Card ({poster_path, title ,movieId}:CardProps){
    const navigate = useNavigate()
    const openDetailsPage=(movieId:number)=>{
        navigate(`/details/${movieId}`)
    }
    return( 
        <div  className="card_wrapper" onClick={()=>openDetailsPage(movieId)}>
            <div className="image_container"> 
                <img alt="Poster" src={
                    poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}`: DummyImage
                }/>
            </div>
            <div className='card_details'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}
export default Card;