import { FC, PropsWithChildren, ReactNode } from 'react';

interface PageSectionProps {
	children: ReactNode;
}

const PageSection: FC<PropsWithChildren<PageSectionProps>> = ({
	children,
	...props
}) => {
	return (
		<div
			className='mt-5 first:mt-28 last:mb-5 flex items-center justify-center border-zinc-200 border-[1px] rounded-lg shadow w-[80%]'
			{...props}
		>
			<div className='w-full'>{children}</div>
		</div>
	);
};

export default PageSection;
