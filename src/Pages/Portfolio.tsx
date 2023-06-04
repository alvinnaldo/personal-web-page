import { useState, useRef } from 'react';
import thumbXmart from '../assets/xmartwebapp/thumbnail.png' 
import thumbAttendance from '../assets/attendancewebapp/thumbnail.png'
import { useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import {RxCross2} from 'react-icons/rx'

interface Portfolio {
  title : string,
  thumbnail : string,
  description : string,
  route : string,
}

type PortfolioList = Portfolio[]

const data:PortfolioList= [
  {
    title : "Xmart - Online Grocery Webapp",
    thumbnail : thumbXmart,
    description : "Xmart is an online store webapp that sells various kinds of groceries. Xmart was created with the aim of making it easier for the public to obtain various kinds of needs by shopping online from anywhere and at any time.",
    route : "/portfolio-xmart"
  },
  {
    title : "Attendance Webapp",
    thumbnail : thumbAttendance,
    description : "Attendance webapp system that can be used by school, university, office, etc. to easily maintain the attendance of students or workers",
    route : "/portfolio-attendance"
  }
]

const Portfolio = () => {
  const [search,setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const clearSearch = (el : HTMLInputElement) :void => {
    el.value = ""
  } 

  return (
    <div>
      <div className='search-container'>
        <div className='search-logo'><BsSearch /></div>
        <div className='clear-logo' onClick={()=> {
          if (null !== searchRef.current) {
            clearSearch(searchRef.current);
          }
          setSearch("")
        }}><RxCross2 /></div>
        <input ref={searchRef} className='portfolio-search' type='text' placeholder='Search portfolio' onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
      </div>
        <div>
          {data.map((val,idx)=> 
          val.title.toLowerCase().includes(search) || val.description.toLowerCase().includes(search)? 
          (
            <div key={idx} className='portfolio-list' onClick={()=> navigate(`${val.route}`)}>
              <div className='portfolio-title'>{val.title}</div>
              <img src={val.thumbnail} alt={val.title} className='portfolio-img'/>
              <div className='portfolio-description'>{val.description}</div>
            </div>
          ) : null)}
        </div>
    </div>
  )
}

export default Portfolio
