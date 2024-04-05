import './App.css'
import Carousel from './components/Carousel'
import data from './data/items'
function App() {
  const slides = data.slides;
  return (
        <>
              <Carousel data={slides}/>
        </>
      
    
  );
}

export default App;
