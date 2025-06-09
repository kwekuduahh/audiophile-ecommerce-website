import { Link } from 'react-router'
import { AlignJustify, ShoppingCart } from 'lucide-react'
import { CartPopover } from '@/Components/Design/CartPopover'
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 768px)"
    })
    const isTablet = useMediaQuery({
        query: "max-width: 375px"
    })
    const isMobile = useMediaQuery({
        query: "max-width:375px"
    })

    return (
        <header className='bg-pureBlack '>
            <section className={`viewport flex flex-row w-full justify-between py-[2.25rem] border-b-[0.0625rem] border-pureWhite/20 ${isTablet && `px-[2.48rem]`}`}>
                {isMobile && <AlignJustify className='stroke-pureWhite' />}
                <div className="">
                    {
                        isTablet && <AlignJustify className='stroke-pureWhite' />
                    }
                    <Link to="/">
                        <img src="/audiophileLogo.svg" alt="Logo of Audiophile" />
                    </Link>
                </div>
                {isDesktop && <div className="nav flex flex-row gap-x-[2.12rem]">
                    <Link to="/headphones" className='subtitle text-pureWhite hover:text-darkOrange duration-300'>Home</Link>
                    <Link to="/headphones" className='subtitle text-pureWhite hover:text-darkOrange duration-300'>Headphones</Link>
                    <Link to="/headphones" className='subtitle text-pureWhite hover:text-darkOrange duration-300'>Speakers</Link>
                    <Link to="/headphones" className='subtitle text-pureWhite hover:text-darkOrange duration-300'>Earphones</Link>
                </div>}
                <div className="">
                    <CartPopover>
                        <ShoppingCart className='stroke-pureWhite' />
                    </CartPopover>
                </div>
            </section>
        </header>
    )
}

export default NavBar