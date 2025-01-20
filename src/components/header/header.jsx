import './header.css';

export default function Header({ icon, mode, labelMode, darkMode }) {
  return (
    <div className="content_header">
      <div className={mode ? 'content_header_links' : 'content_header_links Dark_mode'}>
        <a href="#sobre mi">Sobre mi</a>
        <a href="#proyectos">Proyectos</a>
        <a
          href=""
          onClick={(e) => {
            window.scrollTo(0, 0), e.preventDefault();
          }}
        >
          Contacto
        </a>
        <button onClick={darkMode} className={mode ? 'dark' : 'ligth'}>
          <span>{labelMode}</span>
          <img src={icon} alt="Dark_mode" />
        </button>
      </div>
    </div>
  );
}
