import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";

/**
 * Loads the current user and renders account controls or a sign-in link.
 *
 * @returns The workspace home page for the current session.
 */
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
