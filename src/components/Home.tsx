import Head from './Head';
import SplitFlap from './SplitFlap';

const Home = () => {
	return (
		<div className='flex flex-col h-2/3 items-center justify-center mx-auto'>
			<div className='bg-black rounded-xl p-1'>
				<div className='bg-white rounded-lg p-2'>
					<SplitFlap />
				</div>
			</div>
			<div className='m-5 border-black border-4 p-4 rounded-lg'>
				<div className='flex justify-center items-baseline'>
					<h1 className='flex justify-center mr-2 text-3xl'>
						Hey, I'm
					</h1>
					<h1 className='flex justify-center text-3xl font-bold border-black border-4 p-1 rounded-lg'>
						Tim
					</h1>
				</div>
				<h1 className='flex justify-center mt-1'>
					A full-stack developer, who loves bringing ideas to reality.
				</h1>
			</div>
			<div className='flex  justify-center items-center border-black border-4 rounded-lg px-2 pt-2 w-64'>
				<Head />
			</div>
		</div>
	);
};

export default Home;
