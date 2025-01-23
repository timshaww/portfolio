import { FC } from 'react';
import { FaA, FaArrowRightLong } from 'react-icons/fa6';

interface AboutExperienceBlockProps {
	company: string;
	role: string;
	date: string;
	techStack: string[];
	bullets: string[];
}

const AboutExperienceBlock: FC<AboutExperienceBlockProps> = ({
	company,
	role,
	date,
	techStack,
	bullets,
}) => {
	return (
		<>
			{/* Computers */}
			<div className='hidden md:flex flex-row jusitfy-between full'>
				<div className='border-inherit border-b-[1px] last:border-b-0 p-4 w-[25%]'>
					<p className='text-lg font-bold'>{company}</p>
					<p className='mt-2'>{role}</p>
					<p className='italic'>{date}</p>
				</div>
				<div className='border-inherit border-b-[1px] border-l-[1px] last:border-b-[0] w-[75%] items-center'>
					<div className='flex flex-col p-4'>
						<ul>
							{bullets.map((bullet, index) => (
								<div className='flex flex-row items-baseline w-full'>
									<FaArrowRightLong
										key={index}
										className='w-[2%] '
									/>

									<li
										key={index}
										className='flex flex-row items-center w-[98%]'
									>
										{bullet}
									</li>
								</div>
							))}
						</ul>
					</div>
					<div className='flex flex-row mt-1 border-inherit border-b-[1px] border-t-[1px] py-1 px-8'>
						{techStack.map((tech, index) => (
							<p key={index} className='text-sm px-[12px]'>
								{tech}&nbsp;
							</p>
						))}
					</div>
				</div>
			</div>
			{/* Mobile */}
			<div className='flex md:hidden flex-row justify-between w-full'>
				<div className='flex items-center justify-center border-inherit border-b-[1px] p-4 w-[20%]'>
					<div className='flex items-center justify-center h-full w-full transform -rotate-90'>
						<p className='text-lg whitespace-nowrap font-bold'>
							{company}
						</p>
					</div>
				</div>
				<div className='border-inherit border-l-[1px] border-b-[1px] w-[80%] text-sm'>
					<p className='font-bold px-4 pt-4'> {role} </p>
					<p className='italic text-sx mb-1 px-4'>{date}</p>
					<div className='flex flex-col px-4'>
						<ul>
							{bullets.map((bullet, index) => (
								<div className='flex flex-row items-baseline w-full'>
									<FaArrowRightLong
										key={index}
										className='w-[3%]'
									/>
									<li
										key={index}
										className='flex flex-row items-center w-[97%]'
									>
										{bullet}
									</li>
								</div>
							))}
						</ul>
					</div>
					<div className='flex flex-row mt-1 marker:justify-start border-inherit border-t-[1px] py-1 px-8 overflow-scroll'>
						{techStack.map((tech, index) => (
							<p
								key={index}
								className='text-sm whitespace-nowrap px-2'
							>
								{tech}
							</p>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutExperienceBlock;
