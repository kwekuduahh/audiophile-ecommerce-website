import { createBrowserRouter } from 'react-router';
import App from './App';
import DetailLayout from './Components/Core/DetailLayout';
import CategoryProductListing from './Pages/CategoryProductList';
import ProductDetail from './Pages/ProductDetail';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: ':category/',
		element: <DetailLayout />,
		children: [
			{
				path: '',
				element: <CategoryProductListing />,
			},
			{
				path: ':slug',
				element: <ProductDetail />,
			},
		],
	},
]);
