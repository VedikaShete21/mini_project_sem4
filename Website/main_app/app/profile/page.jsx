"use client";

import { useState } from "react";

export default function ProfilePage() {
    const [active, setActive] = useState(null);
    const [text, setText] = useState("");
    const [url, setUrl] = useState("");
    const [audio, setAudio] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center p-6">

            {/* Heading */}
            <h1 className="text-4xl font-bold mb-8">Analysis Dashboard</h1>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">

                {/* Text Analysis */}
                <div
                    onClick={() => setActive("text")}
                    className={`cursor-pointer p-6 rounded-xl shadow-lg transition transform hover:scale-105 ${active === "text" ? "bg-blue-600" : "bg-gray-700"
                        }`}
                >
                    <h2 className="text-xl font-semibold mb-2">📝 Phising Text Analysis</h2>
                    <p className="text-gray-300">Analyze written content easily</p>
                </div>

                {/* Audio Analysis */}
                <div
                    onClick={() => setActive("audio")}
                    className={`cursor-pointer p-6 rounded-xl shadow-lg transition transform hover:scale-105 ${active === "audio" ? "bg-green-600" : "bg-gray-700"
                        }`}
                >
                    <h2 className="text-xl font-semibold mb-2">🎧 Ai/Phishing Voice Detector </h2>
                    <p className="text-gray-300">Upload and analyze audio files (.wav/mp3 format)</p>
                </div>

                {/* Website Analysis */}
                <div
                    onClick={() => setActive("website")}
                    className={`cursor-pointer p-6 rounded-xl shadow-lg transition transform hover:scale-105 ${active === "website" ? "bg-purple-600" : "bg-gray-700"
                        }`}
                >
                    <h2 className="text-xl font-semibold mb-2">🌐 Phising Website Analysis</h2>
                    <p className="text-gray-300">Check URLs for insights</p>
                </div>
            </div>

            {/* Dynamic Input Section */}
            <div className="w-full max-w-xl bg-gray-800 p-6 rounded-xl shadow-lg">

                {/* TEXT */}
                {active === "text" && (
                    <div className="flex flex-col gap-4">
                        <textarea
                            placeholder="Enter text to analyze..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={5}
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded font-semibold transition">
                            Analyze Text
                        </button>
                    </div>
                )}

                {/* AUDIO */}
                {active === "audio" && (
                    <div className="flex flex-col gap-4">
                        <input
                            type="file"
                            accept="audio/*"
                            onChange={(e) => setAudio(e.target.files[0])}
                            className="p-2 bg-gray-700 rounded border border-gray-600"
                        />
                        <button className="bg-green-600 hover:bg-green-700 py-2 rounded font-semibold transition">
                            Analyze Audio
                        </button>
                    </div>
                )}

                {/* WEBSITE */}
                {active === "website" && (
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Enter website URL..."
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button onClick={() => window.location.href = `http://localhost:5173?url=${encodeURIComponent(url)}`} className="bg-purple-600 hover:bg-purple-700 py-2 rounded font-semibold transition">
                            Analyze Website
                        </button>
                    </div>
                )}

                {/* Default message */}
                {!active && (
                    <p className="text-center text-gray-400">
                        Select an option above to start analysis
                    </p>
                )}
            </div>
        </div>
    );
}