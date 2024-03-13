import Link from 'next/link'
import Header from '@/components/header'

export default function Home() {
  console.log("hey from the server")
  return (
    <main>
      <Header />
      <p>🔥 Let's get started! 🔥</p>
      <Link href="/about">
        About Us
      </Link>
    </main>
  );
}
