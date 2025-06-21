import type { CartItem } from '@/Types/Types';
import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { NumberFormat } from '../NumberFormats';

interface CartItemProps {
    item: CartItem;
}

const ItemInCart: React.FC<CartItemProps> = ({ item }) => {
    const itemName = item.name.split(' ');
    return (
        <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-4">
                <img src={`/assets/cart/image-${item.slug}.jpg`} width={64} height={64} />
                <div className="flex flex-col items-start justify-center w-full gap-y-2">
                    <h6 className='uppercase text-body text-pureBlack'>{itemName[0]}</h6>
                    <p className='text-body text-pureBlack/50'><NumberFormat amount={item.price} currency="USD" /></p>
                </div>
            </div>
            <div className="flex flex-row items-center p-2 gap-x-4 bg-darkWhite w-fit">
                <button onClick={() => { }}>
                    <Minus className="w-4 h-4 cursor-pointer stroke-black hover:stroke-darkOrange" />
                </button>
                <div className="px-3 text-center ">
                    <div className="font-bold tracking-tighter text-md ">
                        {item.quantity}
                    </div>
                </div>
                <button
                    onClick={() => { }}
                >
                    <Plus className="w-4 h-4 cursor-pointer stroke-black hover:stroke-darkOrange" />
                </button>
            </div>
        </div>
    )
}

export default ItemInCart