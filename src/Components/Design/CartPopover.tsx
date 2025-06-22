import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/Components/ui/popover';
import { NumberFormat } from '../NumberFormats';
import ItemInCart from './CartItem';
import { useShoppingCartContext } from '@/Context/useShoppingCartContext';
import { Button } from '../ui/Button';

interface CartProps {
	children: React.ReactNode;
	openMenu: boolean;
	setOpenMenu: (boolean: boolean) => void;
}

export const CartPopover: React.FC<CartProps> = ({
	children,
	openMenu,
	setOpenMenu,
}) => {
	const {
		shoppingCart,
		getCartItemCount,
		calculateTotalPrice,
		clearCart: handleRemoveAll,
	} = useShoppingCartContext();
	return (
		<Popover open={openMenu} onOpenChange={setOpenMenu}>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className="min-w-80 max-sm:w-[94vw]">
				<div className="grid gap-4">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row items-center uppercase outline-none gap-x-2 text-h6">
							<h4 className="leading-none ">Cart</h4>
							<span>({getCartItemCount()})</span>
						</div>
						<button
							className="underline text-body text-pureBlack/50"
							onClick={handleRemoveAll}
						>
							Remove all
						</button>
					</div>
					<div className="grid w-full grid-cols-1 gap-2">
						{getCartItemCount() !== 0 ? (
							shoppingCart?.map((Product) => (
								<ItemInCart
									key={Product.id}
									item={{
										id: Product.id,
										name: Product.name,
										slug: Product.slug,
										price: Product.price,
										quantity: Product.quantity,
									}}
								/>
							))
						) : (
							<p className="text-center text-body text-pureBlack/50">
								Your cart is empty
							</p>
						)}
					</div>
					<div className="flex flex-col w-full gap-y-5">
						<div className="flex flex-row justify-between">
							<p className="uppercase text-body text-pureBlack/50">Total</p>
							<p className="uppercase text-body text-pureBlack/50">
								<NumberFormat amount={calculateTotalPrice()} currency="USD" />
							</p>
						</div>
						{getCartItemCount() > 0 ? (
							<Button
								action="Checkout"
								link="/checkout"
								variant="Solid"
								onClick={() => setOpenMenu(!openMenu)}
								className="px-8 py-3 text-center uppercase duration-300 text-body text-pureWhite bg-darkOrange hover:bg-fadedOrange"
							/>
						) : (
							<button
								disabled
								className="px-8 py-3 uppercase duration-300 text-body text-pureWhite bg-fadedOrange hover:bg-fadedOrange"
							>
								Checkout
							</button>
						)}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};
