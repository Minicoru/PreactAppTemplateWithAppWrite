import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import Copyright from "./Copyright";
import { Client, Account, ID } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("B01Blackbriar");

const account = new Account(client);

export default function App() {
	return (
		<Container maxWidth='sm'>
			<Box sx={{ my: 4 }}>
				<Typography
					variant='h4'
					component='h1'
					gutterBottom>
					Material UI Preact example
				</Typography>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	);
}
