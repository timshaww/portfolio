import PageSection from './PageSection';
import PageHeader from './PageHeader';

const Blog = () => {
	return (
		<div className='flex flex-col items-center max-w-[1000px] justify-center m-auto'>
			<PageSection>
				<PageHeader>Blog</PageHeader>
			</PageSection>
		</div>
	);
};

export default Blog;
