import AboutHeader from './AboutHeader';
import AboutSection from './AboutSection';
import AboutExperienceBlock from './AboutExperienceBlock';
import exp from 'constants';

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
			date: 'June - November 2023',
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
		<div className='flex flex-col items-center max-w-[1000px] justify-center m-auto'>
			<AboutSection>
				<AboutHeader>About Me</AboutHeader>
				<p className='flex justify-center p-4 max-w-[80%] m-auto'>
					I didnt start coding until my 2nd year of college. But after
					starting, I just couldn't stop. I love making things from
					scratch, and have adopted React/Next.js as my favorite way
					to do so. Aside from my side projects, I've had wonderful
					opportunities to work at the startup, small-business, and
					enterprise level, giving me a insights on how to develop
					both quickly and reliably
				</p>
			</AboutSection>
			<AboutSection>
				<AboutHeader>Experience</AboutHeader>
				{experience.map((exp, index) => (
					<AboutExperienceBlock
						key={index}
						company={exp.company}
						bullets={exp.description.bullets}
						date={exp.date}
						role={exp.role}
						techStack={exp.description.techStack}
					/>
				))}
			</AboutSection>
		</div>
	);
};

export default About;
