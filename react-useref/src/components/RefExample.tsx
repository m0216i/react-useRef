import { useEffect, useRef } from 'react';
/**
 *	useRefとは...
 *	Refオブジェクトを生成するフック
 *
 * 	主な使い道
 *	・DOMへのアクセス..document.オブジェクトのようにDOMの値を参照することができる
 *	・値を保持する..書き換え可能な.currentプロパティの中に、値を保持する。
 *		→useStateは値の更新に再レンダリングが必要
 *			useRefは再レンダリング不要
 */
const RefExample = () => {
	const ref = useRef<HTMLDivElement>(null);
	//nullを初期値に入れた場合は、読み取り専用のプロパティ(DOM参照)

	useEffect(() => {
		console.log(ref.current?.clientWidth);
	}, []);

	return (
		<>
			<h1 ref={ref}>useRef</h1>
		</>
	);
};

export default RefExample;
