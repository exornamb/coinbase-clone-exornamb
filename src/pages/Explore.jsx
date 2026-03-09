import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";


import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import tether from "../assets/tether.png";
import bnb from "../assets/bnb.png";
import xrp from "../assets/xrp.png";
import usdc from "../assets/usdc.png";
import solana from "../assets/sol.png";     
import tron from "../assets/tron.png";         
import dogecoin from "../assets/dogecoin.png"; 
import cardano from "../assets/cardano.png";   
import nuxPopularAssets from "../assets/nuxPopularAssets-5.svg";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import prcl from "../assets/prcl.png";
import fai from "../assets/fai.png";
import hype from "../assets/hype.png"
import jupiter from "../assets/jupiter.png";
import lighter from "../assets/lighter.png";


const SPARKS = {
    btc: "M4 18 L12 16 L20 20 L28 14 L36 17 L44 12 L52 15 L60 10 L68 14 L76 9 L84 12",
    eth: "M4 14 L12 16 L20 13 L28 18 L36 15 L44 20 L52 16 L60 22 L68 18 L76 24 L84 20",
    usdt: "M4 18 L12 18 L20 17.8 L28 18 L36 18.1 L44 18 L52 17.9 L60 18 L68 18 L76 18.1 L84 18",
    bnb: "M4 13 L12 15 L20 14 L28 18 L36 16 L44 19 L52 17 L60 22 L68 20 L76 23 L84 21",
    xrp: "M4 22 L12 20 L20 18 L28 12 L36 24 L44 16 L52 20 L60 14 L68 18 L76 16 L84 13",
    usdc: "M4 18 L12 18 L20 18 L28 17.9 L36 18 L44 18.1 L52 18 L60 18 L68 18 L76 18 L84 18",
    sol: "M4 10 L12 13 L20 11 L28 16 L36 14 L44 19 L52 17 L60 21 L68 19 L76 24 L84 22",
    trx: "M4 19 L12 17 L20 20 L28 15 L36 13 L44 16 L52 12 L60 10 L68 13 L76 11 L84 9",
    doge: "M4 15 L12 17 L20 14 L28 19 L36 16 L44 21 L52 18 L60 22 L68 20 L76 24 L84 22",
    ada: "M4 12 L12 14 L20 13 L28 17 L36 15 L44 20 L52 18 L60 23 L68 20 L76 25 L84 22",

    market1: "M4 12 L12 14 L20 13 L28 17 L36 15 L44 19 L52 17 L60 20 L68 18 L76 22 L84 19",
    market2: "M4 10 L12 12 L20 14 L28 16 L36 15 L44 20 L52 18 L60 23 L68 21 L76 25 L84 22",
    market3: "M4 22 L12 19 L20 21 L28 14 L36 24 L44 18 L52 20 L60 12 L68 16 L76 10 L84 14",
    market4: "M4 13 L12 15 L20 14 L28 18 L36 17 L44 21 L52 18 L60 22 L68 20 L76 24 L84 23",
};

