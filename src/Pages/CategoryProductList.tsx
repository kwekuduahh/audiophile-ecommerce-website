import React from 'react';
import { useParams } from 'react-router';
import data from '@/json/data.json';
import { Button } from '@/Components/ui/Button';
import { useDisplayType } from '@/Hooks/useDisplay';

const CategoryProductListing: React.FC = () => {
	const { category } = useParams();

	const products = data.filter((product) => product.category === category);

	const display = useDisplayType();

	return (
		<>
			<header className="w-full bg-pureBlack">
				<div className="viewport">
					<div className="w-full py-24 mx-auto text-center">
						<h1 className="uppercase text-h2 text-pureWhite">{category}</h1>
					</div>
				</div>
			</header>
			<section className="flex flex-col w-full py-12 bg-pureWhite lg:gap-y-24">
				{products.map((product, index) => (
					<div
						key={product.id}
						className={`flex ${index % 2 === 0 ? `lg:flex-row` : `lg:flex-row-reverse`} md:flex-row p-6 min-[769px]:px-12 flex-col items-center justify-between w-full viewport gap-y-8 pb-16`}
					>
						<div className="lg:w-[33.75rem] min-[769px]:max-w-[680px] min-[768px]:w-[80%] w-[90%]  bg-darkWhite rounded-[8px] overflow-hidden">
							<img src={product.categoryImage[display]} />
						</div>
						<div
							className={`flex flex-col gap-y-[1rem] mx-auto lg:mx-0 min-[769px]:p-8 max-w-[398px] text-center min-[769px]:text-start items-center min-[769px]:items-start md:items-center`}
						>
							{index === 0 && (
								<p className="items-center w-full text-center uppercase text-overline text-darkOrange md:text-center min-[769px]:text-start min-[769px]:items-start">
									New Product
								</p>
							)}
							<div className="flex flex-col gap-y-[1.5rem]">
								<h1 className="text-center uppercase text-pureBlack text-h2 md:text-center min-[769px]:text-start">
									{product.name}
								</h1>
								<p className="text-center text-pureBlack/50 text-body md:text-center min-[769px]:text-start">
									{product.description}
								</p>
							</div>
							<Button
								action="See Product"
								link={`/${category}/${product.slug}`}
								variant="Solid"
								className="mt-12 text-subtitle text-pureWhite"
							></Button>
						</div>
					</div>
				))}
			</section>
		</>
	);
};

export default CategoryProductListing;
