import SplitFlap from './SplitFlap';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
	return (
		<div className='flex flex-col h-96 items-center justify-center'>
			<div className='bg-black rounded-xl p-2'>
				<SplitFlap />
			</div>
			<h1>Hey, I'm Tim</h1>
			<h1>
				A Full-Stack developer, who loves bringing ideas to reality.
			</h1>
		</div>
	);
};

export default Home;
