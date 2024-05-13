import { FC, PropsWithChildren } from 'react';

interface AboutHeaderProps {
	children: React.ReactNode;
}

const AboutHeader: FC<PropsWithChildren<AboutHeaderProps>> = ({ children }) => {
	return (
		<div className='flex justify-center p-4 text-4xl border-inherit border-b-[1px] last:border-b-0'>
			{children}
		</div>
	);
};

export default AboutHeader;
