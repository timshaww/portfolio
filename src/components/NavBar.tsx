// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import resume from '../assets/TimothyShawResume.pdf';
import { Link } from 'react-router-dom';

const NavBar = () => {
	// const [navOpen, setNavOpen] = useState(false);
	// const handleClick = () => setNavOpen(!navOpen);

	return (
		<>
			{/* menu */}
			<ul className='flex'>
				<div className='flex flex-row items-center justify-center rounded-lg '>
					<li className='hover:font-bold duration-100 w-full'>
						<Link to='/about'>about</Link>
					</li>
					<li className='hover:font-bold duration-100'>
						<Link to='/projects'>work</Link>
					</li>
					<li className='hover:font-bold duration-100'>
						<Link to='/blog'>blog</Link>
					</li>
				</div>
			</ul>
			{/* hamburger */}
			{/* <div onClick={handleClick} className='md:hidden z-20 px-2'>
				<div className='border-zinc-200 border-[1px] shadow rounded-lg p-1'>{!navOpen ? <FaBars /> : <FaTimes />}</div>
			</div> */}
			{/* mobile */}
			{/* <div
				className={
					!navOpen ? 'hidden' : 'absolute z-[19] top-0 left-0 w-full h-screen backdrop-blur flex flex-col items-center justify-center'
				}
			>
				<ul className='border-zinc-200 border-[1px] rounded-lg p-4 bg-white w-44'>
					<li className='py-4 text-2xl flex justify-center hover:font-bold hover:underline duration-100'>
						<Link to='/' onClick={handleClick}>
							Home
						</Link>
					</li>
					<li className='py-4 text-2xl flex justify-center hover:font-bold hover:underline duration-100'>
						<Link to='/about' onClick={handleClick}>
							About
						</Link>
					</li>
					<li className='py-4 text-2xl flex justify-center hover:font-bold hover:underline duration-100'>
						<Link to='/projects' onClick={handleClick}>
							Projects
						</Link>
					</li>
					<li className='py-4 text-2xl flex justify-center hover:font-bold hover:underline duration-100'>
						{' '}
						<Link to='/blog' onClick={handleClick}>
							Blog
						</Link>
					</li>
				</ul>
			</div> */}
			{/* social icons */}
			{/* <div className='hidden md:flex fixed flex-col top-[60%] left-0'>
				<ul>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-zinc-200 border-[1px] shadow rounded-xl ml-[-100px] bg-white hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href='https://www.linkedin.com/in/timshaww'
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-zinc-200 border-[1px] shadow rounded-xl ml-[-100px] bg-white hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href='https://github.com/timshaww'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-zinc-200 border-[1px] shadow rounded-xl ml-[-100px] bg-white hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href='mailto:shawtimothye@gmail.com?subject=I Saw Your Portfolio!'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center border-zinc-200 border-[1px] shadow rounded-xl ml-[-100px] bg-white hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href={resume}
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div> */}
		</>
	);
};

export default NavBar;
