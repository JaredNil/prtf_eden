import { FC } from 'react';
import { SlideContentPropsType } from '../../utils/types';


const SlideLine: FC<SlideContentPropsType> = ({ slideIndex }) => {

	const dataSlideLine: string[] = [
		'INTRO',
		'MY PET PROJECT',
		'SKILLS',
		'ABOUT ME'
	]


	return (
		<section className='slide__line'>
			<div className="slide__line-container">
				<span>
					{dataSlideLine[slideIndex]}
				</span>
			</div>
		</section>
	)
}
export default SlideLine;
