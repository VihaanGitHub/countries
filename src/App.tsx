import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import NotFound from './pages/NotFound';
import Header from './components/Header';

export default function App() {
  const path = window.location.pathname;
  if(path =="/") return <>
  <Header/>
  <Home/>
  </>;
  else if(path=="/countries") return <>
  <Header/>

  <CountryDetails/>
  </>
  else return  <NotFound/>
  
}
