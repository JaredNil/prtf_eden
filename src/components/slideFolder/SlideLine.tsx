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
		<section className='slide__line line'>

			<div className="line__container">

				<h2 className='line__main'>
					{`● ${dataSlideLine[slideIndex]} `}
				</h2>
				<div className='line__subtext-1'>
					{`${dataSlideLineSubtext[slideIndex]} `}
				</div>
				<div className='line__subtext-2'>
					{`${dataSlideLine[slideIndex]} `}
				</div>

			</div>

		</section>
	)
}
export default SlideLine;
