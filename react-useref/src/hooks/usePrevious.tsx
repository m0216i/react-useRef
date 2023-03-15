import { useEffect, useRef } from 'react';

/**
 * usePrevious カスタムフック
 */
export default function usePrevious<T>(state: T): T | undefined {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = state;
	});

	return ref.current;
}