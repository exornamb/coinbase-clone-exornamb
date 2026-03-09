import { useNavigate } from "react-router-dom";

// Renders a promotional banner encouraging users to sign up and start trading
export default function TradeBanner() {
    const navigate = useNavigate();

    return (
        <div className="mt-8 overflow-hidden rounded-2xl bg-[#0052FF] p-8 flex items-center justify-between gap-6 mb-12">
        <div>
            <h3 className="text-xl font-bold text-white leading-snug">
            Create a Coinbase account to trade<br />crypto. It's quick, easy, and secure.
            </h3>
            <button
            onClick={() => navigate("/signup")}
            className="mt-5 flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
            >
            Start Trading
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
        </div>
        {/* Decorative chart illustration */}
        <div className="hidden sm:block flex-shrink-0 opacity-95">
        <svg width="170" height="90" viewBox="0 0 170 90">
            <rect x="52" y="48" width="82" height="26" fill="#D1D5DB" />
            
            <line x1="78" y1="34" x2="78" y2="82" stroke="#0052FF" strokeWidth="2" />
            <rect x="72" y="46" width="12" height="24" fill="#EF4444" rx="1" />

            <line x1="102" y1="26" x2="102" y2="78" stroke="#0052FF" strokeWidth="2" />
            <rect x="96" y="38" width="12" height="30" fill="#22C55E" rx="1" />

            <line x1="126" y1="18" x2="126" y2="70" stroke="#0052FF" strokeWidth="2" />
            <rect x="120" y="28" width="12" height="26" fill="#22C55E" rx="1" />

            <line x1="60" y1="68" x2="126" y2="28" stroke="#111827" strokeWidth="2.5" />
            <polygon points="126,28 120,28 126,20 132,28" fill="#111827" />

            <line x1="60" y1="34" x2="74" y2="34" stroke="#111827" strokeWidth="2" />
            <line x1="60" y1="40" x2="74" y2="40" stroke="#111827" strokeWidth="2" />
        </svg>
        </div>
        </div>
    );
}
