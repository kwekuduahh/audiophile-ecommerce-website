import BestGear from './Components/Design/BestGear';
import Footer from './Components/Design/Footer';
import Hero from './Components/Design/Hero';
import NavBar from './Components/Design/NavBar';
import ProductsBento from './Components/Design/ProductsBento';
import ProductsSection from './Components/Design/ProductsSection';
import './index.css';

function App() {
	return (
		<>
			<NavBar />
			<Hero />
			<ProductsSection />
			<ProductsBento />
			<BestGear />
			<Footer />
		</>
	);
}

export default App;
