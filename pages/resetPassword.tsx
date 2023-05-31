import ForgotPasswordImage from "@/images/forgot-password.svg";
import { loginApi } from "@/service/authentication";
import { selectAuthState } from "@/store/authSlice";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [, setCookie] = useCookies(["authToken"]);
  const navigate = useRouter();
  const authState = useSelector(selectAuthState);
  if (authState) {
    navigate.replace("/");
  }

  useEffect(() => {
    setErrorMessage("");
    if (usernameOrEmail && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [usernameOrEmail, password]);

  async function handleLogin() {
    try {
      const response = await loginApi({
        identifier: usernameOrEmail,
        password,
      });
      setCookie("authToken", response.jwt, { path: "/" });
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  }

  return (
    <Container maxWidth={"xl"}>
      <Grid container my={10} justifyContent={"center"} spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Typography sx={{ mb: 1.5 }} variant="h3" component="div">
            Reset Password
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Email or Username"
              variant="outlined"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Reset Password
            </Button>
          </Stack>
        </Grid>
        <Grid
          sx={{
            display: { xs: "none", sm: "flex", md: "flex" },
          }}
          sm={6}
          p={2}
          justifyContent={"center"}
          display={"flex"}
        >
          <Image src={ForgotPasswordImage} alt="SignIn" className={"w-full"} />
        </Grid>
      </Grid>
    </Container>
  );
}
