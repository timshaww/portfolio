import Logo from '../assets/Portfolio.png';
import NavBar from './NavBar';

export function Header() {
	return (
		<div className='flex w-full justify-between'>
			<div className=' fixed flex items-center p-2'>
				<img src={Logo} alt='Logo Image' style={{ width: '70px' }} />
			</div>
			<div className='flex items-center'>
				<NavBar />
			</div>
		</div>
	);
}

export default Header;
