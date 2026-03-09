import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FiArrowUpRight } from "react-icons/fi";
import MarketStats from "../components/explore/MarketStats";
import CryptoTable from "../components/explore/CryptoTable";
import TradeBanner from "../components/explore/TradeBanner";
import RightSidebar from "../components/explore/RightSidebar";
import CookieBanner from "../components/common/CookieBanner";
import { COINS } from "../data/exploreData";

// Displays the main Explore page allowing users to view and search crypto assets
export default function Explore() {

    const [search, setSearch] = useState("");
    const [starred, setStarred] = useState(new Set());
    const [category] = useState("all");

    const toggleStar = (symbol) => {
        setStarred((prev) => {
        const next = new Set(prev);
        next.has(symbol) ? next.delete(symbol) : next.add(symbol);
        return next;
        });
    };

    let filtered = COINS.filter(
    (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.symbol.toLowerCase().includes(search.toLowerCase())
    );

    if (category === "gainers") {
    filtered = filtered.filter((c) => !c.neg);
    }

    if (category === "losers") {
    filtered = filtered.filter((c) => c.neg);
    }

    if (category === "tradeable") {
    filtered = filtered.filter((c) => c.symbol !== "TRX");
    }

    if (category === "new") {
    filtered = filtered.slice(0, 3);
    }

    return (
        <PageLayout>
        <div className="min-h-screen bg-white">
            <div className="mx-auto flex flex-row max-w-[1200px] gap-6 px-2 pt-4 pb-2">
            <div className="flex-1 flex-row min-w-0">
                <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Explore crypto
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Coinbase 50 Index is up{" "}
                            <span className="inline-flex items-center gap-1 text-emerald-500 font-medium">
                                <FiArrowUpRight size={14} />
                                1.62% (24hrs)
                            </span>

                            <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-[9px] text-white font-bold">
                                i
                            </span>
                        </p>
                    </div>
                    <div className="w-100 max-w-xl">
                        <div className="relative">
                            
                            <svg
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="8"/>
                                <path d="m21 21-4.35-4.35"/>
                            </svg>

                            <input
                                value={search}
                                onChange={(e)=>setSearch(e.target.value)}
                                placeholder="Search for an asset"
                                className="w-100 rounded-full bg-gray-100 py-3 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#0052FF]"
                            />

                        </div>
                    </div>

                </div>

                <MarketStats />
                <CryptoTable filtered={filtered} starred={starred} toggleStar={toggleStar} />
                <TradeBanner />
            </div>

            <RightSidebar />
            </div>

            <CookieBanner />
        </div>
        </PageLayout>
    );
}
