import KeyComboItem from "@/components/KeyComboItem";
import { selectOperatingSystem } from "@/store/appSlice";
import { Shortcut, ShortcutCategory } from "@/types/types";
import { useSelector } from "react-redux";

interface ShortcutCategoryCardProps extends ShortcutCategory {}

export default function ShortcutCategoryCard({
  id,
  attributes,
}: ShortcutCategoryCardProps) {
  const selectedOperatingSystem = useSelector(selectOperatingSystem);
  const { name, shortcuts } = attributes;
  const shortcutsList = shortcuts?.data;
  const isShortcutListEmpty = shortcutsList?.length === 0;
  if (isShortcutListEmpty) {
    return null;
  }
  return (
    <div className={`m-2 w-full`}>
      <div
        className={
          "text-start text-2xl w-full bg-gray-200 mb-2 rounded p-2 font-semibold"
        }
      >
        {name}
      </div>
      {shortcuts?.data?.map((shortcutData: Shortcut) => {
        const { id, attributes } = shortcutData;
        return <KeyComboItem id={id} attributes={attributes} key={id} operatingSystem={selectedOperatingSystem}/>;
      })}
    </div>
  );
}
