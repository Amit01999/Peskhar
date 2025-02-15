import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              LegalConnect
            </h3>
            <p className="text-gray-400">
              Connecting lawyers and clients for better legal outcomes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">For Clients</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/find-lawyer"
                  className="hover:underline text-gray-400"
                >
                  Find a Lawyer
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:underline text-gray-400"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline text-gray-400">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">For Lawyers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/join" className="hover:underline text-gray-400">
                  Join Our Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/lawyer-resources"
                  className="hover:underline text-gray-400"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="hover:underline text-gray-400"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline text-gray-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline text-gray-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline text-gray-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} LegalConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
