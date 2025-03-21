import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-xl mb-8">Discover amazing features and possibilities</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Easy to Use", desc: "Intuitive interface for the best experience" },
              { title: "Powerful Tools", desc: "Advanced features for your needs" },
              { title: "24/7 Support", desc: "We're here to help anytime" }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-4">
                We're dedicated to providing the best solutions for our customers.
                With years of experience and a passionate team, we deliver
                outstanding results.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/file.svg"
                alt="About us"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions? We'd love to hear from you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400">Terms</a></li>
              <li><a href="#" className="hover:text-blue-400">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
