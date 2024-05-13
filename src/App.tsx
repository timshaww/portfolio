import { Header } from './components/Header';
import Home from './components/Home';
import About from './components/About/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import { Routes, Route } from 'react-router-dom';

function App() {
	// const [count, setCount] = useState(2);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/blog' element={<Blog />} />
			</Routes>
			{/* <div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					I love you {count} times more
				</button>
			</div> */}
		</>
	);
}

export default App;
