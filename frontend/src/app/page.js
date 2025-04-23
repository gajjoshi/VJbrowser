"use client";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/crawler", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error(err);
      setResults([
        {
          title: "Error fetching results",
          description: "Please check your backend or internet connection.",
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">
      <header className="w-full py-6 px-8 bg-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black tracking-wide">Vivek Jhalan Browser</h1>
        <span className="text-sm font-medium bg-black text-white px-3 py-1 rounded-full">Beta</span>
      </header>

      <main className="flex flex-col items-center justify-center px-6 pt-20 pb-10 text-center">
        <h2 className="text-4xl font-semibold mb-4 leading-tight tracking-tight">
          Skip the Noise. <span className="text-blue-600">Get Verified Results.</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl">
          A browser that filters out the junk. No ads. No SEO spam. Just real, reliable answers.
        </p>

        <div className="flex w-full max-w-2xl rounded-lg overflow-hidden shadow-lg border bg-white">
          <input
            type="text"
            className="flex-grow px-5 py-4 text-lg focus:outline-none"
            placeholder="What do you want to know?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 transition"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-12 w-full max-w-3xl space-y-6">
            {results.map((result, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md text-left">
                <h3 className="text-xl font-semibold text-gray-800">{result.title}</h3>
                <p className="text-gray-600 mt-2 text-base leading-relaxed">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
