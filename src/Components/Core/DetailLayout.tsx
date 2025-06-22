import { Outlet } from 'react-router';
import BestGear from '../Design/BestGear';
import ProductsSection from '../Design/ProductsSection';

const DetailLayout = () => {
	return (
		<>
			<Outlet />
			<ProductsSection />
			<BestGear />
		</>
	);
};

export default DetailLayout;
