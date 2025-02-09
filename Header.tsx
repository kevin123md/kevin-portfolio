import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-deep-blue font-heading">
            Kevin MD
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="text-deep-blue hover:text-accent-teal">
              About
            </Link>
            <Link href="#skills" className="text-deep-blue hover:text-accent-teal">
              Skills
            </Link>
            <Link href="#projects" className="text-deep-blue hover:text-accent-teal">
              Projects
            </Link>
            <Link href="#blog" className="text-deep-blue hover:text-accent-teal">
              Blog
            </Link>
            <Link href="#contact" className="text-deep-blue hover:text-accent-teal">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

