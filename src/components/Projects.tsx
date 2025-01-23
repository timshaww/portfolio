import PageSection from './PageSection';
import PageHeader from './PageHeader';
import PageLayout from './PageLayout';

const Projects = () => {
	return (
		<PageLayout>
			<PageSection>
				<PageHeader>Projects</PageHeader>
			</PageSection>
			{/* <PageSection> */}
			<div className='flex w-full justify-center items-center p-2 mt-6'>Projects coming soon...</div>
			{/* <div className='grid grid-cols-2 gap-4'>
					<div className='border-zinc-200 border-[1px] rounded-lg shadow p-2'>
						<h2 className='text-2xl'>Project 1</h2>
						<p>Project 1 description</p>
					</div>
					<div className='border-zinc-200 border-[1px] rounded-lg shadow p-2'>
						<h2 className='text-2xl'>Project 2</h2>
						<p>Project 2 description</p>
					</div>
					<div className='border-zinc-200 border-[1px] rounded-lg shadow p-2'>
						<h2 className='text-2xl'>Project 3</h2>
						<p>Project 3 description</p>
					</div>
					<div className='border-zinc-200 border-[1px] rounded-lg shadow p-2'>
						<h2 className='text-2xl'>Project 4</h2>
						<p>Project 4 description</p>
					</div>
				</div> */}
			{/* </PageSection> */}
		</PageLayout>
	);
};

export default Projects;
