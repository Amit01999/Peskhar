const resources = [
  {
    title: 'Legal Rights in Bangladesh',
    description:
      'Understand your basic legal rights in Bangladesh including property laws, family laws, and more.',
    link: 'https://example.com/legal-rights',
  },
  {
    title: 'Step-by-Step Guide to Filing a Case',
    description:
      'A complete guide on how to file a case, from documentation to hiring a lawyer.',
    link: 'https://example.com/filing-case-guide',
  },
  {
    title: 'Top Legal Resources for Women',
    description:
      'Important resources and legal aid services specifically for women in Bangladesh.',
    link: 'https://example.com/legal-resources-women',
  },
  {
    title: 'Understanding Cyber Laws',
    description:
      'Learn about cybercrime laws and how to protect yourself online.',
    link: 'https://example.com/cyber-laws',
  },
];

const ResourcesPage = () => {
  return (
    <section className="min-h-screen mt-10 py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Legal Resources
        </h1>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Explore useful legal guides, articles, and documents to stay informed
          and empowered.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                {resource.title}
              </h3>
              <p className="mt-3 text-gray-600">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesPage;
