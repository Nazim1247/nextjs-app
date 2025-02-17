// import Image from "next/image";
import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LogoutButton from "./components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h2>Hello World</h2>
      
      <div className="text-center">

        {session?.user ? (<LogoutButton></LogoutButton>) :(<LoginButton></LoginButton>)}
      
      
      </div>
      <p className="text-xl font-bold">from client component</p>
      <UserInfo></UserInfo>
      <p className="text-xl font-bold">from server component</p>
      {JSON.stringify(session)}
    </div>
  );
}
