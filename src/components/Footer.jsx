function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold">SaaSy</h4>
          <p className="text-gray-400 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="space-y-2">
          <a href="#" className="block text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="block text-gray-400 hover:text-white">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
