import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { Link } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { ICheckoutFormSchema, type ICheckoutForm } from '@/Forms/CheckoutForm';
import { RadioGroup, RadioGroupItem } from '@/Components/ui/radio-group';
import { useShoppingCartContext } from '@/Context/useShoppingCartContext';
import CheckoutItem from '@/Components/Design/CheckoutItem';
import { NumberFormat } from '@/Components/NumberFormats';
import CheckoutModal from '@/Components/Design/CheckoutModal';

const Checkout = () => {
	const form = useForm<ICheckoutForm>({
		resolver: zodResolver(ICheckoutFormSchema),
		defaultValues: {
			name: '',
			email: '',
			address: '',
			city: '',
			country: '',
			eMoneyNumber: '',
			eMoneyPin: '',
			zipcode: '',
			paymentOpt: 'delivery',
		},
	});

	const deliveryOpt = form.watch('paymentOpt') == 'eMoney';

	const { shoppingCart, calculateTotalPrice } = useShoppingCartContext();

	const vat = () => 0.2 * calculateTotalPrice();
	const shippingCost = 50;
	const grandTotal = calculateTotalPrice() + vat() + shippingCost;

	return (
		<div className="flex flex-col w-full px-4 bg-darkWhite">
			<header className="w-full bg-darkWhite pt-7">
				<div className="flex flex-row items-start mb-4 viewport">
					<Link to={`/`} className="text-pureBlack/50 hover:text-darkOrange">
						Go Back
					</Link>
				</div>
			</header>
			<Form {...form}>
				<form
					className="flex flex-col w-full mb-6 gap-y-8 min-[768px]:flex-row min-[768px]:gap-x-8 viewport"
					onSubmit={() => {
						console.log('Shopping Cart: ', shoppingCart);
					}}
				>
					<section className="w-full px-6 py-6 rounded-lg bg-pureWhite">
						<h4 className="mt-6 uppercase text-h4 text-pureBlack">Checkout</h4>
						<div className="flex flex-col items-start w-full mt-8 gap-y-4">
							<div className="flex flex-col items-center w-full gap-y-6">
								<p className="uppercase text-subtitle text-darkOrange col-span-1 [430px]:col-span-2 w-full">
									Billing Details
								</p>
								<div className="grid w-full max-[430px]:grid-cols-1 min-[430px]:grid-cols-2 mb-6 gap-x-4 gap-y-6">
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem className="min-[430px]:col-span-1 col-span-2">
												<FormLabel>Name</FormLabel>
												<FormControl>
													<Input
														placeholder="e.g Kofi"
														className="px-4 py-5 mt-2"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem className="min-[430px]:col-span-1 col-span-2">
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input
														className="px-4 py-5 mt-2"
														placeholder="e.g alexei@mail.com"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="phone"
										render={({ field }) => (
											<FormItem className="min-[430px]:col-span-1 col-span-2">
												<FormLabel>Phone Number</FormLabel>
												<FormControl>
													<Input
														className="px-4 py-5 mt-2"
														placeholder="e.g +1 202-555-0136"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<p className="uppercase text-subtitle text-darkOrange col-span-1 min-[430px]:col-span-2 mt-8">
										Shipping info
									</p>

									<FormField
										control={form.control}
										name="address"
										render={({ field }) => (
											<FormItem className="min-[430px]:col-span-1 col-span-2">
												<FormLabel>Your Address</FormLabel>
												<FormControl>
													<Input
														className="px-4 py-5 mt-2"
														placeholder="e.g 1137 Williams Avenue"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="zipcode"
										render={({ field }) => (
											<FormItem className="min-[430px]:col-span-1 col-span-2">
												<FormLabel>Zip Code</FormLabel>
												<FormControl>
													<Input
														className="px-4 py-5 mt-2"
														placeholder="e.g 10001"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="city"
										render={({ field }) => (
											<FormItem className="min-[430px]:col-span-1 col-span-2">
												<FormLabel>City</FormLabel>
												<FormControl>
													<Input
														className="px-4 py-5 mt-2"
														placeholder="e.g New York"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="country"
										render={({ field }) => (
											<FormItem className="min-[430px]:col-span-1 col-span-2">
												<FormLabel>Country</FormLabel>
												<FormControl>
													<Input
														className="px-4 py-5 mt-2"
														placeholder="e.g United States"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<p className="col-span-1 mt-8 uppercase text-subtitle text-darkOrange">
										{' '}
										Payment Details
									</p>

									<FormField
										control={form.control}
										name="paymentOpt"
										render={({ field }) => (
											<FormItem className="grid grid-cols-2 col-span-2 max-[430px]:grid-cols-1">
												<FormLabel className="col-span-1">
													Payment Option
												</FormLabel>
												<FormControl className="col-span-1">
													<RadioGroup
														defaultValue="delivery"
														onValueChange={field.onChange}
														value={field.value}
													>
														<div
															className={`flex items-center gap-3 border rounded-[8px] px-4 py-4 ${deliveryOpt && 'border-darkOrange'}`}
														>
															<FormControl>
																<RadioGroupItem value="eMoney" id="p1" />
															</FormControl>
															<FormLabel>e-Money</FormLabel>
														</div>
														<div
															className={`flex items-center gap-3 border rounded-[8px] px-4 py-4 ${!deliveryOpt && 'border-darkOrange'}`}
														>
															<FormControl>
																<RadioGroupItem value="delivery" id="p2" />
															</FormControl>
															<FormLabel>Cash on Delivery</FormLabel>
														</div>
													</RadioGroup>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									{deliveryOpt && (
										<div className="grid grid-cols-1 min-[430px]:grid-cols-2 min-[430px]:gap-x-4 gap-y-4 w-full">
											<FormField
												control={form.control}
												name="country"
												render={({ field }) => (
													<FormItem className="w-full col-span-1">
														<FormLabel>e-Money Number</FormLabel>
														<FormControl>
															<Input
																className="px-4 py-5 mt-2"
																placeholder="e.g 238521993"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="country"
												render={({ field }) => (
													<FormItem className="w-full col-span-1">
														<FormLabel>e-Money PIN</FormLabel>
														<FormControl>
															<Input
																className="px-4 py-5 mt-2"
																placeholder="e.g 6891"
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
									)}
								</div>
							</div>
						</div>
					</section>
					<section className="w-full px-6 py-6 rounded-lg bg-pureWhite min-[768px]:max-w-xs h-fit">
						<h4 className="mt-6 uppercase text-h4 text-pureBlack">Summary</h4>
						<div className="flex flex-col items-start w-full mt-8 gap-y-4">
							{shoppingCart.map((Product) => (
								<CheckoutItem key={Math.random()} item={Product} />
							))}
						</div>
						<div className="flex flex-col mt-8 gap-y-2">
							<div className="flex flex-row justify-between">
								<p className="font-normal uppercase text-subtitle text-pureBlack/70">
									Total
								</p>
								<p className="font-bold uppercase text-subtitle text-pureBlack">
									<NumberFormat amount={calculateTotalPrice()} currency="USD" />
								</p>
							</div>
							<div className="flex flex-row justify-between">
								<p className="font-normal uppercase text-subtitle text-pureBlack/70">
									Shipping
								</p>
								<p className="font-bold uppercase text-subtitle text-pureBlack">
									<NumberFormat amount={shippingCost} currency="USD" />
								</p>
							</div>
							<div className="flex flex-row justify-between">
								<p className="font-normal uppercase text-subtitle text-pureBlack/70">
									VAT (inlcuded)
								</p>
								<p className="font-bold uppercase text-subtitle text-pureBlack">
									<NumberFormat amount={vat()} currency="USD" />
								</p>
							</div>
							<div className="flex flex-col mt-6 gap-y-6">
								<div className="flex flex-row justify-between">
									<p className="font-normal uppercase text-subtitle text-pureBlack/70">
										Grand Total
									</p>
									<p className="font-bold uppercase text-subtitle text-darkOrange">
										<NumberFormat amount={grandTotal} currency="USD" />
									</p>
								</div>
								<CheckoutModal grandTotal={grandTotal}>
									<button className="px-8 py-3 uppercase duration-300 text-body text-pureWhite bg-darkOrange hover:bg-fadedOrange">
										Continue & Pay
									</button>
								</CheckoutModal>
							</div>
						</div>
					</section>
				</form>
			</Form>
		</div>
	);
};

export default Checkout;
