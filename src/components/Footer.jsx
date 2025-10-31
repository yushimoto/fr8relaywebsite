export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <img
              src="logo.png"
              alt="FR8relay logo"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-600 text-sm leading-relaxed max-w-md font-roboto">
              Revolutionizing freight logistics through AI-powered relay systems
              that eliminate empty miles and maximize efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 font-roboto">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/fr8relay/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-roboto"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:hello@fr8relay.com"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-roboto"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                hello@fr8relay.com
              </a>
              <div className="flex items-center gap-2 text-gray-600 text-sm font-roboto">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.25A1 1 0 0120 22C10.61 22 2 13.39 2 4a1 1 0 011-1h3.25a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
                479-310-5053
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm font-roboto">
              © {new Date().getFullYear()} FR8relay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
