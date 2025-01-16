import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Main from './components/main/Main.jsx'
import './GlobalStyle/globalStyle.scss';

export default function App(){
  return(
    <section>
      <Header/>
        <Main/>
      <Footer/>
    </section>
  )
}