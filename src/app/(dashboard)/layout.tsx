/** @format */

import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      {/* LEFT */}
      <div className="w-[14%] p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex items-center gap-2 lg:justify-start">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block">SchooLama</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] overflow-scroll bg-[#f7f8fa] md:w-[92%] lg:w-[84%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
