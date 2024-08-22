/** @format */

import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full md:w-2/3">
        {/* USER CARDS */}
        <div className="flex flex-wrap justify-between gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full md:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
