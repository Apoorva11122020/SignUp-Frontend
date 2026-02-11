import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to{" "}
          <span className="text-primary-600">Authify</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          A modern, full-stack web application built with Next.js, Redux,
          Express.js, and Supabase. Experience secure authentication and a
          beautiful user interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/signup">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Sign In
            </Button>
          </Link>
        </div>
        
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary-600 text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
            <p className="text-gray-600">
              Industry-standard security with JWT tokens and password hashing
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary-600 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast & Modern</h3>
            <p className="text-gray-600">
              Built with Next.js 14 and cutting-edge technologies
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-primary-600 text-3xl mb-4">💎</div>
            <h3 className="text-xl font-semibold mb-2">Beautiful UI</h3>
            <p className="text-gray-600">
              Clean, professional design with excellent user experience
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
