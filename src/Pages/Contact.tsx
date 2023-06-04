import { BsLinkedin } from "react-icons/bs"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <>
    <div className="contact">
      <div>Please find my contact information in the attached CV or visit my LinkedIn</div>
      <div className='linked-in-contact'>
          <div className='linked-in-logo'><BsLinkedin /></div>
          <div><Link to="https://www.linkedin.com/in/alvin-naldo-229254252/" target='_blank' className='linked-in-link'>Alvin Naldo</Link></div>
        </div>
    </div>
    </>
  )
}

export default Contact