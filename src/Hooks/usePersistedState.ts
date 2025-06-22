import { getItem, setItem } from '@/lib/localStorage.ts';
import React from 'react';

function usePersistedState<T>(key: string, initialValue: T) {
	const [value, setValue] = React.useState<T>(() => {
		const storedValue = getItem(key);
		return storedValue !== undefined ? storedValue : initialValue;
	});

	React.useEffect(() => {
		setItem(key, value);
	}, [key, value]);

	return [value, setValue] as const;
}

export default usePersistedState;
