import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Footer from './Components/ Footer';
import Header from './Components/Header';


function App({ cardObject }) {


  return (
    <div>
      <Header />
      <Landing />
      <About cardObject={cardObject} />
      <Footer />

    </div>
  );

}
export default App;