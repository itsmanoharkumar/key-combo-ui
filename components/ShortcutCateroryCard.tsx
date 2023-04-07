import KeyComboItem from "@/components/KeyComboItem";
import { Shortcut, ShortcutCategory } from "@/types/types";

interface ShortcutCategoryCardProps extends ShortcutCategory {}

export default function ShortcutCategoryCard({
  id,
  attributes,
}: ShortcutCategoryCardProps) {
  const { name, shortcuts } = attributes;
  const shortcutsList = shortcuts?.data;
  const isShortcutListEmpty = shortcutsList?.length === 0;
  return (
    <div
      className={
        "p-2 border-[1px] border-gray-400 rounded m-2 w-[450px] overflow-hidden flex flex-col items-center" +
        "justify-between "
      }
    >
      <div className={"text-center w-full bg-gray-100 mb-1 rounded p-1"}>
        {name}
      </div>
      {isShortcutListEmpty && <div>No shortcuts found</div>}
      {shortcuts?.data?.map((shortcutData: Shortcut) => {
        const { id, attributes } = shortcutData;
        return <KeyComboItem id={id} attributes={attributes} key={id} />;
      })}
    </div>
  );
}
