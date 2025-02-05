import Link from "next/link";
import SignupHero from "./SignupHero";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <>
      <SignupHero />

      <div className="min-h-screen bg-white flex justify-center items-center">
        <section className="py-10 w-full max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
          <form>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <Input type="text" placeholder="Enter your name" className="w-full border rounded px-3 py-2" />
            </div>
            
            {/* Email Field */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <Input type="email" placeholder="Enter your email" className="w-full border rounded px-3 py-2" />
            </div>
            
            {/* Password Field */}
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <Input type="password" placeholder="Enter your password" className="w-full border rounded px-3 py-2" />
            </div>

            {/* Remember Me */}
            <div className="flex gap-2 items-center mb-4">
              <input type="checkbox" className="focus:ring-yellow-300" />
              <span>Remember me?</span>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded">
              Sign Up
            </Button>

            {/* Links */}
            <p className="text-center mt-4">
              <Link href="#" className="text-yellow-500 hover:text-blue-500">Forgot password?</Link> or
              <Link href="/login" className="text-yellow-500 hover:text-blue-500 ml-1">Sign In</Link>
            </p>
          </form>

          {/* Social Signup */}
          <div className="text-center mt-6">
            <p>or</p>
            <Button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/google.png" width={24} height={24} alt="Google" className="mr-2" />
              Sign up with Google
            </Button>
            <Button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src="/apple.png" width={24} height={24} alt="Apple" className="mr-2" />
              Sign up with Apple
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
