
import { useState } from 'react'
import './Header.css'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'


function Header() {
  const [data, setData]=useState([])
  
  useEffect(()=>{
    fetch("https://api.autozoomrental.com/api/categories" )
    .then((res)=> res.json())
    .then((item)=>setData(item?.data))
  },[])

  const[t,i18n]= useTranslation();

  return (
    <>
    <div className="wrapper" >
      <div className="container wrapper__container">
     {
        data?.map((element,i) =>
       
        (
           <>
          <div className="cart" key={i}>
          <img className="cart__img" src={`https://api.autozoomrental.com/api/uploads/images/${element?.image_src}`} alt="" />
         <h1 className="cart__title">{i18n.language ==='en'? element.name_en :element.name_ru}</h1>
       </div>
       </>
      
       )
      )
  
       
      }
    
    </div>
    </div>
    </>
      
  )
}

export default Header