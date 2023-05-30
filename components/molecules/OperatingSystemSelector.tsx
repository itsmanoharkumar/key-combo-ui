interface Props {}

import { selectOperatingSystem, setOperatingSystem } from "@/store/appSlice";
import { OPERATING_SYSTEM } from "@/types/enums";
import { WindowRounded } from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";

export default function OperatingSystemSelector({}: Props) {
  const operatingSystem = useSelector(selectOperatingSystem);
  const dispatch = useDispatch();

  function handleChange(e: any, value: string) {
    dispatch(setOperatingSystem(value));
  }

  return (
    <ToggleButtonGroup
      color="primary"
      value={operatingSystem}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value={OPERATING_SYSTEM.WINDOWS}>
        <WindowRounded />
      </ToggleButton>
      <ToggleButton value={OPERATING_SYSTEM.MAC}>
        <AppleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
