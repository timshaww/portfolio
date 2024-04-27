import { BsDash } from 'react-icons/bs';

const About = () => {
	const experience = [
		{
			company: 'NeurOn Therapy',
			role: 'Full-Stack Developer',
			date: 'Dec 2022 - Present',
			description: {
				techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
				bullets: [
					'Lead the development of a web application that helps patients with mental health disorders',
					'Implemented a feature that allows patients to track their mood over time',
					'Collaborated with a team of 5 developers to deliver a high-quality product',
				],
			},
		},
		{
			company: 'TradeStation Technologies',
			role: 'SDET Intern',
			date: 'June 2023 - November 2023',
			description: {
				techStack: ['C#', 'Selenium', 'TestNG'],
				bullets: [
					'Automated test cases for a trading platform using Selenium',
					'Wrote test plans for new features',
					'Worked with developers to ensure the quality of the product',
				],
			},
		},
	];
	return (
		<div className='flex flex-col h-2/3 items-center justify-center mx-auto'>
			<div className=' flex justify-center border-black border-4 p-4 rounded-lg text-4xl w-[80%] mx-4'>
				About Me
			</div>
			<div className='flex justify-center border-black border-4  mt-3 rounded-lg text-sm w-[80%] mx-4 p-4'>
				<div className='lg:max-w-[80%]'>
					I didnt start coding until my 2nd year of college. but blah
					blha bfgj nfjd fg ds gf e f g fs e g dgs ew w e dg sd gwe f
					sds d v ds f a e r gds df q 3 f sgf gw g ht rj yt w d f re
				</div>
			</div>
			<div className=' flex justify-center border-black border-4 p-4 mt-16 rounded-lg text-2xl w-[80%] mx-4'>
				Experience
			</div>
			<div className='flex flex-col jusitfy-center w-[80%]'>
				{experience.map((exp, index) => (
					<>
						<div
							key={index}
							className='hidden md:flex flex-row justify-center mt-3 w-full '
						>
							<div className='border-black border-4 rounded-lg p-4 w-[20%] mr-3'>
								<p className='sm:text-lg text-xl font-bold text-pretty'>
									{exp.company}
								</p>
								<p className='mt-2'>{exp.role}</p>
								<p>{exp.date}</p>
							</div>
							<div className='border-black border-4  items-center rounded-lg p-4 w-[80%]'>
								<div className='flex flex-row border-black border-[3px] px-1 rounded-md'>
									{exp.description &&
										typeof exp.description === 'object' &&
										exp.description.techStack &&
										exp.description.techStack.map(
											(tech, index) => (
												<p
													key={index}
													className='text-sm'
												>
													{tech}&nbsp;
												</p>
											)
										)}
								</div>
								<div className='flex flex-col '>
									{exp.description &&
										typeof exp.description === 'object' && (
											<ul>
												{exp.description.bullets.map(
													(bullet, index) => (
														<li
															key={index}
															className='flex flex-row items-center'
														>
															<BsDash
																style={{
																	width: '1em',
																	height: '1em',
																	marginRight:
																		'0.5em',
																}}
															/>
															{bullet}
														</li>
													)
												)}
											</ul>
										)}
								</div>
							</div>
						</div>
						<div
							key={index}
							className='flex md:hidden flex-row mt-3 w-full'
						>
							<div className='flex items-center justify-center border-black border-4 rounded-lg p-4 w-[20%] mr-3'>
								<p className='text-lg font-bold text-pretty w-full '>
									{exp.company}
								</p>
							</div>
							<div className='border-black border-4 rounded-lg p-4 w-[80%] text-sm'>
								<p>{exp.role}</p>
								<p>{exp.date}</p>
								<div className='flex flex-row border-black border-[3px] px-1 rounded-md'>
									{exp.description &&
										typeof exp.description === 'object' &&
										exp.description.techStack &&
										exp.description.techStack.map(
											(tech, index) => (
												<p
													key={index}
													className='text-sm'
												>
													{tech}&nbsp;
												</p>
											)
										)}
								</div>
								<div className='flex flex-col '>
									{exp.description &&
										typeof exp.description === 'object' && (
											<ul>
												{exp.description.bullets.map(
													(bullet, index) => (
														<li
															key={index}
															className='flex flex-row items-center'
														>
															{bullet}
														</li>
													)
												)}
											</ul>
										)}
								</div>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default About;
