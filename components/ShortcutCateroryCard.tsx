import KeyComboItem from "@/components/KeyComboItem";
import { selectOperatingSystem } from "@/store/appSlice";
import { Shortcut, ShortcutCategory } from "@/types/types";
import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

interface ShortcutCategoryCardProps extends ShortcutCategory {}

export default function ShortcutCategoryCard({
  id,
  attributes,
}: ShortcutCategoryCardProps) {
  const selectedOperatingSystem = useSelector(selectOperatingSystem);
  const { name, shortcuts } = attributes;
  const shortcutsList = shortcuts?.data;

  return (
    <Card
      variant="elevation"
      sx={{
        elevation: {
          xs: 0,
          md: 3,
        },
      }}
    >
      <CardContent>
        <Typography
          color={"primary"}
          sx={{
            typography: {
              xs: "h5",
              md: "h4",
            },
          }}
          gutterBottom
        >
          {name}
        </Typography>
        <Box>
          <div>
            {shortcutsList?.map((shortcutData: Shortcut) => {
              const { id, attributes } = shortcutData;
              return (
                <KeyComboItem
                  id={id}
                  attributes={attributes}
                  key={id}
                  operatingSystem={selectedOperatingSystem}
                />
              );
            })}
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
