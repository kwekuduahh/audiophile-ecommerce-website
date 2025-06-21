import React from 'react';

export type NumberFormatProps = {
	currency: string;
	amount: number;
	locale?: string;
	style?: 'currency' | 'decimal' | 'percent' | 'unit';
};

export const NumberFormat: React.FC<NumberFormatProps> = ({
	amount,
	currency,
	locale = 'en-US',
	style = 'currency',
}) => {
	return (
		<>
			{new Intl.NumberFormat(locale, {
				style: style,
				currency: currency,
			}).format(amount || 0)}
		</>
	);
};
