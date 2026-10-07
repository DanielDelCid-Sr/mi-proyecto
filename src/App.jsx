import './App.css'

function App() {

  function mostrarMensaje() {
    document.getElementById("mensaje").textContent =
      "¡El botón funciona correctamente!";
  }

  return (
    <>
      <header>
        <h1>Mi Página Web</h1>
        <p>Proyecto React con Vite</p>
      </header>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#informacion">Información</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <main>

        <section id="inicio" className="tarjeta">
          <h2>Bienvenido</h2>

          <p>
            Esta es una página web creada utilizando React y Vite.
            El proyecto fue convertido desde una página HTML básica.
          </p>

          <button onClick={mostrarMensaje}>
            Haz clic aquí
          </button>

          <p id="mensaje"></p>
        </section>

        <section id="informacion" className="tarjeta">
          <h2>Información</h2>

          <p>
            El objetivo de este proyecto es demostrar la creación
            de una aplicación web utilizando React y Vite.
          </p>

          <p>
            React permite crear interfaces mediante componentes
            reutilizables y facilita la creación de aplicaciones
            web interactivas.
          </p>
        </section>

        <section id="contacto" className="tarjeta">
          <h2>Contacto</h2>

          <p>
            Para obtener más información puedes utilizar los
            siguientes datos de contacto:
          </p>

          <p>
            <strong>Correo:</strong> ejemplo@gmail.com
          </p>

          <p>
            <strong>Teléfono:</strong> 0000-0000
          </p>
        </section>

      </main>

      <footer>
        <p>© 2026 Mi Página Web</p>
      </footer>
    </>
  )
}

export default App