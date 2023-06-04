import { Link } from 'react-router-dom';
import myPhoto from '../assets/my-photo.png';
import {BsLinkedin} from 'react-icons/bs'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-profile">
          <img src={myPhoto} alt="my-photo" className='my-photo' />
          <div className='profile-text'>
            <div>Full Stack Web Developer</div>
            <div>Alvin Naldo</div>
            <div>Passionate individual with great interest in information technology especially in web developing. Currently focused on MERN stack with Javascript or Typescript.</div>
          </div>
        </div>
        <div className='linked-in-home'>
          <div className='linked-in-logo'><BsLinkedin /></div>
          <div><Link to="https://www.linkedin.com/in/alvin-naldo-229254252/" target='_blank' className='linked-in-link'>Alvin Naldo</Link></div>
        </div>
      </div>   
    </>
  )
}

export default Home