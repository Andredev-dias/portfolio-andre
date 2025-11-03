import styles from './App.module.css'
import fotoPerfil from '../public/foto1.png'

function App() {

  //javascript

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
      </nav>
      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={fotoPerfil} alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>André Dias</h2>
            <p className={styles.paragraph}>Desenvolvedor, professor e desenhista. Atuo no sistema FIEP como técnico de ensino com um background de 10 anos no mercado de desenvolvimento.</p>
          </div>
        </section>

        <section id='s2'>
          <h2>sessao 2</h2>
        </section>

        <section id='s3'>
          <h2>sessao 3</h2>
        </section>

        <section id='s4'>
          <h2>sessao 4</h2>
        </section>
      </main>
    </>
  )
}

export default App
