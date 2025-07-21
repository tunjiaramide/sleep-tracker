import Guest from "@/components/Guest";
import { currentUser  } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = await currentUser();
  if(!user) {
    return <Guest />
  }

  return (
    <>
      <h2>Welcome to our dashboard</h2>
    </>
  );
}
