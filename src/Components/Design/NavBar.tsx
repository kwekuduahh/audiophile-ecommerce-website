import { Link } from 'react-router';
import { AlignJustify, ShoppingCart } from 'lucide-react';
import { CartPopover } from '@/Components/Design/CartPopover';
import { useMediaQuery } from 'react-responsive';
import NavMenu from './NavMenu';

const NavBar = () => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 800px)',
	});
	const isTablet = useMediaQuery({
		query: '(max-width: 799px) and (min-width: 376px)',
	});
	const isMobile = useMediaQuery({
		query: '(max-width: 375px)',
	});

	return (
		<header className="relative z-50 bg-oilBlack">
			<section
				className={`viewport flex flex-row w-full justify-between py-[2.25rem] border-b-[0.0625rem] border-pureWhite/20 ${isTablet && `px-[2.48rem]`} ${isDesktop && `px-[2.48rem]`} ${isMobile && `px-[1.2rem]`}`}
			>
				{isMobile && (
					<NavMenu>
						<AlignJustify className="cursor-pointer stroke-pureWhite" />
					</NavMenu>
				)}
				<div className="flex flex-row gap-x-[2.26rem]">
					{isTablet && (
						<NavMenu>
							<AlignJustify className="cursor-pointer stroke-pureWhite" />
						</NavMenu>
					)}
					<Link to="/">
						<img src="/audiophileLogo.svg" alt="Logo of Audiophile" />
					</Link>
				</div>
				{isDesktop && (
					<nav className=" flex flex-row gap-x-[2.12rem]">
						<Link
							to="/"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Home
						</Link>
						<Link
							to="/headphones"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Headphones
						</Link>
						<Link
							to="/speakers"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Speakers
						</Link>
						<Link
							to="/earphones"
							className="uppercase duration-300 text-subtitle text-pureWhite hover:text-darkOrange"
						>
							Earphones
						</Link>
					</nav>
				)}
				<div>
					<CartPopover Products={[]}>
						<ShoppingCart className="cursor-pointer stroke-pureWhite" />
					</CartPopover>
				</div>
			</section>
		</header>
	);
};

export default NavBar;
