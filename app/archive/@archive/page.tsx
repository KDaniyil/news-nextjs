import Link from "next/link";

export default function ArchivePage() {
  return <header id="archive-header">
    <nav>
        <ul>
            <li>
                <Link href="/archive/2024">2024</Link>
            </li>
        </ul>
    </nav>
  </header>
}
