import React, { useState } from "react";
import "./App.css";
import Head from "./components/head";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	// Now save data in array
	const [data, setData] = useState([]);

	const addData = () => {
		setData([
			...data, // spread operatot to jo har data save ho overwright na ho
			{
				name,
				email,
			},
		]);
		// setName or email ko empty rkha ha kio ky jb entry hojye to field khali ho khali krna na pary
		setName("");
		setEmail("");
	};

	const removeItem = (index) => {
		let arr = data;
		arr.splice(index, 1);
		setData([...arr]);
	};

	const handlePress = (event) => {
		if (event.key === "Enter") {
			addData();
		}
	};

	return (
		<div className="App">
			<Head />
			{/* form wala section */}
			<div className="form">
				<Stack spacing={2} direction="row">
					<TextField
						onKeyPress={(e) => handlePress(e)}
						onChange={(event) => setName(event.target.value)} //e for event
						value={name}
						id="outlined-basic"
						label="Name"
						variant="outlined"
					/>
					<TextField
						onKeyPress={(e) => handlePress(e)}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						id="outlined-basic"
						label="Email"
						variant="outlined"
					/>
					<Button onClick={addData} variant="contained">
						<AddIcon />
					</Button>
				</Stack>
			</div>
			{/* data  */}
			<div className="data">
				<div className="data-store">
					<h4>Name</h4>
					<h4>Email</h4>
					<h4>Remove</h4>
				</div>
				{data.map((element, index) => {
					return (
						<div key={index} className="data-store">
							<h4> {element.name} </h4>
							<h4> {element.email} </h4>
							<Button
								onClick={() => removeItem(index)}
								style={{ color: "white" }}
								// variant="outlined"
								startIcon={<DeleteIcon />}
							></Button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
