export default function Select({
  value,
  label,
  optionList,
  onChange,
}: {
  value: string;
  label: string;
  optionList: Array<{ label: string; value: string }>;
  onChange: (value: any) => void;
}) {
  return (
    <select
      placeholder={label}
      className={"border-[1px] border-grey p-2 rounded appearance-none"}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {optionList?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
