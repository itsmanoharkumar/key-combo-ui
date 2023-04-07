interface AppCardBoxProps {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

export default function ProductCardBox({ id, name, onClick }: AppCardBoxProps) {
  return (
    <div
      className={
        "flex items-center justify-center w-[100px] h-[100px] p-2 m-2 border border-gray-300 rounded-md" +
        " cursor-pointer hover:bg-pastelYellow"
      }
      onClick={() => onClick(id)}
    >
      {name}
    </div>
  );
}
