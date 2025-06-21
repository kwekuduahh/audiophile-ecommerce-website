import NavBar from '../Design/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Design/Footer';

const MasterLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default MasterLayout;
