import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<ul className='flex'>
				<div className='flex flex-row items-center justify-center rounded-lg '>
					<li className='hover:font-bold duration-100 w-full'>
						<Link to='/about'>about</Link>
					</li>
					{/* <li className='hover:font-bold duration-100'>
						<Link to='/projects'>work</Link>
					</li>
					<li className='hover:font-bold duration-100'>
						<Link to='/blog'>blog</Link>
					</li> */}
				</div>
			</ul>
		</>
	);
};

export default NavBar;
