import { OPERATING_SYSTEM } from "@/types/types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface OwnProps {
  operatingSystem: OPERATING_SYSTEM;
  keyValue: string;
}

const keyboardButtonMap: Record<string, string> = {
  Shift: "⇧",
  Alt: "⌥",
  Cmd: "⌘",
  Ctrl: "⌃",
  Tab: "⇥",
  Backspace: "⌫",
  Delete: "⌦",
  Enter: "⏎",
  "Caps Lock": "⇪",
  "Page Up": "⇞",
  "Page Down": "⇟",
  "Left Arrow": "⇠",
  "Right Arrow": "⇢",
  "Up Arrow": "⇡",
  "Down Arrow": "⇣",
  Clear: "⌧",
  Return: "⌤",
  Esc: "⎋",
  Space: "␣",
  Insert: "Insert",
};

export default function KeyboardButton({
  operatingSystem,
  keyValue,
}: OwnProps) {
  let mappedValue = keyboardButtonMap[keyValue];
  let showButton = false;
  let showText = false;
  let textValue = "";
  let buttonText = "";
  if (!mappedValue && keyValue?.length === 1) {
    showButton = true;
    buttonText = keyValue;
    if (["+", ","].includes(keyValue?.trim())) {
      showButton = false;
      showText = true;
      textValue = keyValue;
    }
  } else if (!mappedValue) {
    showText = true;
    textValue = keyValue;
  } else if (mappedValue) {
    showButton = true;
    buttonText = mappedValue;
    if (
      operatingSystem === OPERATING_SYSTEM.MAC &&
      ["Cmd"].includes(keyValue)
    ) {
      buttonText = keyValue;
    }
  }
  return (
    <>
      {showButton && (
        <Button color="primary" size="small" variant="outlined">
          <Typography variant="body1" fontWeight={700}>
            {buttonText}
          </Typography>
        </Button>
      )}
      {showText && (
        <div className={"font-mono select-none font-extralight mx-2"}>
          {textValue}
        </div>
      )}
    </>
  );
}
