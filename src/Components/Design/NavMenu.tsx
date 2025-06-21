import { Button } from '../ui/Button';
import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet';
import ArrowRight from '/assets/shared/desktop/icon-arrow-right.svg';

interface NavMenuProps {
	children?: React.ReactNode;
}

const NavMenu: React.FC<NavMenuProps> = ({ children }) => {
	const Products = [
		{
			name: 'headphones',
			desktopimgSrc:
				'/assets/shared/desktop/image-category-thumbnail-headphones.png',
			link: '/headphones',
		},
		{
			name: 'speakers',
			desktopimgSrc:
				'/assets/shared/desktop/image-category-thumbnail-speakers.png',
			link: '/speakers',
		},
		{
			name: 'earphones',
			desktopimgSrc:
				'/assets/shared/desktop/image-category-thumbnail-earphones.png',
			link: '/earphones',
		},
	];
	return (
		<Sheet>
			<SheetTrigger>{children}</SheetTrigger>
			<SheetContent
				side={'top'}
				style={{ width: '98vw' }}
				className="p-4 mt-24 h-fit bg-pureWhite rounded-br-2xl rounded-bl-2xl"
			>
				<section className="bg-pureWhite">
					<div className="flex flex-col items-center justify-between w-full gap-24 mt-24 min-[500px]:gap-3 min-[500px]:flex-row">
						{Products.map((Product) => (
							<div
								key={Math.random()}
								className="bg-darkWhite rounded-[8px] w-full flex flex-col items-center gap-y-[24px] justify-between py-4 min-h-[165px] h-full"
							>
								<img src={Product.desktopimgSrc} className="w-48 -mt-[80px]" />
								<div className="flex flex-col gap-y-[17px] items-center text-center">
									<h6 className="uppercase text-h6">{Product.name}</h6>
									<Button
										variant="Ghost"
										link={Product.link}
										className="flex flex-row items-center gap-x-2"
										action="shop"
									>
										<img
											src={ArrowRight}
											alt="icon of an arrow pointing right"
										/>{' '}
									</Button>
								</div>
							</div>
						))}
					</div>
				</section>
			</SheetContent>
		</Sheet>
	);
};

export default NavMenu;
