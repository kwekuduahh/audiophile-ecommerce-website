import React from 'react';
import NavBar from '../Design/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Design/Footer';
import BestGear from '../Design/BestGear';
import ProductsSection from '../Design/ProductsSection';

interface LayoutProps {}

const DetailLayout: React.FC<LayoutProps> = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<ProductsSection />
			<BestGear />
			<Footer />
		</>
	);
};

export default DetailLayout;
