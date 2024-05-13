import Head from './Head';
import SplitFlap from './SplitFlap';
import Selfie from '../assets/Selfie.jpg';

const Home = () => {
	return (
		<div className='flex flex-col h-2/3 items-center justify-center mx-auto'>
			<div className='bg-zinc-200 rounded-[7px] p-[1px] shadow'>
				<div className='bg-white rounded-md p-2 border-zinc-200'>
					<SplitFlap />
				</div>
			</div>
			<div className='m-5 p-4 rounded-lg '>
				<div className='flex justify-center items-baseline'>
					<h1 className='flex justify-center mr-2 text-3xl'>
						Hey, I'm
					</h1>
					<h1 className='flex justify-center text-3xl font-bold border-zinc-200 border-[1px] shadow p-1 rounded-lg'>
						Tim
					</h1>
				</div>
				<h1 className='flex justify-center mt-1'>
					A full-stack developer, who loves bringing ideas to reality.
				</h1>
			</div>
			<img
				src={Selfie}
				alt=''
				className='rounded shadow w-80 border-zinc-200 border-[1px]'
			/>
			{/* <Head /> */}
		</div>
	);
};

export default Home;
