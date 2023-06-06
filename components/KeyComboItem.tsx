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
      {!isMobile && (
        <Grid
          width={"100%"}
          container
          spacing={2}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          sx={{
            mb: 2,
          }}
        >
          <Grid xs={12} sm={4}>
            {keyCombo && (
              <Button
                variant="outlined"
                size="large"
                sx={{
                  textTransform: "none",
                }}
              >
                <Typography variant="body1" fontWeight={700}>
                  {keyCombo}
                </Typography>
              </Button>
            )}
          </Grid>
          <Grid xs={12} sm={8}>
            <Typography variant="h6">{shortText}</Typography>
          </Grid>
        </Grid>
      )}
      {isMobile && (
        <Card
          variant="elevation"
          sx={{
            my: 1,
          }}
        >
          <CardContent>
            <Grid
              width={"100%"}
              container
              spacing={1}
              justifyContent={"space-between"}
              flexWrap={"wrap"}
            >
              <Grid xs={12} sm={7}>
                <ListItemText primary={shortText} secondary={description} />
              </Grid>
              <Grid xs={12} sm={5}>
                {keyCombo && (
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      textTransform: "none",
                    }}
                  >
                    <Typography fontWeight={600}>{keyCombo}</Typography>
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
