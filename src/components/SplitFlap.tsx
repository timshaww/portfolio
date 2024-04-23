import { useState, useEffect } from 'react';
import SplitFlapDisplay from './split-flap-display/split-flaps';
import { ALPHA } from './split-flap-display/constants';

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
		/>
	);
};

export default SplitFlap;
