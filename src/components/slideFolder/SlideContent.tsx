import { FC } from 'react';
import { SlideContentPropsType } from '../../utils/types';



export const SlideContent: FC<SlideContentPropsType> = ({ slideIndex }) => {

	switch (slideIndex) {
		case 0: return <SlideContentIntro />
		case 1: return <SlideContentPets />
		case 2: return <SlideContentTechno />
		case 3: return <SlideContentAbout />
		default: return <SlideContentIntro />
	}

}
export default SlideContent;


const SlideContentIntro: FC = () => {

	return (
		<>
			<div className="slide__block">
				<div className="intro__title">
					<p>Welcome</p>
					<p>To</p>
				</div>
			</div>

			<div className="intro__block">
				<div className="slide__block"></div>
				<div className="slide__block"></div>
				<div className="slide__block"></div>
			</div>
		</ >
	);

}

const SlideContentPets: FC = () => {

	return (
		<>
			<div className="slide__block">

			</div>
		</ >
	);

}

const SlideContentTechno: FC = () => {

	return (
		<>
			<div className="slide__block">

			</div>
		</ >
	);

}


const SlideContentAbout: FC = () => {

	return (
		<>
			<div className="slide__block">

			</div>
		</ >
	);

}