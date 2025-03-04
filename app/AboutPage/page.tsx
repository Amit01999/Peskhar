const AboutPage = () => {
  return (
    <section className="min-h-screen py-16 mt-14 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Welcome to our platform — your trusted digital legal companion. We
          connect people with experienced lawyers, provide instant legal
          consultations, and simplify the legal process using AI-powered
          technology.
        </p>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left - Mission & Vision */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to make legal services accessible, affordable, and
              understandable for everyone, ensuring no one feels lost in the
              complexities of the legal system.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              We envision a future where technology bridges the gap between
              individuals and legal experts, empowering people to seek justice
              and legal assistance with ease.
            </p>
          </div>

          {/* Right - Image */}
          <div className="w-full flex justify-center">
            <img
              src="https://www.lawtechnologytoday.org/wp-content/uploads/2021/08/legal-tech.jpg"
              alt="About Us Illustration"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Accessibility
              </h3>
              <p className="text-gray-600 mt-3">
                Legal services for everyone, regardless of location or income.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Transparency
              </h3>
              <p className="text-gray-600 mt-3">
                Clear communication and upfront pricing for all services.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600 mt-3">
                Leveraging AI and technology to make legal assistance faster and
                smarter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
