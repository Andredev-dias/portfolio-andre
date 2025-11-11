import styles from './App.module.css'

import fotoPerfil from '/foto1.png'
import facebookIcon from '/facebook.webp'
import instagramIcon from '/instagram.webp'
import linkedinIcon from '/linkedin.webp'
import whatsappIcon from '/whatsapp.webp'
import htmlImg from '/HTML.png'
import cssImg from '/CSS.png'
import jsImg from '/JS.png'
import viteImg from '/VITE.png'
import vercelImg from '/VERCEL.png'
import reactImg from '/REACT.png'

import { useState } from 'react'

function App() {

  const defaultPhoneNumber = '5541999999999'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({...formData, [name]: value})
  }

  // console.log(formData)
  
  const handleZap = () => {
    const {name, email, message} = formData

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`

    window.open(urlZap, "_blank")
  }

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

        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
            <div className={styles.card}>
              <img width={100} src={htmlImg} alt="HTML" />
              <h3>HTML</h3>
              <p>HTML é a sigla para Hypertext Markup Language
                (Linguagem de Marcação de Hipertexto) e é a
                linguagem de marcação padrão usada para criar
                e estruturar páginas da web.</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={cssImg} alt="CSS" />
              <h3>CSS</h3>
              <p>CSS (Cascading Style Sheets) é uma linguagem de
                estilo usada para descrever a apresentação
                visual de um documento escrito em linguagem
                de marcação como HTML.</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={jsImg} alt="JS" />
              <h3>JS</h3>
              <p>JavaScript é uma linguagem de programação leve,
                interpretada e versátil, usada para tornar páginas
                da web dinâmicas e interativas.</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={viteImg} alt="VITE" />
              <h3>VITE JS</h3>
              <p>Vite.js é uma ferramenta de construção de front-end moderna,
                rápida e leve, projetada para aprimorar significativamente
                a experiência de desenvolvimento de aplicações web.</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={reactImg} alt="REACT" />
              <h3>REACT</h3>
              <p>No contexto de desenvolvimento de software,
                o React é uma biblioteca que permite
                criar componentes reutilizáveis para
                criar interfaces interativas e dinâmicas
                de forma eficiente.</p>
            </div>
            <div className={styles.card}>
              <img width={100} src={vercelImg} alt="VERCEL" />
              <h3>VERCEL</h3>
              <p>Vercel é uma plataforma de nuvem que
                facilita a criação e implantação de
                aplicativos web modernos, sendo ideal
                para desenvolvedores front-end.</p>
            </div>
          </div>
        </section>

        <section id='s3'>
          <h2>Github repositórios</h2>
        </section>


        <section id='s4' className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">Informe seu email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Informe uma mensagem</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>
        
      </main>
      <footer className={styles.rodape}>
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={facebookIcon} alt="Facebook" /> </a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={instagramIcon} alt="Instagram" /> </a>
        <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={linkedinIcon} alt="Linkedin" /> </a>
        <a href="https://www.whatsapp.com" target='_blank' rel='noopener noreferrer'> <img width={70} src={whatsappIcon} alt="WhatsApp" /> </a>
      </footer>
    </>
  )
}

export default App
