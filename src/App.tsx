import { Header } from './components/Header';
import Home from './components/Home';

function App() {
	// const [count, setCount] = useState(2);

	return (
		<>
			<Header />
			<Home />

			{/* <div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					I love you {count} times more
				</button>
			</div> */}
		</>
	);
}

export default App;
