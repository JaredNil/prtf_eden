import { useState, FC } from 'react';
import Footer from './footer/Footer';
import SlideContent from './slideFolder/SlideContent';
import SlideLine from './slideFolder/SlideLine';




const Application: FC = () => {

	const initSlideState = [1, 0, 0, 0]
	const [slideState, setSlideState] = useState(initSlideState)

	const getActive = (i: number) => (slideState[i] == 0) ? '_disable' : '_enable'


	const handleSlide = (i: number) => {
		setSlideState(
			new Array(getSlideCount()).fill(0).map((sl, j) => { return (j === i) ? 1 : sl })
		)
	}
	const getSlideCount = () => {
		return document.body.getElementsByClassName('slide').length
	}


	const dataSlide: string[] = ['slide__intro', 'slide__pets', 'slide__techno', 'slide__about',]


	return (
		<>
			<div className="application">
				<div className="burger"></div>

				{
					dataSlide.map((slide, slideIndex: number) => {
						return (
							<div data-slide={slideIndex} key={slideIndex}
								className={`slide ${slide} ${getActive(slideIndex)}`}
								onClick={() => handleSlide(slideIndex)}
							>

								{(slideState[slideIndex]) // content
									? <SlideContent slideIndex={slideIndex} />
									: <SlideLine slideIndex={slideIndex} />}

							</div>
						)
					})
				}
			</div >

			{/* <Footer /> */}

		</>
	);
}

export default Application;
