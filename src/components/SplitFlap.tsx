import { useState, useEffect } from 'react';
import SplitFlapDisplay from 'react-split-flap-display';
import { ALPHA } from './constants';
import styled from 'styled-components';

const SplitFlapDisplayStyled = styled(SplitFlapDisplay)`
	@media (max-width: 600px) {
		--fontSize: 15px;
		--characterWidth: 30px;
	}

	@media (min-width: 601px) and (max-width: 900px) {
		--fontSize: 30px;
		--characterWidth: 60px;
	}

	@media (min-width: 901px) {
		--fontSize: 30px;
		--characterWidth: 80px;
	}
`;

const SplitFlap = () => {
	const [splitFlapValue, setSplitFlapValue] = useState('TIME TO MEET');

	useEffect(() => {
		const interval = setInterval(() => {
			setSplitFlapValue((prevValue) =>
				prevValue === 'TIME TO MEET' ? 'TIMOTHY SHAW' : 'TIME TO MEET'
			);
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	return (
		<SplitFlapDisplayStyled
			characterSet={ALPHA}
			value={splitFlapValue}
			minLength={1}
			characterWidth='var(--characterWidth)'
			fontSize='var(--fontSize)'
			background='#ffffff'
			textColor='#000000'
			borderWidth='0px'
			step={100}
			//borderRadius='10px'
			//margin='10px'
			//fontFamily='sans-serif'
		/>
	);
};

export default SplitFlap;
