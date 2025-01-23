import { FC, PropsWithChildren } from 'react';

interface PageHeaderProps {
	children: React.ReactNode;
}

const PageHeader: FC<PropsWithChildren<PageHeaderProps>> = ({ children }) => {
	return (
		<div className='flex justify-center p-4 text-4xl border-inherit border-b-[1px] last:border-b-0'>
			{children}
		</div>
	);
};

export default PageHeader;
