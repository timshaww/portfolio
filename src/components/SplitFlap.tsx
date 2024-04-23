import { useState, useEffect } from 'react';
import SplitFlapDisplay from 'react-split-flap-display';
import { ALPHA } from './constants';

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
		<SplitFlapDisplay
			characterSet={ALPHA}
			value={splitFlapValue}
			minLength={1}
			characterWidth='80px'
			fontSize='30px'
			background='#007acc'
			textColor='#ffffff'
			borderWidth='0px'
			step={100}
			//borderRadius='10px'
			//margin='10px'
			//fontFamily='sans-serif'
		/>
	);
};

export default SplitFlap;
