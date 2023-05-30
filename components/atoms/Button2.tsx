import clsx from "clsx";

export default function Button2({
  text,
  onClick,
  className,
  isDisabled,
}: {
  isDisabled?: boolean;
  text: string;
  onClick: () => void;
  className?: string;
}) {
  const computedClassName = clsx(
    className,
    { "cursor-not-allowed opacity-50 pointer-events-none": isDisabled },
    `flex items-center border-[1px] border-grey bg-white
      py-2 px-4 rounded active:bg-pastelYellow transition duration-150 ease-in-out`
  );
  return (
    <button className={computedClassName} onClick={onClick}>
      {text}
    </button>
  );
}
