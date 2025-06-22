import NavBar from '../Design/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Design/Footer';
import { Toaster } from '../ui/toaster';

const MasterLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
			<Toaster />
		</>
	);
};

export default MasterLayout;
