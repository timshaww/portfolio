const About = () => {
	const experience = [
		{
			company: 'NeurOn Therapy',
			role: 'FullStack Developer',
			date: 'Dec 2022 - Present',
			description: {
				techStack: ['React', 'TypeScript', 'Python', 'AWS'],
				bullets: [
					'Designed and implemented a series of React-based games to rehab stroke patients and improve areas of cognition.',
					'Spearheaded full-stack development in a previous app iteration, employing HMTL Canvas, Konva.js, AWS EC2, Flask, AWS Lambda, and Twilio for robust game delivery and patient engagement. Leveraged AWS Dynamo DB for data storage and used Pandas, Numpy, and Matplotlib for data analysis.',
					'Successfully led the completion of 5 diverse projects, including cued Stroop test, impulse control game, pattern recognition game, memory recall game, and internal data analysis dashboard.',
				],
			},
		},
		{
			company: 'TradeStation Technologies',
			role: 'SDE Intern',
			date: 'June 2023 - November 2023',
			description: {
				techStack: ['JavaScript', 'SQL', 'Selenium'],
				bullets: [
					'Facilitated duplicate remediation during data pipeline transfer to Salesforce CRM from Microsoft Dynamics by using JavaScript and SQL to create rules that identify and flag duplicated contacts.',
					'Developed and deployed an automated UI testing suite using Selenium WebDriver, creating 24 tests for Dynamics CRM, and integrated the tests into the Azure release pipeline.',
					'Automated the integration testing of creating and modifying contacts, and validation of synchronization between Salesforce and Dynamics, by leveraging JavaScript in Postman which achieved an 80% reduction is testing time, and replaced a manual process.',
					'Conducted unit testing on internal tools using Apex on Salesforce Lightning Web Components',
				],
			},
		},
	];
	return (
		<div className='flex flex-col h-2/3 items-center justify-center mx-auto'>
			<div className=' flex justify-center border-black border-[3px] p-4 rounded-lg text-4xl w-[80%] mx-4'>
				About Me
			</div>
			<div className='flex justify-center border-black border-[3px]  mt-3 rounded-lg text-sm w-[80%] mx-4 p-4'>
				<div className='lg:max-w-[80%]'>
					I didnt start coding until my 2nd year of college. But after
					starting, I just couldn't stop. I love making things from
					scratch, and have adopted React/Next.js as my favorite way
					to do so. Aside from my side projects, I've had wonderful
					opportunities to work at the startup, small-business, and
					enterprise level, giving me a insights on how to develop
					both quickly and reliably.
				</div>
			</div>
			<div className=' flex justify-center border-black border-[3px] p-4 mt-12 rounded-lg text-2xl w-[80%] mx-4'>
				Experience
			</div>
			<div className='flex flex-col jusitfy-center w-[80%]'>
				{experience.map((exp, index) => (
					<>
						<div
							key={index}
							className='hidden lg:flex flex-row justify-between mt-3 w-full '
						>
							<div className='border-black border-[3px] rounded-lg p-4 w-[19%]'>
								<p className='sm:text-lg text-xl font-bold text-pretty'>
									{exp.company}
								</p>
								<p className='mt-2'>{exp.role}</p>
								<p>{exp.date}</p>
							</div>
							<div className='border-black border-[3px]  items-center rounded-lg p-4 w-[79%]'>
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
								<div className='flex flex-row mt-1 border-black border-[3px] px-1 rounded-md'>
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
							</div>
						</div>
						<div
							key={index}
							className='flex lg:hidden flex-row justify-between mt-3 w-full'
						>
							<div className='flex items-center justify-center border-black border-[3px] rounded-lg p-4 w-[18%]'>
								<div className='flex items-center justify-center h-full w-full transform -rotate-90'>
									<p className='text-lg font-bold whitespace-nowrap '>
										{exp.company}
									</p>
								</div>
							</div>
							<div className='border-black border-[3px] rounded-lg p-4 w-[78%] text-sm'>
								<p className='font-bold '>{exp.role}</p>
								<p className='italic text-xs mb-1'>
									{exp.date}
								</p>
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
								<div className='flex flex-row mt-1 marker:justify-start border-black border-[3px] px-1 rounded-md'>
									{exp.description &&
										typeof exp.description === 'object' &&
										exp.description.techStack &&
										exp.description.techStack.map(
											(tech, index) => (
												<p
													key={index}
													className='text-sm whitespace-nowrap'
												>
													{tech} &nbsp;
												</p>
											)
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
