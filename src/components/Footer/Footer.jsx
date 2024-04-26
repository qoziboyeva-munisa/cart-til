


import './Footer.css'
import auto from '../../assets/img/auto.svg'
import { useTranslation } from 'react-i18next'

function  Footer() {
  
  const {t, i18n} = useTranslation();
  return (
    
<>

<div className="footer">
    <div className="container footer__container">
        <div className="footer__box1">
            <img className='footer__img' src={auto} alt="" />
            <h1 className="footer__title">{t('footer.luxary')}</h1>
            <p className="footer__text">{t('footer.rent')}</p>
           <a href="#" className="footer__linkbtn">{t('footer.get')}</a>
        </div>
      <div className='footer__box'>
        <ul className="footer__list">
            <li className="footer__item">
                <a href="#" className="footer__link">{t('footer.cars')}</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__boxlink">{t('footer.suv')}</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__boxlink">{t('footer.sports')}</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__boxlink">{t('footer.lux')}</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__boxlink">{t('footer.canver')}</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__boxlink">{t('footer.butget')}</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__boxlink">{t('footer.american')}</a>
            </li>
        </ul>
        <ul className="box__list">
            <li className="box__item">
                <a href="#" className="footer__link">{t('footer.blog')}</a>
            </li>
            <li className="box__item">
                <a href="#" className="footer__link">{t('footer.sevvices')}</a>
            </li>
            <li className="box__item">
                <a href="#" className="footer__link">{t('footer.contact')}</a>
                <p className="footer__text">{t('footer.elet')}</p>
            </li>
        </ul>
        <ul className="box__list">
         <li className="box__item">
         <a href="#" className="footer__link">{t('footer.about')}</a>
         </li>
         <li className="box__item">
         <a href="#" className="footer__text">{t('footer.our')}</a>
         </li>
         <li className="box__item">
         <a href="#" className="footer__text">{t('footer.faq')}</a>
         </li>



           <div className='footer__boxicon'>
         
              <a href="#" className="footer__link">{t('footer.follow')}</a>
              <ul className="footer__list__name">
                <li className="footer__item__name">
                    <a href="#" className="footer__link__name">
                        <img className='icon__png' src="" alt="" />
                    </a>
                </li>
                <li className="footer__item__name">
                    <a href="#" className="footer__link__name">
                        <img className='icon__png' src="" alt="" />
                    </a>
                </li>
                <li className="footer__item__name">
                    <a href="#" className="footer__link__name">
                        <img className='icon__png' src="" alt="" />
                    </a>
                </li>
              </ul>
              </div>
        </ul>
      </div>
     
    </div>
</div>

</>
  )
}

export default Footer