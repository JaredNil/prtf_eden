import { Component, FC } from 'react';

class Footer extends Component<FC> {
	render() {
		return (
			<div className='footer__wrapper'>
				<div className="footer">
					<div className="btn">tg</div>
					<div className="btn">gh</div>
					<div className="btn">my face</div>
				</div>
			</div>
		);
	}
}

export default Footer;