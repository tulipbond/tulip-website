"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const solid = scrolled || isOpen;

  const linkClass = (href: string) => {
    if (pathname === href) return "text-red-600";
    return solid
      ? "text-ink/65 hover:text-ink"
      : "text-white/75 hover:text-white";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-line bg-white/85 backdrop-blur-xl"
          : "bg-gradient-to-b from-black/55 via-black/20 to-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between">
        <Link href="/" aria-label="Tulip Bond home" className="shrink-0">
          <Image
            src="/logoFinal.png"
            alt="Tulip Bond custom bonded warehouse logo"
            width={120}
            height={56}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${linkClass(
                item.href,
              )}`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-red-600 to-orange-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary !px-6 !py-2.5">
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${
            solid
              ? "border-line text-ink"
              : "border-white/25 text-white backdrop-blur"
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } border-t border-line bg-white`}
      >
        <nav className="shell flex flex-col gap-1 py-6" aria-label="Mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-2 py-3 font-display text-2xl font-semibold tracking-tight transition ${
                pathname === item.href ? "text-red-600" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4 w-full">
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
