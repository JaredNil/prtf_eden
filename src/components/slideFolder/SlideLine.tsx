import { FC } from 'react';
import { SlideContentPropsType } from '../../utils/types';


const SlideLine: FC<SlideContentPropsType> = ({ slideIndex }) => {

	const dataSlideLine: string[] = [
		'INTRO',
		'MY PET PROJECT',
		'SKILLS',
		'ABOUT ME'
	]
	const dataSlideLineSubtext: string[] = [
		'INTRO',
		'MY PET PROJECT',
		'SKILLS',
		'ABOUT ME'
	]


	return (
		<section className='slide__line'>
			<div className="slide__line-container">
				<h2>
					{`● ${dataSlideLine[slideIndex]} `}

				</h2>
				<div className='slide__line-subtext-1'>
					{`${dataSlideLineSubtext[slideIndex]} `}
				</div>
				<div className='slide__line-subtext-2'>
					{`${dataSlideLine[slideIndex]} `}
				</div>
			</div>

		</section>
	)
}
export default SlideLine;
