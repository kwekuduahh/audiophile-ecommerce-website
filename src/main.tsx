import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router.tsx';
import { ShoppingCartProvider } from './Context/useShoppingCartContext.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ShoppingCartProvider>
			<RouterProvider router={router} />
		</ShoppingCartProvider>
	</StrictMode>
);
