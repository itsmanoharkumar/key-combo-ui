import Link from "@/components/atoms/Link";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import RegisterImage from "@/images/register.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
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
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { registerUser } = useRegisterUser();
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
      setPasswordErrorText("Passwords do not match");
      return;
    }
    const response = await registerUser({ username, email, password });
    console.log(response);
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

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
              label="Username"
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
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
              <FormHelperText>{passwordErrorText} </FormHelperText>
            </FormControl>
            <Button
              disabled={isButtonDisabled}
              variant="contained"
              color="primary"
              onClick={handleSignup}
            >
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
