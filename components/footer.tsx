import { inter } from "@/app/layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`w-full flex px-40 pt-10 text-2xl ${inter.className}`}>
      <h3 className="ml-auto self-end">
        <span className="mr-1">by</span>
        <Link
          href={"https://www.youtube.com/@JChicanoDev"}
          className="underline text-blue-400 text-3xl"
        >
          JChicano Dev
        </Link>
      </h3>
    </footer>
  );
}
