import { useEffect, useState } from 'react';
import head0 from '../assets/head/Head0.jpg';
import head1 from '../assets/head/Head1.jpg';
import head2 from '../assets/head/Head2.jpg';
import head3 from '../assets/head/Head3.jpg';
import head4 from '../assets/head/Head4.jpg';
import head5 from '../assets/head/Head5.jpg';
import head6 from '../assets/head/Head6.jpg';
import head7 from '../assets/head/Head7.jpg';

const Head = () => {
	const [index, setIndex] = useState(0);

	const images = [head0, head1, head2, head3, head4, head5, head6, head7];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % images.length);
		}, 200);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='flex justify-center flex-col'>
			<img
				src={images[index]}
				alt={'Head ${index}'}
				style={{ width: '100%', height: 'auto' }}
			/>
		</div>
	);
};

export default Head;
