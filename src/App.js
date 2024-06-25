import './App.css';
import Activities from './Components/Activites/Activities';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Location from './Components/Location/Location';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import NewActivity from './Components/New-Activity/NewActivity';
import Review from './Components/Review/Review';
import Team from './Components/Team/Team';
import Category from './Components/Top-Category/Category';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/>
      <Location />
      <Activities />
      <Category />
      <NewActivity />
      <Review />
      <Team />
      <Footer/>
    </>
  );
}

export default App;
