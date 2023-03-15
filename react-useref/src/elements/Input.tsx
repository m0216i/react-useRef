import React, { forwardRef } from 'react';

interface InputProps {
	value: string;
}

/**
 * 	forwardRefを使うことで、refの受け渡しをすることができる
 *	受け渡し方→（{props},ref）
 *
 *	型の指定
 * 	forwardRef(({props}:{props:string},ref)=>)
 *
 * 	渡ってくるpropsが多い場合は、interfaceにまとめて
 *  forwardRef<refの型,propsのinterface名> で型指定できる
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({ value }, ref) => {
	const inputRef = ref as React.MutableRefObject<HTMLInputElement>;

	//クリックでtext削除
	//inputにフォーカスする
	const onCllick = () => {
		inputRef.current.value = "";
		inputRef.current.focus();
		//console.log(inputRef.current.getBoundingClientRect().y);
	};
	return (
		<div>
			<input ref={inputRef} defaultValue={value} />
			<button onClick={onCllick}>削除</button>
		</div>
	);
});

export default Input;
