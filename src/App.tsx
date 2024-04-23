import { useState } from 'react';
import { Header } from './components/Header';

function App() {
	const [count, setCount] = useState(2);

	return (
		<>
			<Header />

			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					I love you {count} times more
				</button>
			</div>
		</>
	);
}

export default App;
