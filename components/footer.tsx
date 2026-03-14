import Link from "next/link"

const footerLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]


export function Footer() {
  return (
    <footer className="px-6 py-16 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
        <div className="md:col-span-5">
          <Link
            href="/"
            className="text-xs font-medium tracking-[0.3em] uppercase text-foreground"
          >
            Newman Holdings
          </Link>
          <p className="text-sm leading-[1.75] text-muted-foreground mt-5 max-w-xs">
            A real estate holding group dedicated to creating sustainable properties, providing
            business consulting, and building communities for future prosperity.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5">
            Navigation
          </p>
          <div className="flex flex-col gap-3">
            {footerLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-11">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground/50 mb-5 invisible">
            &nbsp;
          </p>
          <div className="flex flex-col gap-3">
            {footerLinks.slice(2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-border gap-4">
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          {"Newman Holdings and Enterprise Group LLC. All rights reserved."}
        </p>
        <p className="text-[11px] tracking-[0.1em] text-muted-foreground/50">
          Building for Future Prosperity
        </p>
      </div>
    </footer>
  )
}
