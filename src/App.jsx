import './App.css';
import { useState } from "react";

export default function App() {

	const [data, setData] = useState("");

	return (
		<>
			<input
				type="text"
				placeholder="Enter Text"
				value={data}
				onChange={(e) => setData(e.target.value)}
			/>
			<p>{data}</p>
		</>
	)
}
