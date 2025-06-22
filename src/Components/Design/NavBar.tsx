import { Link } from 'react-router';
import { AlignJustify, ShoppingCart } from 'lucide-react';
import { CartPopover } from './CartPopover';
import { useMediaQuery } from 'react-responsive';
import NavMenu from './NavMenu';
import { useShoppingCartContext } from '@/Context/useShoppingCartContext';
import { useState } from 'react';

const NavBar = () => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 769px)',
	});
	const isTablet = useMediaQuery({
		query: '(max-width: 768px) and (min-width: 376px)',
	});
	const isMobile = useMediaQuery({
		query: '(max-width: 375px)',
	});

	const { getCartItemCount } = useShoppingCartContext();
	const [openMenu, setOpenMenu] = useState(false);
	const [openCart, setOpenCart] = useState(false);
	return (
		<header className="relative z-50 bg-oilBlack">
			<section
				className={`viewport flex flex-row w-full justify-between py-[2.25rem] border-b-[0.0625rem] border-pureWhite/20 ${isTablet && `px-[2.48rem]`} ${isDesktop && `px-[2.48rem]`} ${isMobile && `px-[1.2rem] h-fit overflow-y-scroll`}`}
			>
				{isMobile && (
					<NavMenu
						openMenu={openMenu}
						setOpenMenu={() => setOpenMenu(!openMenu)}
					>
						<AlignJustify
							className="cursor-pointer stroke-pureWhite"
							onClick={() => setOpenMenu(!openMenu)}
						/>
					</NavMenu>
				)}
				<div className="flex flex-row gap-x-[2.26rem]">
					{isTablet && (
						<NavMenu
							openMenu={openMenu}
							setOpenMenu={() => setOpenMenu(!openMenu)}
						>
							<AlignJustify
								className="cursor-pointer stroke-pureWhite"
								onClick={() => setOpenMenu(!openMenu)}
							/>
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
				<div className="relative">
					<CartPopover openMenu={openCart} setOpenMenu={setOpenCart}>
						<ShoppingCart className="cursor-pointer stroke-pureWhite" />
					</CartPopover>

					{getCartItemCount() > 0 && (
						<span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold rounded-full -top-2 -right-2 bg-darkOrange text-pureWhite">
							{getCartItemCount()}
						</span>
					)}
				</div>
			</section>
		</header>
	);
};

export default NavBar;
