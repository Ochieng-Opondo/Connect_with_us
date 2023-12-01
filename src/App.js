import './App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { RouterProvider } from "react-router-dom";
import Login from './Components/login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />
  }
]);


function App({ cardObject }) {

  return (
    <div>
    <Header />
    < RouterProvider router = { router } />
      <About cardObject={ cardObject } />
        < Footer />

        </div>
  );

}
export default App;