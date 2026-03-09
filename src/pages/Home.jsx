import PageLayout from "../components/layout/PageLayout";
import Button from "../components/common/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import tether from "../assets/tether.png";
import usdc from "../assets/usdc.png";
import bnb from "../assets/bnb.png";
import xrp from "../assets/xrp.png";
import oneImg from "../assets/zero_en-gb_2 (1).avif";
import baseAppImg from "../assets/base_app.png"; 
import coinClusterImg from "../assets/coin_cluster.avif";
import blog1Img from "../assets/blog1.avif"; 
import blog2Img from "../assets/blog2.png"; 
import blog3Img from "../assets/blog3.avif"; 
import advancedImg from "../assets/Advanced (8).png";
import Hero from "../assets/Hero.png";

export default function Home() {
    const navigate = useNavigate();

    // HERO input functionality (email -> signup)
    const [email, setEmail] = useState("");
    const goSignup = () => navigate("/signup", { state: { email } });


    return (
        <PageLayout>
        {/* HERO */}
        <section className="bg-white">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2">
            {/* LEFT: video/visual */}
            <div className="flex justify-center lg:justify-start">
                <div className="w-full max-w-[520px] overflow-hidden rounded-[44px] p-8">
                <div className="overflow-hidden rounded-[36px] bg-white/10">
                    <img
                    src={Hero}
                    alt="Hero"
                    className="h-[520px] w-full object-cover"
                    />
                </div>
                </div>
            </div>

            {/* RIGHT: headline + input */}
            <div className="mx-auto w-full max-w-xl text-center lg:text-left">
                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl">
                The future of <br />
                finance is here.
                </h1>
                <p className="mt-5 text-sm text-gray-600">Trade crypto and more on a platform you can trust.</p>

                <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="satoshi@nakamoto.com"
                    className="h-11 flex-1 rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none focus:border-[#0052FF]"
                />
                <button
                    onClick={goSignup}
                    className="h-11 rounded-full bg-[#0052FF] px-6 text-sm font-semibold text-white hover:brightness-95"
                >
                    Sign up
                </button>
                </div>

                <p className="mt-6 text-[11px] text-gray-500">
                Stocks and prediction markets not available in your jurisdiction.
                </p>
            </div>
            </div>
        </section>


        {/* EXPLORE + COIN LIST (light grey band) */}
        <section className="bg-[#EEF1F4] py-20">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-10 lg:grid-cols-2">
                {/* left text */}
                <div className="mx-auto max-w-md text-center lg:text-left">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                    Explore crypto like Bitcoin,
                    <br />
                    Ethereum, and Dogecoin.
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                    Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
                </p>

                <div className="mt-6">
                    <Link
                    to="/explore"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    See more assets
                    </Link>
                </div>
                </div>

                {/* right black card */}
                <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-3xl bg-[#0A0F14] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
                    {/* tabs */}
                    <div className="flex items-center gap-3 pb-4">
                    <button className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold">
                        Tradable
                    </button>
                    <button className="px-2 py-1 text-[10px] text-white/70 hover:text-white">
                        Top gainers
                    </button>
                    <button className="px-2 py-1 text-[10px] text-white/70 hover:text-white">
                        New on Coinbase
                    </button>
                    </div>

                    {/* list */}
                    <div className="space-y-4">
                    <CoinRow name="Bitcoin" symbol="BTC" price="£53,767.57" change="-0.35%" image={bitcoin} negative />
                    <CoinRow name="Ethereum" symbol="ETH" price="£1,559.11" change="-2.63%" image={ethereum} negative />
                    <CoinRow name="Tether" symbol="USDT" price="£0.75" change="0.00%" image={tether} />
                    <CoinRow name="BNB" symbol="BNB" price="£487.62" change="+0.06%" image={bnb} />
                    <CoinRow name="XRP" symbol="XRP" price="£1.06" change="-1.56%" image={xrp} negative />
                    <CoinRow name="USDC" symbol="USDC" price="£0.75" change="0.00%" image={usdc} />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>


        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* image */}
                <div className="flex justify-center lg:justify-start">
                <div className="overflow-hidden rounded-[40px] bg-black p-10 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
                    <img src={advancedImg} alt="Advanced Trade" className="h-[260px] w-auto object-contain" />
                </div>
                </div>

                {/* copy */}
                <div className="mx-auto max-w-xl text-center lg:text-left">
                <h3 className="text-4xl font-semibold tracking-tight text-gray-900">
                    Powerful tools, designed <br />
                    for the advanced trader.
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                    Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading
                    experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity
                    across hundreds of markets.
                </p>

                <div className="mt-7">
                    <Link
                    to="/trade"
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    Start trading
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* COINBASE ONE */}
        <section className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* left image */}
                <div className="flex justify-center lg:justify-end">
                <div className="rounded-3xl bg-[#F3F4F6] p-10">
                    <img src={oneImg} alt="Coinbase One" className="h-[280px] w-auto object-contain" />
                </div>
                </div>

                {/* right text */}
                <div className="mx-auto max-w-md text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-black" />
                    COINBASE ONE
                </span>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
                    Zero trading fees,
                    <br />
                    more rewards.
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                    Get more out of crypto with one membership: zero trading fees, boosted rewards,
                    priority support, and more.
                </p>

                <div className="mt-6">
                    <Link
                    to="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    Claim free trial
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* ✅ NEW: BASE APP section (remove old advanced/trust, add this) */}
        <section className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-14 lg:grid-cols-2">
                {/* left image */}
                <div className="flex justify-center lg:justify-start">
                <div className="rounded-3xl bg-[#EEF1F4] p-10">
                    <img
                    src={baseAppImg}
                    alt="Base App"
                    className="h-[320px] w-auto object-contain"
                    />
                </div>
                </div>

                {/* right text */}
                <div className="mx-auto max-w-md text-center lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-black" />
                    BASE APP
                </span>

                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900">
                    Countless ways to earn
                    <br />
                    crypto with the Base App.
                </h3>

                <p className="mt-3 text-sm text-gray-600">
                    An everything app to trade, create, discover, and chat, all in one place.
                </p>

                <div className="mt-6">
                    <Link
                    to="/learn"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    Learn more
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* ✅ NEW: NEW TO CRYPTO section (grey band + 3 cards) */}
        <section className="bg-[#EEF1F4] py-20">
            <div className="mx-auto max-w-6xl px-4">
            {/* header row */}
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <h3 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                New to crypto?
                <br />
                Learn some
                <br />
                crypto basics
                </h3>

                <div className="max-w-md">
                <p className="text-sm text-gray-600">
                    Beginner guides, practical tips, and market updates for first-timers,
                    experienced investors, and everyone in between
                </p>

                <div className="mt-5">
                    <Link
                    to="/learn"
                    className="inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800"
                    >
                    Read More
                    </Link>
                </div>
                </div>
            </div>

            {/* 3 cards */}
            <div className="mt-10 grid gap-8 md:grid-cols-3">
                <BlogCard
                image={blog1Img}
                title="USDC: The digital dollar for the global crypto economy"
                excerpt="Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more..."
                to="/learn"
                />
                <BlogCard
                image={blog2Img}
                title="Can crypto really replace your bank account?"
                excerpt="If you're a big enough fan of crypto, you've probably heard the phrase “be your own bank” or the term “bankless” — the idea being that..."
                to="/learn"
                />
                <BlogCard
                image={blog3Img}
                title="When is the best time to invest in crypto?"
                excerpt="Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause..."
                to="/learn"
                />
            </div>
            </div>
        </section>

        {/* ✅ NEW: TAKE CONTROL section */}
        <section className="bg-white py-24">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-14 lg:grid-cols-2">
                {/* left */}
                <div className="mx-auto max-w-md text-center lg:text-left">
                <h3 className="text-5xl font-semibold leading-tight tracking-tight text-gray-900">
                    Take control
                    <br />
                    of your money
                </h3>

                <p className="mt-4 text-sm text-gray-600">
                    Start your portfolio today and discover crypto
                </p>

                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                    <input
                    defaultValue="satoshi@nakamoto.com"
                    className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-[#0052FF]"
                    />
                    <button
                    onClick={() => navigate("/signup")}
                    className="h-11 shrink-0 rounded-full bg-[#0052FF] px-6 text-sm font-semibold text-white hover:bg-[#0146d6]"
                    >
                    Sign up
                    </button>
                </div>
                </div>

                {/* right image */}
                <div className="flex justify-center lg:justify-end">
                <img
                    src={coinClusterImg}
                    alt="Crypto icons"
                    className="w-full max-w-md object-contain"
                />
                </div>
            </div>

            {/* ✅ disclaimer ABOVE footer */}
            <div className="mt-24 text-center text-[11px] leading-5 text-gray-500">
                <p>DEX trading is offered by Coinbase Bermuda Technologies Ltd.</p>
                <p className="mt-2">
                Products and features may not be available in all regions. Information is for informational purposes only,
                and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares,
                or to participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice,
                or investment recommendations. Trading cryptocurrency comes with risk.
                </p>
            </div>
            </div>
        </section>
        </PageLayout>
    );
}

/* ---------- small components ---------- */

function CoinRow({ name, symbol, price, change, image, negative }) {
    return (
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img src={image} alt={name} className="h-8 w-8 rounded-full" />
            <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-[11px] text-white/60">{symbol}</p>
            </div>
        </div>

        <div className="text-right">
            <p className="text-sm font-semibold">{price}</p>
            <p className={`text-[11px] ${negative ? "text-red-400" : "text-emerald-400"}`}>
            {change}
            </p>
        </div>
        </div>
    );
}

function BlogCard({ image, title, excerpt, to }) {
    return (
        <Link to={to} className="group block">
        <div className="overflow-hidden rounded-2xl bg-white/0">
            <img
            src={image}
            alt={title}
            className="h-[140px] w-full rounded-2xl object-cover"
            />
        </div>

        <h4 className="mt-4 text-sm font-semibold text-gray-900 group-hover:underline">
            {title}
        </h4>
        <p className="mt-2 text-xs leading-5 text-gray-600">{excerpt}</p>
        </Link>
    );
}