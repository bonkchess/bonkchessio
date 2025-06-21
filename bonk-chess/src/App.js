import React from "react";

function SolanaChessHome() {
  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-orange-600">Bonk Chess</h1>
        <p className="text-lg text-gray-700">Play chess on the Solana blockchain!</p>
      </header>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Start Playing</h2>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-4">
          Quick Match
        </button>
        <button className="w-full border border-orange-500 text-orange-500 font-bold py-2 px-4 rounded">
          Create Game
        </button>
        <p className="text-sm text-gray-400 mt-4 text-center">All games are stored on Solana</p>
      </div>
    </div>
  );
}

export default SolanaChessHome;
