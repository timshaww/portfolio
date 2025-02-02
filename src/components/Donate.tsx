import { useEffect, useState } from 'react';
import axios from 'axios';
import Vlad from '/vlad.png';
import Dad from '/dad.png';

const API_BASE_URL = process.env.NODE_ENV === 'production' ? 'https://portfolio-donation-backend.onrender.com' : 'http://localhost:3000';

const Donate = () => {
	const [count, setCount] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/visit`, { withCredentials: true })
			.then(() => {
				axios
					.get(`${API_BASE_URL}/count`)
					.then((res) => setCount(res.data.count))
					.catch((err) => console.error('Error fetching count', err));
			})
			.catch((err) => console.error('Error visiting', err));
	}, []);

	return (
		<div className='flex flex-col items-center justify-center min-h-[calc(100vh-150px)] mt-20 px-4'>
			<div className='w-full max-w-3xl flex flex-col items-center justify-center mt-28 mb-28'>
				<p className='text-2xl font-semibold '>amount donated this month:</p>
				{count !== null ? <h1 className='text-6xl font-bold'>${count}</h1> : <p>Loading...</p>}
				<p className='text-gray-500 mt-12 text-center'>each time someone visits this page, i&apos;ll donate $1.</p>
				<p className='text-gray-500 text-center'>max one dollar per person per month.</p>
			</div>
			<div className='mt-12 w-full max-w-3xl flex flex-col items-center'>
				<h2 className='font-semibold text-lg'>
					i&apos;m donating to the{' '}
					<a href='https://afsp.org' className='underline'>
						american foundation for suicide prevention
					</a>
					.
				</h2>
				<p className='my-4'>in 2024, i lost two people very close to me.</p>
				<p>
					<span className='font-semibold'>vlad zhuravskyy</span>, my best friend, june 30th.
				</p>
				<p>
					<span className='font-semibold'>ian shaw</span>, my dad, november 11th.
				</p>
			</div>
			<div className='flex flex-col md:grid md:grid-cols-2 mt-4 md:gap-4 max-w-3xl items-center '>
				<div className='mt-4 md:mt-0 w-60'>
					<img src={Vlad} alt='' className='size-60 rounded' />
					<p className='w-full text-right text-gray-300 font-mono text-sm'>VLAD WORKING OUT WITH ME</p>
				</div>
				<div className='mt-4 md:mt-0 w-60'>
					<img src={Dad} alt='' className='size-60 rounded' />
					<p className='w-full text-right text-gray-300 font-mono text-sm'>DAD AT OUR FAVE RESTAURANT</p>
				</div>
			</div>
		</div>
	);
};

export default Donate;
