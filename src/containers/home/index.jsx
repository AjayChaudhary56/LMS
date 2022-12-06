import React from 'react'
import man from './man.png'
import {Link} from "react-router-dom";
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import './style.css'
const Home = () => {
  return (
    <div className="main-container">
      <h1>LIBRARY MANAGEMENT SYSTEM</h1>
      <div className="home-content">
      <div className="photo">
        <img src={man} alt='man reading book'/>
      </div>
      <div className="description">
<p>
A library is a very useful platform that brings together people willing to learn. It helps us in learning and expanding our knowledge. We develop our reading habits from a library and satisfy our thirst and curiosity for knowledge. This helps in the personal growth of a person and development.
<br></br>
Similarly, libraries provide authentic and reliable sources of information for researchers. They are able to complete their papers and carry out their studies using the material present in a library. Furthermore, libraries are a great place for studying alone or even in groups, without any disturbance.
<br></br>
Moreover, libraries also help in increasing our concentration levels. As it is a place that requires pin drop silence, a person can study or read in silence. It makes us focus on our studies more efficiently. Libraries also broaden our thinking and make us more open to modern thinking.
</p>
      </div>
      </div>
     <Link to="/allBooks"> <button>View Books <br></br> <BsFillArrowDownCircleFill />
      </button></Link>
  
    </div>
  )
}

export default Home;