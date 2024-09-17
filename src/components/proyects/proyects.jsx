import './proyects.css';
// icons
import javascript_icon from '../proyects/icons/javascript-svgrepo-com.svg';
import react_icon from '../proyects/icons/react-svgrepo-com.svg';
import redux_icon from '../proyects/icons/redux-svgrepo-com.svg';
import node_icon from '../proyects/icons/node-svgrepo-com.svg';
import code_icon from '../proyects/icons/code-svgrepo-com.svg';
import github_icon from '../proyects/icons/github-142-svgrepo-com.svg';
import link_icon from '../proyects/icons/link-alt-1-svgrepo-com.svg';
// images
import img_beconfree from '../proyects/icons/img_becomfree.png';
import img_countries from '../proyects/icons/img_countries.png';

export default function Proyects({ mode }) {
  return (
    <div className="content_main_proyects">
      <h1 className={mode ? 'h1_proyects' : 'h1_proyects h1_dark'} id="proyectos">
        <img src={code_icon} alt="code_icon" className="img_code_icon" />
        Proyectos
      </h1>
      <div className="content_proyects">
        <img src={img_beconfree} alt="img_becomfree" className={mode ? 'img_proyects' : 'img_proyects img_dark'} />
        <div className={mode ? 'content_proyects_2' : 'content_proyects_2 dark_mode_content icons_white'}>
          <h2 className={mode ? 'h2_proyects' : 'h2_proyects h2_dark'}>Be Comfree</h2>
          <div className="responsive_content">
            <span>
              <img src={javascript_icon} alt="javascript_icon" className="img_icons" />
              JavaScript
            </span>
            <span>
              <img src={react_icon} alt="react_icon" className="img_icons" />
              React js
            </span>
            <span>
              <img src={node_icon} alt="node_icon" className="img_icons" />
              Node js
            </span>
          </div>
          <p className={mode ? 'p_proyects' : 'p_proyects p_dark'}>
            Ecommerce compuesto por cliente y servidor, orientado al rubro de la moda, que se caracteriza por el glamour y la
            buena estetica. Dentro del catalogo puedes encontrar: Pantalones, vestidos, sacos, remeras, prendas intimas y muchos
            mas.
          </p>
          <div className="responsive_content">
            <a href="https://github.com/Ponce08/Be-Comfree-PF" target="_blank">
              <img src={github_icon} alt="github_icon" className="img_icons" />
              Code
            </a>
            <a href="https://be-comfree-frontend.vercel.app/" target="_blank">
              <img src={link_icon} alt="link_icon" className="img_icons" />
              Preview
            </a>
          </div>
        </div>
      </div>
      <div className="content_proyects">
        <img src={img_countries} alt="img_contries" className={mode ? 'img_proyects' : 'img_proyects img_dark'} />
        <div className={mode ? 'content_proyects_3' : 'content_proyects_3 dark_mode_content icons_white'}>
          <h2 className={mode ? 'h2_proyects' : 'h2_proyects h2_dark'}>Countries</h2>
          <div className="responsive_content">
            <span>
              <img src={javascript_icon} alt="javascript_icon" className="img_icons" />
              JavaScript
            </span>
            <span>
              <img src={react_icon} alt="react_icon" className="img_icons" />
              React js
            </span>
            <span>
              <img src={redux_icon} alt="redux_icon" className="img_icons" />
              Redux
            </span>
            <span>
              <img src={node_icon} alt="node_icon" className="img_icons" />
              Node js
            </span>
          </div>
          <p className={mode ? 'p_proyects' : 'p_proyects p_dark'}>
            Proyecto realizado en etapa de aprendizaje como desarrollador web, esta aplicacion incluye funcionalidades basicas de
            busqueda, filtrado y ordenamiento brindando asi una agradable experiencia al usuario.
          </p>
          <div className="responsive_content">
            <a href="https://github.com/Ponce08/COUNTRIES" target="_blank">
              <img src={github_icon} alt="github_icon" className="img_icons" />
              Code
            </a>
            <a href="https://countries-frontend-blush.vercel.app/" target="_blank">
              <img src={link_icon} alt="link_icon" className="img_icons" />
              Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
