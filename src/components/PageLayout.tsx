import { FC, PropsWithChildren } from 'react';

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({ children }) => {
	return (
		<div className='flex flex-col items-center max-w-[1000px] justify-center m-auto'>
			{children}
		</div>
	);
};

export default PageLayout;
