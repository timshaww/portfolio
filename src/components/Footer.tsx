import Resume from '../../public/ShawTimothyResume.pdf';

const Footer = () => {
	return (
		<div className='w-full py-2 px-4'>
			<div className='flex flex-row justify-between items-center max-w-6xl mx-auto text-sm text-gray-500'>
				<div>
					<p>made by me, with ♡</p>
				</div>
				<div className='flex flex-row space-x-2'>
					<a href='https://www.linkedin.com/in/timshaww' target='_blank' rel='noopener noreferrer'>
						linkedin
					</a>
					<span>/</span>
					<a href='https://github.com/timshaww' target='_blank' rel='noopener noreferrer'>
						github
					</a>
					<span>/</span>
					<a href={Resume} target='_blank' rel='noopener noreferrer'>
						resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
