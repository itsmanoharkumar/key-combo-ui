import Link from "@/components/atoms/Link";
import RegisterImage from "@/images/register.svg";
import { register } from "@/service/authentication";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
    if (email && password && confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, confirmPassword]);

  async function handleSignup() {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const response = await register({ username, email, password });
      console.log(response);
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  }

  return (
    <Container maxWidth={"xl"}>
      <Grid container my={10} justifyContent={"center"} spacing={2}>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Typography sx={{ mb: 1.5 }} variant="h3" component="div">
            Register
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Join KeyCombo and Boost Your Productivity
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Email"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSignup}>
              Register
            </Button>
          </Stack>
          <div className="flex justify-between pt-2 items-center">
            Already have account?
            <Link href={"/login"}>
              <Button variant="text" color="inherit">
                Login
              </Button>
            </Link>
          </div>
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
          <Image src={RegisterImage} alt="SignIn" className={"w-full"} />
        </Grid>
      </Grid>
    </Container>
  );
}
