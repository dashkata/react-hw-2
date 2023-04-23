import './App.css'
import ProductList from './components/ProductList'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import AdBanner from './components/AdBanner';
import TextIntro from './components/TextIntro';
import Footer from './components/Footer';
import UrlPath from './components/UrlPath';

function App() {
  return (
    <div className="min-h-screen w-full text-2xl">
      <Banner/>
      <NavBar/>
      <AdBanner/>
      <UrlPath path={["Home", "Wallpaper", "Shop By Design", "Animal"]}/>
      <TextIntro/>
      <ProductList />
      <Footer/>
      
    </div>
  );
}

export default App
