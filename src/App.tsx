import { Header } from './components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Donate from './pages/Donate';

function App() {
	return (
		<div className='flex flex-col min-h-screen justify-between'>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/donate' element={<Donate />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
