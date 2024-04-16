import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProviders";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const {
    displayName,
    email,
    photoURL

    }=user;
  return (
    <div className="  h-screen">
      <div className=" mt-5 border-2 rounded-xl flex flex-col justify-center items-center">
        <div className="avatar pt-10">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photoURL} />
          </div>
        </div>
        <div className="mt-5 p-10">
            <h1 className="text-3xl text-bold text-center">{displayName}</h1>
            <p className="text-2xl text-semibold text-center">{email}</p>

        </div>
      </div>
    </div>
  );
};

export default Profile;
