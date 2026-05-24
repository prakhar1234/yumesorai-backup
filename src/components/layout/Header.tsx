import Link from "next/link";

const navLinks = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Airlines", href: "/solutions/airlines" },
      { label: "Banking", href: "/solutions/banking" },
    ],
  },
  { label: "Platform", href: "/platform" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-950/5 bg-offwhite/80 backdrop-blur-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-indigo-950">
            Yumesorai
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-indigo-950/70 transition-colors hover:text-indigo-950"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden text-sm font-medium text-indigo-950/70 transition-colors hover:text-indigo-950 sm:block"
          >
            Contact
          </Link>
          <Link
            href="/demo"
            className="rounded-lg bg-coral px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-coral-dark hover:shadow-md"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="ml-3 inline-flex items-center justify-center rounded-md p-2 text-indigo-950/70 hover:text-indigo-950 md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
