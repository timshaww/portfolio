import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const NavBar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const handleClick = () => setNavOpen(!navOpen);

	return (
		<>
			{/* menu */}
			<ul className='hidden md:flex'>
				<li className='mt-[3px]'>Home</li>
				<li className='mt-[3px]'>Resume</li>
				<li className='mt-[3px]'>Projects</li>
				<li className='mt-[3px] mr-4'>Blog</li>
				<li className='bg-white mr-4 border-black border-[2px] py-[3px] rounded-md hover:bg-black hover:text-white duration-200'>
					Contact
				</li>
			</ul>

			{/* hamburger */}
			<div onClick={handleClick} className='md:hidden z-10 px-2'>
				{!navOpen ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile */}
			<div
				className={
					!navOpen
						? 'hidden'
						: 'absolute z-[9] top-0 left-0 w-full h-screen backdrop-blur flex flex-col items-center justify-center'
				}
			>
				<ul>
					<li className='py-4 text-2xl flex justify-center'>Home</li>
					<li className='py-4 text-2xl flex justify-center'>
						Resume
					</li>
					<li className='py-4 text-2xl flex justify-center'>
						Projects
					</li>
					<li className='py-4 text-2xl flex justify-center'>Blog</li>
				</ul>
			</div>

			{/* social icons */}
			<div className='flex fixed flex-col top-[65%] left-0'>
				<ul>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href=''
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href=''
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='mb-[2px] w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href=''
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center border-black border-2 rounded-xl ml-[-100px] hover:ml-[-10px] duration-200'>
						<a
							className='flex justify-between items-center w-full'
							href=''
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
