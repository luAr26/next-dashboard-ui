import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden ring-[1.5px] ring-gray-300 md:flex md:items-center md:gap-2 md:rounded-full md:px-2 md:text-xs">
        <div className="relative h-[14px] w-[14px]">
          <Image src="/search.png" alt="" fill />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] bg-transparent p-2 outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex w-full items-center justify-end gap-6">
        <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
          <Image src="/message.png" alt="icon" fill />
        </div>
        <div className="relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-full">
          <Image src="/announcement.png" alt="icon" fill />
          <div className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-xs text-white">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">John Doe</span>
          <span className="text-right text-[10px] text-gray-500">Admin</span>
        </div>
        <div className="relative h-9 w-9 cursor-pointer overflow-hidden rounded-full">
          <Image src="/avatar.png" alt="avatar" fill />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