const COINS = [
    { name: "Bitcoin",  symbol: "BTC",  price: "GHS 725,156.80", change: "1.58%", neg: true,  mktCap: "GHS 14.5T",  volume: "GHS 273.3B", image: bitcoin,  spark: SPARKS.btc },
    { name: "Ethereum", symbol: "ETH",  price: "GHS 20,933.05",  change: "2.37%", neg: true,  mktCap: "GHS 2.5T",   volume: "GHS 135.6B", image: ethereum, spark: SPARKS.eth },
    { name: "Tether",   symbol: "USDT", price: "GHS 10.77",      change: "0.01%", neg: false, mktCap: "GHS 2.0T",   volume: "GHS 571.0B", image: tether,   spark: SPARKS.usdt },
    { name: "BNB",      symbol: "BNB",  price: "GHS 6,669.65",   change: "1.38%", neg: true,  mktCap: "GHS 908.8B", volume: "GHS 13.0B",  image: bnb,      spark: SPARKS.bnb },
    { name: "XRP",      symbol: "XRP",  price: "GHS 14.60",      change: "0.96%", neg: true,  mktCap: "GHS 891.4B", volume: "GHS 14.4B",  image: xrp,      spark: SPARKS.xrp },
    { name: "USDC",     symbol: "USDC", price: "GHS 10.77",      change: "0.00%", neg: false, mktCap: "GHS 832.3B", volume: "GHS 54.7B",  image: usdc,     spark: SPARKS.usdc, note: "Earns 3.35% APY" },
    { name: "Solana",   symbol: "SOL",  price: "GHS 888.18",     change: "2.59%", neg: true,  mktCap: "GHS 504.9B", volume: "GHS 23.4B",  image: solana,   spark: SPARKS.sol },
    { name: "TRON",     symbol: "TRX",  price: "GHS 3.08",       change: "0.83%", neg: false, mktCap: "GHS 292.0B", volume: "GHS 4.1B",   image: tron,     spark: SPARKS.trx },
    { name: "Dogecoin", symbol: "DOGE", price: "GHS 0.96",       change: "1.62%", neg: true,  mktCap: "GHS 161.4B", volume: "GHS 7.3B",   image: dogecoin, spark: SPARKS.doge },
    { name: "Cardano",  symbol: "ADA",  price: "GHS 2.73",       change: "0.69%", neg: true,  mktCap: "GHS 98.3B",  volume: "GHS 3.7B",   image: cardano,  spark: SPARKS.ada },
];

const MARKET_STATS = [
    { label: "Total market cap", value: "GHS 24.04T", change: "1.43%", neg: true, spark: SPARKS.market1 },
    { label: "Trade volume", value: "GHS 1.16T", change: "28.66%", neg: true, spark: SPARKS.market2 },
    { label: "Buy-sell ratio", value: "GHS 0.76", change: "4.01%", neg: true, spark: SPARKS.market3 },
    { label: "BTC dominance", value: "59.95%", change: "0.30%", neg: true, spark: SPARKS.market4 },
];

const NEW_COINS = [
        {
            label: "HYPE",
            name: "Hyperliquid",
            date: "Added Feb 5",
            icon: hype,
        },
        {
            label: "JUPITER",
            name: "Jupiter",
            date: "Added Dec 9",
            icon: jupiter,
        },
        {
            label: "LIGHTER",
            name: "Lighter",
            date: "Added Jan 15",
            icon: lighter,
        },
    ];




