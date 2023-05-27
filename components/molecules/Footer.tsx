import { CopyrightOutlined, WindowRounded } from "@mui/icons-material";
import AndroidSharpIcon from "@mui/icons-material/AndroidSharp";
import AppleIcon from "@mui/icons-material/Apple";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {}

const platformList = [
  {
    name: "Windows",
    icon: <WindowRounded />,
  },
  {
    name: "Mac",
    icon: <AppleIcon />,
  },
  {
    name: "iOS",
    icon: <AppleIcon />,
  },
  {
    name: "Android",
    icon: <AndroidSharpIcon />,
  },
];

export default function Footer({}: Props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth={"xl"}>
        <Stack>
          <Grid
            container
            justifyContent={{
              xs: "center",
              md: "space-between",
            }}
            sx={{
              my: 4,
            }}
            spacing={2}
          >
            <Grid sm={6}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Join our newsletter to keep up to date with us!
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid xs={12} sm="auto">
                <TextField
                  sx={{
                    width: {
                      xs: "100%",
                      md: "auto",
                    },
                  }}
                  type={"email"}
                  size="small"
                  label={"Enter your email"}
                />
              </Grid>
              <Grid xs={12} sm="auto">
                <Button
                  sx={{
                    width: {
                      xs: "100%",
                      md: "auto",
                    },
                  }}
                  variant="contained"
                  color="primary"
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Box>
            <Divider />
          </Box>
          <Box
            sx={{
              mt: 4,
              mb: 2,
            }}
          >
            <Grid container justifyContent={"space-between"} spacing={2}>
              <Grid container alignItems={"center"}>
                <CopyrightOutlined spacing={2} />
                <Typography sx={{ ml: 1 }} variant="body2">
                  2023 Keycombo Inc.
                </Typography>
              </Grid>
              <Grid container alignSelf={"end"} spacing={2}>
                <Grid>
                  <Button size="small" variant="text">
                    Terms of Service
                  </Button>
                </Grid>
                <Grid>
                  <Button size="small" variant="text">
                    Privacy Policy
                  </Button>
                </Grid>
                <Grid>
                  <Button size="small" variant="text">
                    Cookies
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              mb: 4,
            }}
          >
            <Grid container justifyContent={"space-between"} spacing={2}>
              <Grid container alignItems={"center"}>
                <CheckCircleIcon spacing={2} />
                <Typography sx={{ ml: 1 }} variant="body2">
                  Available on all platforms
                </Typography>
              </Grid>
              <Grid container alignSelf={"end"} spacing={2}>
                {platformList.map((platform) => {
                  return (
                    <Grid key={platform.name}>
                      <Button
                        size="small"
                        variant="outlined"
                        startIcon={platform.icon}
                      >
                        {platform.name}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
      <Box
        sx={{
          height: "8px",
          backgroundColor: "primary.main",
        }}
      ></Box>
    </Box>
  );
}
