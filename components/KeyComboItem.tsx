import { OPERATING_SYSTEM, Shortcut } from "@/types/types";
import { Card, CardContent, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

interface KeyComboItemProps extends Shortcut {
  operatingSystem: OPERATING_SYSTEM;
}

export default function KeyComboItem({
  attributes,
  operatingSystem,
}: KeyComboItemProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { windowsKeyCombo, shortText, macKeyCombo, description } = attributes;
  const keyCombo =
    operatingSystem === OPERATING_SYSTEM.MAC ? macKeyCombo : windowsKeyCombo;
  return (
    <div className="w-full">
      <Grid
        width={"100%"}
        container
        spacing={{
          xs: 0,
          sm: 1,
        }}
        justifyContent={"space-between"}
        alignItems={"baseline"}
        flexWrap={"nowrap"}
        sx={{
          mb: 1,
        }}
      >
        <Grid xs={7}>
          <Typography
            sx={{
              typography: {
                xs: "caption",
                sm: "body2",
              },
            }}
          >
            {shortText}
          </Typography>
        </Grid>
        <Grid xs={"auto"}>
          {keyCombo && (
            <Typography
              className="ml-1 shadow p-1 border whitespace-nowrap border-solid border-gray-600 rounded-md"
              sx={{
                typography: {
                  xs: "caption",
                },
              }}
            >
              {keyCombo}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
