


import './Navbar.css'
import auto from '../../assets/img/auto.svg'
import { useTranslation } from 'react-i18next';
function Navbar() {

  
  const[t,i18]=useTranslation();
  const languages = localStorage.getItem('i18nextLng') 
  const handleChange = (event)=>{
  const selectedLanguage = event.target.value;
    i18.changeLanguage(selectedLanguage);
  }
  return (
    
<>
<div className="navbar">
    <div className="container navbar__container">
        <ul className="navbar__list">
            <li className="navbar__item1">
           <select className='nav_select' name="Lng" id="lng" onChange={handleChange} value={languages}>
            <option value="uz">Uz</option>
            <option value="en">En</option>
            <option value="ru">Ru</option>
           </select>
            </li>
            <li className="navbar__item">
                <img className="navbar__img" src={auto} alt="" />
                </li>
                <li className="navbar__item1">
                <button className="btn_icon">
                <i  className="fa-solid fa-bars-staggered"></i>
                </button>
                </li>
        </ul>
    </div>
</div>

</>
  )
}

export default Navbar
