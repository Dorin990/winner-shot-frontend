import { useAuth0 } from "@auth0/auth0-react";
import {
	createStyles,
	Grid,
	IconButton,
	InputAdornment,
	makeStyles,
	Divider,
	TextField,
	Theme,
	Button,
} from "@material-ui/core";
import { useState } from "react";
import { MailOutline, Visibility, VisibilityOff } from "@material-ui/icons";
import styled from "styled-components";

const WhiteBorderTextField = styled(TextField)`
	& label.Mui-focused {
		color: white;
	}
	& .MuiOutlinedInput-root {
		&.Mui-focused fieldset {
			border-color: white;
		}
	}
`;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		title: {
			color: "cornsilk",
			textAlign: "center",
		},
		gridContainer: {
			backgroundColor: "burlywood",
		},
		gridItem: {
			textAlign: "center",
		},
		button: {
			backgroundColor: "cornsilk",
			color: "burlywood",
		},
	}),
);

export default function Home() {
	const { loginWithRedirect } = useAuth0();
	const [allValues, setAllValues] = useState({
		email: "",
		password: "",
		showPassword: false,
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAllValues({ ...allValues, [event.target.name]: event.target.value });
	};

	const handleClickPasswordVisability = () => {
		setAllValues({ ...allValues, showPassword: !allValues.showPassword });
	};

	const classes = useStyles();

	return (
		<>
			<Grid
				alignItems="center"
				justify="center"
				xs={8}
				container
				spacing={3}
				className={classes.gridContainer}
			>
				<Grid item xs={12}>
					<h1 className={classes.title}> הרשמה!</h1>
					<Divider />
				</Grid>
				<Grid item className={classes.gridItem}>
					<WhiteBorderTextField
						id="email"
						name="email"
						label="אי-מייל"
						type="text"
						variant="outlined"
						onChange={handleChange}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<MailOutline />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={8} className={classes.gridItem}>
					<WhiteBorderTextField
						id="password"
						name="password"
						label="סיסמא"
						type={allValues.showPassword ? "text" : "password"}
						placeholder="סיסמא"
						variant="outlined"
						onChange={handleChange}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleClickPasswordVisability}>
										{allValues.showPassword ? (
											<Visibility />
										) : (
											<VisibilityOff />
										)}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item xs={8} className={classes.gridItem}>
					<Button
						variant="contained"
						className={classes.button}
						onClick={() => loginWithRedirect()}
					>
						לכניסה לחצו כאן
					</Button>
				</Grid>
			</Grid>
		</>
	);
}
