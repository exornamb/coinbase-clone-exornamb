import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { MARKET_STATS } from "../../data/exploreData";

// Shows overall market statistics including global market cap and trend sparklines
export default function MarketStats() {
    return (
        <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-900">Market stats</h2>
            <div className="flex gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">
            The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.04 trillion,
            representing a 0.27% increase from last week.{" "}
            <button className="text-[#0052FF] hover:underline font-medium">Read more</button>
        </p>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {MARKET_STATS.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-base font-bold text-gray-900">{stat.value}</p>
                <p className={`mt-0.5 flex items-center gap-1 text-xs font-medium ${stat.neg ? "text-red-500" : "text-emerald-500"}`}>
                    {stat.neg ? <FiArrowDownLeft size={12} /> : <FiArrowUpRight size={12} />}
                    <span>{stat.change.replace(/[↘↗]/g, "").trim()}</span>
                </p>
                <svg viewBox="0 0 90 30" className="mt-3 h-8 w-full">
                    <path
                        d={stat.spark}
                        fill="none"
                        stroke={stat.neg ? "#DC2626" : "#16A34A"}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            ))}
        </div>
        </div>
    );
}
