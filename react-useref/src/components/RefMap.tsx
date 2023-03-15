import Input from "../elements/Input";
import { RefObject } from 'react';
import { createRef, useRef } from 'react';

/**
 * refを配列で回す
 * @returns
 */
const RefMap = () => {
	const buttons = ['buttonA', 'buttonB', 'buttonC'];
	//空配列のuseRefを生成
	const buttonRefs = useRef<RefObject<HTMLInputElement>[]>([]);

	//mapで繰り返す分、useRef を生成
	buttons.forEach((_, index) => {
		buttonRefs.current[index] = createRef<HTMLInputElement>();
	});


	return (
		<div>
			{buttons.map((item, index) => {
				return (
					<Input value={item} ref={buttonRefs.current[index]} />
				);
			})}
		</div>
	);
};

export default RefMap;