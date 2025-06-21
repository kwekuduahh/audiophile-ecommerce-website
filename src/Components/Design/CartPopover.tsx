import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/Components/ui/popover';
import { NumberFormat } from '../NumberFormats';
import ItemInCart from './CartItem';
import type { CartItem } from '@/Types/Types';

interface CartProps {
	children: React.ReactNode;
	Products: CartItem[];
}

export const CartPopover: React.FC<CartProps> = ({ children, Products }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent className="min-w-80 max-sm:w-[94vw]">
				<div className="grid gap-4">
					<div className="flex flex-row justify-between">
						<div className="flex flex-row items-center uppercase outline-none gap-x-2 text-h6">
							<h4 className="leading-none ">Cart</h4>
							<span>({0})</span>
						</div>
						<button className="underline text-body text-pureBlack/50">
							Remove all
						</button>
					</div>
					<div className="grid w-full grid-cols-1 gap-2">
						{0 ? (
							Products.map((Product) => (
								<ItemInCart
									item={{
										id: Product.id,
										name: Product.name,
										slug: Product.slug,
										price: Product.price,
										quantity: 1,
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
								<NumberFormat amount={5396} currency="USD" />
							</p>
						</div>
						<button
							className="px-8 py-3 uppercase duration-300 text-body text-pureWhite bg-darkOrange hover:bg-fadedOrange"
							disabled={true}
						>
							Checkout
						</button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
};
