import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Fields = ({ name, email, index, data }) => {
	console.log(data);
	return (
		<div className="data-store">
			<h4> {name} </h4>
			<h4> {email} </h4>
			<Button
				style={{ color: "white" }}
				// variant="outlined"
				startIcon={<DeleteIcon />}
			></Button>
		</div>
	);
};

export default Fields;
