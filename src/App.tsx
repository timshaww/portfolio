import { Header } from './components/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Donate from './components/Donate';

function App() {
	return (
		<div className='flex flex-col min-h-screen justify-between'>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/blog' element={<Blog />} />
					<Route path='/donate' element={<Donate />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
