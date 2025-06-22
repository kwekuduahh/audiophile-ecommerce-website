import { createBrowserRouter } from 'react-router';
import App from './App';
import DetailLayout from './Components/Core/DetailLayout';
import CategoryProductListing from './Pages/CategoryProductList';
import ProductDetail from './Pages/ProductDetail';
import MasterLayout from './Components/Core/MasterLayout';
import Checkout from './Pages/Checkout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MasterLayout />,
		children: [
			{
				path: '',
				element: <App />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
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
			}
		],
	}
]);
