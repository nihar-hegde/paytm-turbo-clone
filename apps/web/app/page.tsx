import { buttonVariants } from "@repo/ui/components/ui/button";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col gap-2 items-center justify-center p-28">
      <div className="text-5xl font-bold">Welcome to paytm!</div>
      <Link href={"/auth/login"} className={buttonVariants()}>
        Get Started
      </Link>
    </main>
  );
}
