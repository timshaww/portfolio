import { useCallback, useEffect, useRef, useState } from 'react';

const defaultProps = {
	characterSet: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
	minLength: 5,
	step: 200,
	value: '94609',
};

const escapeValue = (value: string, characterSet: string[]) =>
	value
		.split('')
		.map((char) => (characterSet.includes(char) ? char : characterSet[0]))
		.join('');

export default function SplitFlapDisplay({
	characterSet = defaultProps.characterSet,
	minLength = defaultProps.minLength,
	step = defaultProps.step,
	value = defaultProps.value,
}) {
	const [displayValue, setDisplayValue] = useState(value);
	const updateTimer = useRef<NodeJS.Timeout | null>(null);

	const updateValue = useCallback(() => {
		const escapedValue = escapeValue(value, characterSet);
		const currentChars = displayValue.split('');
		const finalChars = escapedValue.split('');

		const nextValue = finalChars
			.map((_char, idx) => {
				const currentChar = currentChars[idx] || characterSet[0]; // default to first character if undefined
				const charIdx = characterSet.indexOf(currentChar);
				return characterSet[(charIdx + 1) % characterSet.length];
			})
			.join('');

		if (nextValue !== escapedValue) {
			setDisplayValue(nextValue);
			updateTimer.current = setTimeout(updateValue, step);
		} else {
			setDisplayValue(escapedValue); // Final update to ensure value is correct
		}
	}, [characterSet, step, value, displayValue]);

	useEffect(() => {
		updateValue();
		return () => {
			if (updateTimer.current) {
				clearTimeout(updateTimer.current);
			}
		};
	}, [updateValue]);

	// Visual padding for display
	const paddedValue = displayValue.padStart(minLength, characterSet[0]);

	return <div>{paddedValue}</div>;
}
