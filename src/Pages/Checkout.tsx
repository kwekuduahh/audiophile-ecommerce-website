import { Link } from 'react-router';

const Checkout = () => {
	return (
		<>
			<header className="w-full px-8 bg-pureWhite pt-7">
				<div className="flex flex-row items-start viewport">
					<Link to={`/`} className="text-pureBlack/50">
						Go Back
					</Link>
				</div>
			</header>
		</>
	);
};

export default Checkout;
