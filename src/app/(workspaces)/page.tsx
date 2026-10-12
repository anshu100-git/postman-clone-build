import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex flex-col items-center justify-center h-full text-zinc-400">
      {user ? (
        <UserButton user={user} />
      ) : (
        <p className="text-sm">
          You are not logged in.{" "}
          <a href="/sign-in" className="text-indigo-400 underline hover:text-indigo-300">
            Sign in
          </a>
        </p>
      )}
    </div>
  );
}
