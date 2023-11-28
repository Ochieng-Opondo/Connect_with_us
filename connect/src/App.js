import './App.css';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';



function App({cardObject}) {

 
  return (
  <div>
   
    <Header />
    <About cardObject={cardObject}/>
  <Footer/>
  
 </div>
  );

}
export default App;