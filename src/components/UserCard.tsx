import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="odd:bg-lamaPurple even:bg-lamaYellow min-w-[130px] flex-1 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-[10px] text-green-600">
          2024/25
        </span>
        <div className="relative h-5 w-5">
          <Image src="/more.png" alt="" fill />
        </div>
      </div>
      <h1 className="my-4 text-2xl font-semibold">1,234</h1>
      <h2 className="text-sm font-medium capitalize text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
