import Logo from './Logo';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export function Header() {
	return (
		<div className='flex w-full justify-between border-zinc-200 border-[1px] mb-5 backdrop-blur shadow fixed'>
			<div className='flex flex-row items-center '>
				<div className='flex items-center p-2'>
					<Link to='/'>
						<Logo />
					</Link>
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
