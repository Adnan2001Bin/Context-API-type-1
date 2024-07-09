import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user)
    return <div className="text-center text-red-500">Please Log In</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className="text-gray-700">Welcome, {user.username}!</p>
    </div>
  );
};

export default Profile;
