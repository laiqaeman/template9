import Link from 'next/link';

export default function SignupHero() {
  return (
    <section 
      className="w-full bg-cover bg-center py-16 sm:py-20 md:py-24 lg:py-28 flex items-center justify-center"
      style={{ backgroundImage: 'url("/heropic.png")' }}
    >
      <div className="text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Sign Up Page
        </h1>
        <div className="text-lg flex gap-2 justify-center">
          <Link href="/" className="hover:text-yellow-400 transition-colors duration-300">
            Home
          </Link>
          <span>/</span>
          <Link href="/signup" className="text-yellow-400">
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
