import { OPERATING_SYSTEM } from "@/types/types";

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

export default function KeyboardButton({ operatingSystem, keyValue }: OwnProps) {
  let mappedValue = keyboardButtonMap[keyValue];
  let showButton = false;
  let showText = false;
  let textValue = "";
  let buttonText = "";
  if(!mappedValue && keyValue?.length === 1) {
    showButton = true;
    buttonText = keyValue;
    if (['+', ','].includes(keyValue?.trim())) {
      showButton = false;
      showText = true;
      textValue = keyValue;
    }
  } else if(!mappedValue) {
    showText = true;
    textValue = keyValue;
  } else if(mappedValue) {
    showButton = true;
    buttonText = mappedValue;
    if(operatingSystem === OPERATING_SYSTEM.MAC && ["Cmd"].includes(keyValue)) {
      buttonText = keyValue
    }
  }
  return (
    <>
      {showButton && (
        <div className={`px-1 flex items-center justify-center font-mono text-white bg-gray-600 select-none min-w-[2.5rem] max-w-[110px] h-10 text-lg font-medium border border-gray-300 rounded shadow-sm overflow-ellipsis overflow-hidden`}>{buttonText}</div>
      )}
      {showText && (
        <div className={'font-mono select-none'}>
          {textValue}
        </div>
      )}
    </>
  );
}
