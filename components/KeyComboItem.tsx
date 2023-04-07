import { Shortcut } from "@/types/types";

interface KeyComboItemProps extends Shortcut {}

export default function KeyComboItem({ id, attributes }: KeyComboItemProps) {
  const { keyCombo, shortText } = attributes;
  return (
    <div
      className={"flex w-full p-1 border-[1px] rounded mb-1 border-gray-100"}
    >
      <div className={"m-1 p-1 w-1/2 border-r-[1px] font-medium"}>
        {keyCombo}
      </div>
      <div className={"m-1 p-1 w-1/2"}>{shortText}</div>
    </div>
  );
}
