const SimplifyWithAI = () => {
  return (
    <section
      className="relative py-16 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://www.marcumllp.com/wp-content/uploads/insights-ai-legal-field-challenges-and-best-practices.jpg)',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Simplify Your Legal Problems with AI
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Struggling with legal issues? Let our smart AI guide you!
        </p>
        <div className="mt-6 space-y-3">
          <p className="text-lg text-gray-200">
            ✅ Instantly analyze your legal concerns
          </p>
          <p className="text-lg text-gray-200">
            ✅ Get tailored lawyer recommendations
          </p>
          <p className="text-lg text-gray-200">
            ✅ Quick legal solutions—faster than ever
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/LegalAIAssistant"
            className="inline-block px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-200 transition duration-300 font-semibold"
          >
            Explore Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimplifyWithAI;
