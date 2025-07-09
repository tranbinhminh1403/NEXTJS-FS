import { auth } from "@/auth/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(session);

  return (
    <div className="flex flex-col gap-5 w-1/2 mx-auto">
      {!session ? (
        <p>Not logged in</p>
      ) : (
        <p>{session.user.name}</p>
      )}
    </div>
  );
}
