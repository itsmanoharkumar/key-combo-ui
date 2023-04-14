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
};

export default function KeyboardButton({ operatingSystem, keyValue }: OwnProps) {
  let value = keyboardButtonMap[keyValue];
  if (!value) {
    value = keyValue;
  }
  if(operatingSystem === OPERATING_SYSTEM.MAC && ["Ctrl"].includes(keyValue)) {
    value = keyValue;
  }
  if(['+', ','].includes(keyValue?.trim())){
    return <div className={'font-mono select-none'}>
      {keyValue}
    </div>
  }
  return (
    <div className={`font-mono text-white bg-gray-600 inline-flex select-none items-center justify-center w-10 h-10 text-lg font-medium border border-gray-300 rounded shadow-sm`}>{value}</div>
  );
}
