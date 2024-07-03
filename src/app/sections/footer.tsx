import config from "@/lib/config";
import { currentYear } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 p-6 md:p-8 w-full">
      <div className="px-20 container max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm items-center">
        <a
          href="/"
          className="flex items-baseline space-x-2 rtl:space-x-reverse text-gray-300"
        >
          <h2 className="text-lg sm:text-xl font-bold">
            {config.navbar.firstName}
          </h2>
          <img
            src="/img/maple-leaf.svg"
            alt="I'm based in Canada"
            className="w-2 h-2 sm:w-3 sm:h-3"
          />
        </a>
        <div className="text-center md:text-left">
          <p className="text-gray-400 dark:text-gray-400 text-center">
            © {currentYear()} {config.me.firstName} {config.me.lastName}. All
            rights reserved.
          </p>
        </div>
        <div className="flex justify-center md:justify-end space-x-6 text-base">
          <Link className="text-gray-300 hover:text-accent-foreground" href="#">
            About
          </Link>
          <Link className="text-gray-300 hover:text-accent-foreground" href="#">
            Contact
          </Link>
          {config.me.socialLinks.map((socialLink, index) => (
            <a
              key={index}
              className="text-gray-300 hover:text-accent-foreground"
              href={socialLink.url}
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
