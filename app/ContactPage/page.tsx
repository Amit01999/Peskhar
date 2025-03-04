const ContactPage = () => {
  return (
    <section className="min-h-screen mt-14 py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Have questions or need legal assistance? Reach out to us — we’re here
          to help.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Form */}
          <div className="bg-white p-8 shadow rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Write your message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">+880 1234 567 890</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">
                support@yourlegalplatform.com
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Office Address
              </h3>
              <p className="text-gray-600 mt-2">
                123 Legal Avenue,
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
