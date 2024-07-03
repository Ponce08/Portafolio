import './about_2.css';
import me_icon from '../about_2/icons/person-rotation-svgrepo-com.svg';
import img_logo_ponce from '../about_2/icons/wwwww-removebg-preview-removebg-preview.png';

export default function About_2({ mode }) {
  return (
    <div className="content_main_about2">
      <div className={mode ? 'content_p_logo' : 'content_p_logo dark_p_h1'}>
        <div>
          <h1 className="h1_about_2" id='sobre mi'>
            <img src={me_icon} alt="" className="me_icon" />
            Sobre mi
          </h1>
          <p>
            Me llamo Yonathan Ponce pero mis amigos me dicen "Ponce". Despues de dedicar casi toda mi vida a la logistica y a la
            distribución en empresas de producción, en julio del 2023 nació en mí un interes por la tecnología, desde entonces soy
            un programador que esta en continuo aprendizaje y disfruto usar mis habilidades para contribuir a proyectos
            tecnológicos. En mi Stack actual se encuentra:<span> HTML, CSS, javaScript, React js, Node js, Express js y PostgreSQL.</span> Me caracterizo por ser una persona disciplinada, responsable y aplicada. Soy un hombre apasionado por la
            musica, los viajes y la comida tipica de mi pais Colombia. Me gustan los retos y el trabajo en equipo.
          </p>
        </div>
        <img src={img_logo_ponce} alt="img_logo_ponce" className={mode ? 'img_logo_ponce' : 'img_logo_ponce dark_logo'} />
      </div>
      <div className={mode ? 'content_footer' : 'content_footer dark_a'}>
        <span>© 2024 Ponce. Casi todos los derechos reservados</span>
        <div>
          <a href="mailto:yonathanponce2019@gmail.com">
            <span>Contacto</span>
          </a>
          <a href="https://github.com/Ponce08">
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}
