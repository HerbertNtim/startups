import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-md">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo.png"} alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black mr-10">
          {session && session?.user ? (
            <>
              <Link href="/create">Create</Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                </button>
              </form>

              <Link href={`/user/`}>{session.user.name}</Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";

                  await signIn("github");
                }}
                className="px-5 text-xl"
              >
                <button type="submit">Login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;