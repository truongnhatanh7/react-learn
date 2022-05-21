import { useState, useEffect } from "react";

export default function Task(props) {
	const [content, setContent] = useState("");

	useEffect(() => {
		console.log(props);
	}, []);

	return (
		<>
			<div>
				<h1>{props.value}</h1>
			</div>
		</>
	);
}
