import './about.css';
import photo from './photo_about.png';
import letter_icon from '../about/icons/letter-unread-svgrepo-com.svg';
import linkedin_icon from '../about/icons/linkedin-svgrepo-com.svg';

export default function About({ mode }) {
  return (
    <div className="content_main_about" id="contacto">
      <div className="content_photo">
        <img src={photo} alt="photo" className="img_photo" />
        <a href="https://www.linkedin.com/in/yonathan-ponce/" target="_blank">
          Disponible para trabajar
        </a>
      </div>
      <div className={mode ? '' : 'p_dark'}>
        <h1>Que tal, Soy Ponce</h1>
        <p>
          Desarrollador Full Stack, <span className="span_p">apasionado por la tecnología,</span> <br /> listo para superar nuevos
          retos y pasar al siguiente nivel.
        </p>
      </div>
      <div className={mode ? 'content_a' : 'content_a a_dark'}>
        <a href="mailto:yonathanponce2019@gmail.com" target="_blank">
          <img src={letter_icon} alt="letter" />
          Contáctame
        </a>
        <a href="https://www.linkedin.com/in/yonathan-ponce/" target="_blank">
          <img src={linkedin_icon} alt="letter" />
          Linkedin
        </a>
      </div>
    </div>
  );
}
