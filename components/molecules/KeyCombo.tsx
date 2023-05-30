import KeyboardButton from "@/components/atoms/KeyboardButton";
import { OPERATING_SYSTEM } from "@/types/types";

interface OwnProps {
  operatingSystem: OPERATING_SYSTEM;
  keyCombo: string;
}

export default function KeyCombo({ keyCombo, operatingSystem }: OwnProps) {
  const keyComboArray = keyCombo?.split(" ");
  return (
    <div className={`font-mono font-semibold flex items-center`}>
      {keyComboArray?.map((key) => {
        return (
          <div key={key} className={"px-[2px]"}>
            <KeyboardButton operatingSystem={operatingSystem} keyValue={key} />
          </div>
        );
      })}
    </div>
  );
}
