import KeyCombo from "@/components/molecules/KeyCombo";
import { OPERATING_SYSTEM, Shortcut } from "@/types/types";

interface KeyComboItemProps extends Shortcut {
  operatingSystem: OPERATING_SYSTEM;
}

export default function KeyComboItem({ attributes , operatingSystem }: KeyComboItemProps) {
  const { windowsKeyCombo, shortText, macKeyCombo } = attributes;
  const keyCombo = operatingSystem === OPERATING_SYSTEM.MAC ? macKeyCombo : windowsKeyCombo;
  return (
    <div
      className={"w-full p-1 border-[1px] rounded mb-1 border-gray-100 bg-gray-100"}
    >
      
      <div className={"m-1 p-1 text-lg"}>{shortText}</div>
      <div className={"m-1 p-1 flex justify-end w-full"}>
        <KeyCombo keyCombo={keyCombo}
                  operatingSystem={operatingSystem}
        />
      </div>
    </div>
  );
}
