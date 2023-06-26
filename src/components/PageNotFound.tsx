import { useNavigate } from 'react-router-dom'
import NotFound from '../images/notFound.jpg'
import '../styles/PageNotFound.css'

const PageNotFound = ()=>{
    const navigate = useNavigate()
    const handleBackToHome= ()=>{
        navigate('/')
    }
    return (
        <div className='not-found-container'>
            <img src={NotFound} alt ="notfound"/>
            <button onClick={handleBackToHome} className='back-btn'>Go back to Home Page</button>
        </div>
    )
}
export default PageNotFound;