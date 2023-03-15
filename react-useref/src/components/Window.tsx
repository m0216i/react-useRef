import { useEffect, useRef, useState } from 'react';
//import usePrevious from "../hooks/usePrevious";

/**
 * 前回の値を保持する
 * @returns
 */
const Window = () => {
	const [windowSize, setWindowSize] = useState<number>(window.outerWidth);
	const preSize = useRef<number>();
	//const previousSize = usePrevious(windowSize); カスタムフック

	//ウィンドウサイズを変更したときに、ウィンドウサイズを取得する
	useEffect(() => {
		const resize = () => {
			setWindowSize(window.outerWidth);
		};
		window.addEventListener("resize", resize);
		return () => window.removeEventListener("resize", resize);
	}, []);

	//preSizeが持つ、currentプロパティにwindowSizeを代入する
	useEffect(() => {
		preSize.current = windowSize;
	});

	return (
		<>
			<h1>{windowSize}</h1>
			<h1>{preSize.current}</h1>
		</>
	);
};

export default Window;
