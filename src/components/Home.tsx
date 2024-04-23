import SplitFlap from './SplitFlap';

const Home = () => {
	return (
		<div className='flex flex-col h-96 items-center justify-center'>
			<div className='bg-black rounded-xl p-1'>
				<div className='bg-white rounded-lg p-2'>
					<SplitFlap />
				</div>
			</div>
			<div className='mt-5 border-black border-4 p-4 rounded-lg m-2'>
				<div className='flex justify-center items-baseline'>
					<h1 className='flex justify-center mr-2 text-3xl'>
						Hey, I'm
					</h1>
					<h1 className='flex justify-center text-3xl font-bold border-black border-4 p-1 rounded-lg'>
						Tim Shaw
					</h1>
				</div>
				<h1 className='flex justify-center mt-1'>
					A full-stack developer, who loves bringing ideas to reality.
				</h1>
			</div>
		</div>
	);
};

export default Home;
