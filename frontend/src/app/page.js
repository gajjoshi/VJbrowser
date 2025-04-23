"use client";
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Dummy result for now
    setResults([
      {
        title: 'Sample Result Title',
        description: 'This is a verified, ad-free, human-curated answer with real-time insights and honest recommendations.'
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-black text-white py-4 px-6">
        <h1 className="text-xl font-semibold">Vivek Jhalan Browser</h1>
      </header>

      <main className="flex flex-col items-center justify-center py-12 px-4">
        <h2 className="text-3xl mb-4 font-bold text-center">Find Verified, Honest Results</h2>
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            className="flex-grow px-4 py-2 rounded-l border border-gray-300 focus:outline-none"
            placeholder="Ask anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {results.length > 0 && (
          <section className="bg-white mt-10 p-6 rounded-lg shadow-lg w-full max-w-3xl">
            {results.map((result, idx) => (
              <div key={idx} className="border-b border-gray-200 py-4">
                <h3 className="text-xl font-semibold">{result.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{result.description}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
