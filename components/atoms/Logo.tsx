import Link from "@/components/atoms/Link";
import { KeyboardAlt } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";

interface Props {}

export default function Logo({}: Props) {
  return (
    <div className={"flex justify-center items-center"}>
      <KeyboardAlt color="primary" sx={{ mr: 1 }} />
      <Link
        href={"/"}
        sx={{
          textDecoration: "none",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontFamily: "monospace",
            fontWeight: 900,
            letterSpacing: ".3rem",
            color: "primary.main",
            textDecoration: "none",
          }}
        >
          KEYCOMBO
        </Typography>
      </Link>
    </div>
  );
}
