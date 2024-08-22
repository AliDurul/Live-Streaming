import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="text-lime-600 text-2xl text-center">hi there</h1>
    </>
  );
}
