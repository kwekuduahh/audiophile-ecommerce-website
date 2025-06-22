import React from 'react';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogOverlay,
	DialogTitle,
	DialogTrigger,
} from '@/Components/ui/dialog';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useShoppingCartContext } from '@/Context/useShoppingCartContext';
import CheckoutItem from './CheckoutItem';
import { NumberFormat } from '../NumberFormats';

interface ModalProps {
	children: React.ReactNode;
	grandTotal: number;
}

const CheckoutModal: React.FC<ModalProps> = ({ children, grandTotal }) => {
	const navigate = useNavigate();

	const { shoppingCart, getCartItemCount } = useShoppingCartContext();
	const einsProduct = shoppingCart[0];
	const remainingProducts = getCartItemCount() - 1;
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="bg-pureWhite">
				<DialogTitle>
					<div className="flex flex-col w-full gap-y-8">
						<div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-darkOrange">
							<Check className="w-8 h-8 stroke-pureWhite" />
						</div>
						<h4 className="uppercase text-h4 text-pureBlack max-w-64">
							Thank you for your order
						</h4>
						<p className="w-full text-body text-pureBlack/70">
							You will receive an email confirmation shortly.
						</p>
					</div>
				</DialogTitle>
				<div className="flex flex-row max-[430px]:flex max-[430px]:flex-col items-center w-full my-10 overflow-hidden rounded-lg">
					<div className="flex flex-col w-full h-full p-6 bg-darkWhite gap-y-3">
						<CheckoutItem item={einsProduct} />
						<div className="h-[1px] bg-pureBlack/20"></div>
						<p className="text-center text-[12px] font-bold text-pureBlack/50">
							{' '}
							and {remainingProducts} other item(s)
						</p>
					</div>
					<div className="flex flex-col items-start justify-center w-full h-full gap-2 p-6 bg-pureBlack">
						<p className="uppercase text-h6 text-darkWhite/50">Grand Total</p>
						<p className="uppercase text-h6 text-darkWhite">
							<NumberFormat amount={grandTotal} currency="USD" />
						</p>
					</div>
				</div>
				<DialogClose
					className="px-8 py-3 uppercase duration-300 text-body text-pureWhite bg-darkOrange hover:bg-fadedOrange"
					onClick={() => navigate('/')}
				>
					Back to Home
				</DialogClose>
			</DialogContent>
			<DialogOverlay className="w-full h-screen bg-pureBlack/40" />
		</Dialog>
	);
};

export default CheckoutModal;
