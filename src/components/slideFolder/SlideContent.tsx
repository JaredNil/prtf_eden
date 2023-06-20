import { FC } from 'react';
import { SlideContentPropsType } from '../../utils/types';



export const SlideContent: FC<SlideContentPropsType> = ({ slideIndex }) => {

	switch (slideIndex) {
		case 0: return <SlideContentIntro />
		case 1: return <SlideContentPets />
		case 2: return <SlideContentSkills />
		case 3: return <SlideContentAbout />
		default: return <SlideContentIntro />
	}

}
export default SlideContent;


const SlideContentIntro: FC = () => {

	return (
		<>
			<section className="slide__block">
				<div className="intro__title">
					<div className='intro__title-top'>Welcome to <br /> Andrey </div>
					<div className='intro__title-bottom'>Bozhenkov	<br />Portfolio</div>
				</div>
			</section>

			<section className="intro__block">
				<div className="slide__block"></div>
				<div className="slide__block"></div>
				<div className="slide__block"></div>
			</section>
		</ >
	);

}

const SlideContentPets: FC = () => {

	return (
		<>
			<div className="pets">

				<div className="pets__sidebar">
					<div className="pets__sidebar-title slide__block">
						<span>My pet project:</span>
					</div>
					<div className="pets__sidebar-bar">

						<div className="pets__item slide__block _active">
							<div className="item__label"><span>●</span> label</div>
							<div className="item__text">
								<div className="item__text-title">Project №1</div>
								<div className="item__text-skill">TS, Redux</div>
							</div>
							<div className="item__link">
								<a href="#" className='item__link-btn'>GH</a>
							</div>
						</div>

						<div className="pets__item slide__block">
							<div className="item__label"><span>●</span> label</div>
							<div className="item__text">
								<div className="item__text-title">Project №2</div>
								<div className="item__text-skill">TS, Redux</div>
							</div>
							<div className="item__link">
								<a href="#" className='item__link-btn'>GH</a>
							</div>
						</div>

						<div className="pets__item slide__block">
							<div className="item__label"><span>●</span> label</div>
							<div className="item__text">
								<div className="item__text-title">Project №3</div>
								<div className="item__text-skill">TS, Redux</div>
							</div>
							<div className="item__link">
								<a href="#" className='item__link-btn'>GH</a>
							</div>
						</div>

						<div className="pets__item slide__block">
							<div className="item__label"><span>●</span> label</div>
							<div className="item__text">
								<div className="item__text-title">Project №4</div>
								<div className="item__text-skill">TS, Redux</div>
							</div>
							<div className="item__link">
								<a href="#" className='item__link-btn'>GH</a>
							</div>
						</div>

					</div>
				</div>

				<div className="pets__content slide__block">

				</div>

			</div>
		</ >
	);

}

const SlideContentSkills: FC = () => {

	return (
		<>
			<div className="slide__block">

			</div>
		</ >
	);

}


const SlideContentAbout: FC = () => {

	return (

		<div className="about">

			<div className="about__title slide__block">	<h2>About me</h2>	</div>

			<div className="about__block">
				<div className="slide__block">
				</div>
				<div className="about__inform slide__block">
					<div className="about__inform-container">
						<div className="about__inform-title">Меня зовут Андрей Боженков</div>
						<div className="about__inform-text">
							<p>Я front-end TS/JS разработчик </p>
							<p>I love creating and expressing new ideas, through web, app design, typography, and more.</p>
							<p>I have an experience in interactive design, illustration, and more.</p>
							<p>I love to cook, going to the beach, animals, and fries. I’m looking for my next big challenge in UX/UI and branding  :)</p>
							<p>Check out some of <a href="#">my projects</a>.</p>
						</div>
					</div>
				</div>
			</div>

		</div>

	);

}