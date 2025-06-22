import type { Display } from '@/Types/Types';
import { useMediaQuery } from 'react-responsive';

export const useDisplayType = (): Display => {
	const isDesktop = useMediaQuery({
		query: '(min-width: 769px)',
	});
	const isTablet = useMediaQuery({
		query: '(max-width: 768px) and (min-width: 376px)',
	});

	if (isDesktop) return 'desktop';

	if (isTablet) return 'tablet';

	return 'mobile';
};
