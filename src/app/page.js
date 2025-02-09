// import Image from "next/image";
import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <h2>Hello World</h2>
      <LoginButton></LoginButton>
      <p className="text-xl font-bold">from client component</p>
      <UserInfo></UserInfo>
      <p className="text-xl font-bold">from server component</p>
      {JSON.stringify(session)}
    </div>
  );
}
