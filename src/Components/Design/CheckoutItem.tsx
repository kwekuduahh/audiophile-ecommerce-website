import type { CartItem } from '@/Types/Types';
import React from 'react';
import { NumberFormat } from '../NumberFormats';
import { useShoppingCartContext } from '@/Context/useShoppingCartContext';

interface CartItemProps {
    item: CartItem;
}

const CheckoutItem: React.FC<CartItemProps> = ({ item }) => {
    const itemName = item.name.split(' ');
    const { shoppingCart } = useShoppingCartContext();
    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-4">
                <img
                    src={`/assets/cart/image-${item.slug}.jpg`}
                    width={64}
                    height={64}
                />
                <div className="flex flex-col items-start justify-center w-full gap-y-2">
                    <h6 className="uppercase text-body text-pureBlack">{itemName[0]}</h6>
                    <p className="text-body text-pureBlack/50">
                        <NumberFormat amount={item.price * item.quantity} currency="USD" />
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center p-2 gap-x-4 w-fit">
                <div className="font-bold tracking-tighter text-md text-pureBlack/50">
                    {`x`}{shoppingCart.find(cartItem => cartItem.id === item.id)?.quantity}
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;