export default function Explore() {

    const [newIndex, setNewIndex] = useState(0);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [starred, setStarred] = useState(new Set());
    const [cookieDismissed, setCookieDismissed] = useState(false);
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

            {/* ── TOP ROW ─────────────────────────────────────────────────────────── */}
            <div className="mx-auto flex max-w-[1200px] gap-6 px-4 pt-8 pb-4">

            {/* LEFT: main content */}
            <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-gray-900">Explore crypto</h1>
                <p className="mt-1 text-sm text-gray-500">
                Coinbase 50 Index is down{" "}
                    <span className="inline-flex items-center gap-1 text-red-500 font-medium">
                        <FiArrowDownLeft size={14} />
                        1.49% (24hrs)
                    </span>{" "}

                    <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 text-[9px] text-white font-bold">
                        i
                    </span>
                </p>

                {/* Search */}
                <div className="mt-4 flex items-center gap-3">
                <div className="relative flex-1 max-w-md">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                    <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for an asset"
                    className="w-full rounded-full border border-gray-200 bg-gray-100 py-2 pl-9 pr-4 text-sm outline-none focus:border-[#0052FF] focus:bg-white"
                    />
                </div>
                </div>

                
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


                <div className="mt-10">
                <div className="flex items-center justify-between mb-3">
                    <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Crypto market prices{" "}
                        <span className="text-sm font-normal text-gray-400">18,563 assets</span>
                    </h2>
                    <p className="mt-1 text-xs text-gray-500">
                        The overall crypto market is growing this week. As of today, the total crypto market capitalization is 24.04 trillion,
                        representing a 0.27% increase from last week.{" "}
                        <button className="text-[#0052FF] hover:underline font-medium">Read more</button>
                    </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {["All assets", "1D", "GHS", "10 rows"].map((f, i) => (
                    <button key={f} className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                        {i === 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>}
                        {f}
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                    </button>
                    ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                    <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100 text-xs text-gray-400">
                        <th className="w-8 px-3 py-3" />
                        <th className="px-3 py-3 text-left font-medium">
                            Asset
                            <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                        </th>
                        <th className="px-3 py-3 text-right font-medium">
                            Market price
                            <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                        </th>
                        <th className="px-3 py-3 text-center font-medium">Chart</th>
                        <th className="px-3 py-3 text-right font-medium">
                            Change
                            <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                        </th>
                        <th className="px-3 py-3 text-right font-medium text-[#0052FF]">
                            Mkt cap
                            <button className="ml-1 text-blue-300 hover:text-blue-500">⇅</button>
                        </th>
                        <th className="px-3 py-3 text-right font-medium">
                            Volume
                            <button className="ml-1 text-gray-300 hover:text-gray-500">⇅</button>
                        </th>
                        <th className="px-3 py-3 text-right font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((coin) => (
                        <tr key={coin.symbol} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                            {/* Star */}
                            <td className="px-3 py-4 text-center">
                            <button onClick={() => toggleStar(coin.symbol)} className="text-gray-300 hover:text-yellow-400 transition-colors">
                                {starred.has(coin.symbol) ? "★" : "☆"}
                            </button>
                            </td>

                            {/* Asset */}
                            <td className="px-3 py-4">
                            <div className="flex items-center gap-3">
                                <img src={coin.image} alt={coin.name} className="h-9 w-9 rounded-full" />
                                <div>
                                <p className="font-semibold text-gray-900">{coin.name}</p>
                                <p className="text-xs text-gray-400">
                                    {coin.symbol}
                                    {coin.note && <span className="ml-1 text-emerald-600">• {coin.note}</span>}
                                </p>
                                </div>
                            </div>
                            </td>

                            {/* Price */}
                            <td className="px-3 py-4 text-right font-semibold text-gray-900">
                            {coin.price}
                            </td>

                            {/* Sparkline */}
                            <td className="px-3 py-4 text-center">
                            <svg viewBox="0 0 90 30" className="h-8 w-20 mx-auto">
                                <path
                                    d={coin.spark}
                                    fill="none"
                                    stroke={coin.neg ? "#DC2626" : "#16A34A"}
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            </td>

                            {/* Change */}
                            <td className={`px-3 py-4 text-right font-medium ${coin.neg ? "text-red-500" : "text-emerald-500"}`}>
                                <div className="flex items-center justify-end gap-1">
                                    {coin.neg ? <FiArrowDownLeft size={14} /> : <FiArrowUpRight size={14} />}
                                    <span>{coin.change.replace(/^[+-]/, "")}</span>
                                </div>
                            </td>

                            {/* Mkt cap */}
                            <td className="px-3 py-4 text-right text-gray-700">{coin.mktCap}</td>

                            {/* Volume */}
                            <td className="px-3 py-4 text-right text-gray-700">{coin.volume}</td>

                            {/* Trade button */}
                            <td className="px-3 py-4 text-right">
                            {coin.symbol !== "TRX" && (
                                <button
                                onClick={() => navigate("/signup")}
                                className="rounded-full bg-[#0052FF] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#0046d6] transition-colors"
                                >
                                Trade
                                </button>
                            )}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex items-center justify-center gap-2">
                    {[1, 2, 3, "...", "1,857"].map((p, i) => (
                    <button
                        key={i}
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors
                        ${p === 1 ? "bg-[#0052FF] text-white" : "text-gray-600 hover:bg-gray-100"}`}
                    >
                        {p}
                    </button>
                    ))}
                    <button className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
                <p className="mt-2 text-center text-xs text-gray-400">1–10 of 18,563 assets</p>
                </div>

                
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
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="hidden lg:block w-[280px] flex-shrink-0 space-y-4 pt-0">
                {/* Get started card */}
                <div className="overflow-hidden rounded-2xl bg-[#0052FF] p-5 text-white">
                <p className="text-lg font-bold">Get started</p>
                <p className="text-xs text-blue-200 mt-1">Create your account today</p>
                {/* decorative coin */}
                <div className="my-4 flex justify-end">
                    <img 
                    src={nuxPopularAssets}
                    alt="Popular assets"
                    className="h-25 w-20 opacity-90"

                    />
                </div>
                <button
                    onClick={() => navigate("/signup")}
                    className="w-[100px] rounded-full bg-white py-2 text-sm font-semibold text-[#000000] hover:bg-[#0052FF] transition-colors"
                >
                    Sign up
                </button>
                </div>

                {/* Top movers */}
                <div className="rounded-2xl border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-3">
                    <p className="font-bold text-gray-900">Top movers</p>
                    <div className="flex gap-1">
                    <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                    </div>
                </div>
                <p className="text-xs text-gray-400 mb-3">24hr change</p>
                <div className="grid grid-cols-2 gap-2">
                    {[
                    { symbol: "PRCL", price: "GHS 0.21", change: "34.39%", pos: true,  icon: prcl },
                    { symbol: "FAI",  price: "GHS 0.0653",change: "31.02%", pos: false, icon: fai },
                    ].map((m) => (
                    <div key={m.symbol} className="rounded-xl bg-gray-50 p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-200 text-sm mb-2">
                        <img
                        src={m.icon}
                        />
                        </div>
                        <p className="text-xs font-bold text-gray-900">{m.symbol}</p>
                        <p className={`text-sm font-bold mt-0.5 ${m.pos ? "text-emerald-500" : "text-red-500"}`}>
                            {(m.symbol == "PRCL")? <FiArrowUpRight size={14} /> : <FiArrowDownLeft size={14} />} {m.change}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{m.price}</p>
                    </div>
                    ))}
                </div>
                </div>

               {/* New on Coinbase */}
                <div className="rounded-2xl border border-gray-100 p-4">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <p className="font-bold text-gray-900 text-sm">New on Coinbase</p>

                    <div className="flex gap-1">

                    {/* LEFT */}
                    <button
                        onClick={() =>
                        setNewIndex((prev) =>
                            prev === 0 ? NEW_COINS.length - 2 : prev - 1
                        )
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                    >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>

                    {/* RIGHT */}
                    <button
                        onClick={() =>
                        setNewIndex((prev) =>
                            (prev + 1) % (NEW_COINS.length - 1)
                        )
                        }
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                    >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>

                    </div>
                </div>

                {/* Cards */}
                <div className="flex gap-3">

                    {NEW_COINS.slice(newIndex, newIndex + 2).map((coin) => (

                    <div
                        key={coin.label}
                        className="flex-1 rounded-2xl bg-gray-100 p-4 cursor-pointer hover:bg-gray-200 transition"
                    >

                        <img
                        src={coin.icon}
                        alt={coin.name}
                        className="h-10 w-10 rounded-full mb-3"
                        />

                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {coin.label}
                        </p>

                        <p className="text-sm font-bold text-gray-900">
                        {coin.name}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                        {coin.date}
                        </p>

                    </div>

                    ))}

                </div>
                </div>
            </div>
            </div>


            
            {!cookieDismissed && (
            <div className="fixed bottom-0 right-0 z-50 m-4 max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl">
                <div className="flex justify-between items-start gap-3">
                <p className="text-xs text-gray-600 leading-relaxed">
                    We use cookies to make your interactions with our website more meaningful. They help us
                    better understand how our websites are used, so we can tailor content for you. For more
                    information about the different cookies we are using, read the{" "}
                    <a href="#" className="text-[#0052FF] hover:underline">Cookie Policy</a>.
                    To change your cookie settings and preferences, click the Customize Cookies button.
                </p>
                <button onClick={() => setCookieDismissed(true)} className="flex-shrink-0 text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
                </div>
                <div className="mt-4 flex gap-2 justify-end">
                <button
                    onClick={() => setCookieDismissed(true)}
                    className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                    Customize Cookies
                </button>
                <button
                    onClick={() => setCookieDismissed(true)}
                    className="rounded-full border border-gray-800 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                >
                    Reject
                </button>
                <button
                    onClick={() => setCookieDismissed(true)}
                    className="rounded-full bg-[#0052FF] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0046d6]"
                >
                    Accept
                </button>
                </div>
            </div>
            )}
        </div>
        </PageLayout>
    );
}
