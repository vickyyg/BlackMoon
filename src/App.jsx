import './App.css' 
import Cards from './Cards/Cards'
import Info from './Info/Info'
import Navbars from './Navbar/Navbar'
import Exp from './Exp/Exp'
import ContactForm from './Contact/Contact'
import Footer from './Footer/Footer'


function App() {

  return (
    <div>
      <Navbars/>
       <Cards/>
       <Info/>
       <Exp/>
       <ContactForm/>
       <Footer/>
    </div>
  )
}

export default App
