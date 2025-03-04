import { useState } from 'react';
import { Search, Mic, PlusCircle } from 'lucide-react';

export default function LegalAIAssistant() {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submitting to your AI API here
    console.log('User query:', query);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">
        How can we assist with your legal issue?
      </h1>

      {/* Chat Input Box */}
      <div className="relative bg-white shadow-md rounded-2xl w-full max-w-2xl p-4 flex items-center space-x-3">
        <PlusCircle className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Describe your legal problem..."
          className="flex-1 border-none outline-none text-sm md:text-base"
          value={query}
          onChange={handleQueryChange}
        />
        <button
          onClick={handleSubmit}
          className="rounded-full bg-black text-white p-3 flex items-center justify-center"
        >
          <Mic className="h-5 w-5" />
        </button>
      </div>

      {/* Quick Options */}
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        {[
          'Family Law',
          'Property Issue',
          'Criminal Case',
          'Employment Dispute',
          'More',
        ].map((option, index) => (
          <button
            key={index}
            className="px-4 py-2 rounded-full border text-sm flex items-center gap-2"
          >
            {option === 'More' ? (
              <span className="text-gray-500">{option}</span>
            ) : (
              <>
                <Search className="h-4 w-4" />
                {option}
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
