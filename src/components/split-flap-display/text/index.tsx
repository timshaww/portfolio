import clsx from 'clsx';
import * as React from 'react';
import wrapper from './textStyles.module.scss';

interface Props extends React.HTMLProps<HTMLDivElement> {
	color: string;
	position: string;
	children: React.ReactNode;
}

export default function Text(props: Props) {
	const { children, className, color, position, ...rest } = props;
	return (
		<div
			{...rest}
			className={clsx(wrapper, className)}
			data-position={position}
			style={{ '--color': color } as React.CSSProperties}
		>
			{children}
		</div>
	);
}
