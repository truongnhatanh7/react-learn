import { useState, useEffect, useRef } from "react";
import Task from "./Task";

export default function List(props) {
	const { inp, setInp } = useState("");
	const [tasks, setTasks] = useState([]);
	const inpRef = useRef();
	const btnRef = useRef();

	useEffect(() => {
		setTasks([...tasks, 1, 2, 3]);
	}, []);

	function handleBtnClick() {
		setTasks([...tasks, inpRef.current.value]);
		inpRef.current.value = "";
		inpRef.current.focus();
	}

	function handleInput() {}

	return (
		<div>
			{tasks.map((task, index) => {
				return <Task key={index} value={task} />;
			})}
			<input ref={inpRef} onChange={handleInput} type="text" />
			<button ref={btnRef} onClick={handleBtnClick}>
				Add
			</button>
		</div>
	);
}
