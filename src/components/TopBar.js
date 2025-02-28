import { useState } from "react";

export default function TopBar({ onMenuClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="top-bar w-full fixed top-0 left-0 bg-black text-white z-50">
            <div className="container mx-auto p-2 sm:p-4 flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-lg sm:text-2xl font-semibold">Anders Monrad</h1>
                    <h2 className="text-sm sm:text-xl font-semibold">Composer, Artist, Interaction Designer</h2>
                </div>

            {/* Dropdown Menu */}
            <div className="relative">
                <button onClick={() => setMenuOpen(!menuOpen)} className="px-2 py-1 sm:px-4 sm:py-2 rounded hover:bg-gray-700">
                    Menu
                    <span class="ml-1">▼</span>
                </button>
                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg">
                        <a
                            href="#scoremusic"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("SCORE MUSIC");
                                setMenuOpen(false);
                            }}
                        >
                            SCORE MUSIC
                        </a>

                        <a
                            href="#iosapps"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("IOS APPS");
                                setMenuOpen(false);
                            }}
                        >
                            IOS APPS
                        </a>

                        <a
                            href="#artinstallations"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("INSTALLATIONS");
                                setMenuOpen(false);
                            }}
                        >
                            INSTALLATIONS
                        </a>
                        
                        <a
                            href="#artwork"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("VISUAL ART");
                                setMenuOpen(false);
                            }}
                        >
                            VISUAL ART
                        </a>

                        <a
                            href="#piano"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("PIANO");
                                setMenuOpen(false);
                            }}
                        >
                            PIANO
                        </a>

                        <a
                            href="#electronic"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("ELECTRONIC MUSIC");
                                setMenuOpen(false);
                            }}
                        >
                            ELECTRONIC MUSIC
                        </a>

                        <a
                            href="#performances"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("PERFORMANCES");
                                setMenuOpen(false);
                            }}
                        >
                            PERFORMANCES
                        </a>

                        <a
                            href="#prototypes"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("PROTOTYPES");
                                setMenuOpen(false);
                            }}
                        >
                            PROTOTYPES
                        </a>

                        <a
                            href="#commercial"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("COMMERCIAL");
                                setMenuOpen(false);
                            }}
                        >
                            COMMERCIAL
                        </a>

                        <a
                            href="#releases"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("RELEASES");
                                setMenuOpen(false);
                            }}
                        >
                            RELEASES
                        </a>

                        <a
                            href="#texts"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("TEXTS");
                                setMenuOpen(false);
                            }}
                        >
                            TEXTS
                        </a>

                        <a
                            href="#about"
                            className="block px-4 py-2 text-white hover:bg-gray-700"
                            onClick={(e) => {
                                e.preventDefault();
                                onMenuClick("ABOUT");
                                setMenuOpen(false);
                            }}
                        >
                            ABOUT
                        </a>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}