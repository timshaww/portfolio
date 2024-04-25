import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import resume from '../assets/ShawTimothyResume.pdf';
import { Link } from 'react-router-dom';

const NavBar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const handleClick = () => setNavOpen(!navOpen);

	return (
		<>
			{/* menu */}
			<ul className='hidden md:flex'>
				<div className='flex flex-row items-center border-black border-[3px] rounded-lg '>
					<li className='hover:font-bold hover:underline duration-100'>
						<Link to='/portfolio/'>Home</Link>
					</li>
					<li className='hover:font-bold hover:underline duration-100'>
						<Link to='/portfolio/about'>About</Link>
					</li>
					<li className='hover:font-bold hover:underline duration-100'>
						<Link to='/portfolio/projects'>Projects</Link>
					</li>
					<li className='hover:font-bold hover:underline duration-100'>
						<Link to='/portfolio/blog'>Blog</Link>
					</li>
				</div>
				<li className='bg-white mr-4 ml-4 border-black border-[3px] py-[3px] rounded-lg hover:bg-black hover:text-white duration-200'>
					Contact
				</li>
			</ul>

			{/* hamburger */}
			<div onClick={handleClick} className='md:hidden z-10 px-2'>
				<div className='border-black border-2 rounded-lg p-1'>
					{!navOpen ? <FaBars /> : <FaTimes />}
				</div>
			</div>

			{/* mobile */}
			<div
				className={
					!navOpen
						? 'hidden'
						: 'absolute z-[9] top-0 left-0 w-full h-screen backdrop-blur flex flex-col items-center justify-center'
				}
			>
				<ul className='border-black border-4 rounded-lg p-4 bg-white'>
					<li className='py-4 text-2xl flex justify-center'>
						<Link to='/portfolio/' onClick={handleClick}>
							Home
						</Link>
					</li>
					<li className='py-4 text-2xl flex justify-center'>
						<Link to='/portfolio/about' onClick={handleClick}>
							About
						</Link>
					</li>
					<li className='py-4 text-2xl flex justify-center'>
						<Link to='/portfolio/projects' onClick={handleClick}>
							Projects
						</Link>
					</li>
					<li className='py-4 text-2xl flex justify-center'>
						{' '}
						<Link to='/portfolio/blog' onClick={handleClick}>
							Blog
						</Link>
					</li>
				</ul>
			</div>

			{/* social icons */}
			<div className='hidden md:flex fixed flex-col top-[60%] left-0'>
				<ul>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href='https://www.linkedin.com/in/timshaww'
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href='https://github.com/timshaww'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href='mailto:shawtimothye@gmail.com?subject=I Saw Your Portfolio!'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href={resume}
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NavBar;
