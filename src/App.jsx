import './App.css' 
import Cards from './Components/Cards/Cards'
import Info from './Components/Info/Info'
import Navbars from './Components/Navbar/Navbar'
import Exp from './Components/Exp/Exp'
import ContactForm from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


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
