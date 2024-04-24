import Logo from '../assets/Portfolio.png';
import NavBar from './NavBar';

export function Header() {
	return (
		<div className='flex w-full justify-between'>
			<div className='flex flex-row items-center '>
				<div className='flex items-center p-2'>
					<img
						src={Logo}
						alt='Logo Image'
						style={{ width: '70px' }}
					/>
				</div>
				{/* <div className='flex justify-center w-[70px] border-black border-[3px] rounded-lg p-1'>
					<Head />
				</div> */}
			</div>
			<div className='flex items-center'>
				<NavBar />
			</div>
		</div>
	);
}

export default Header;
