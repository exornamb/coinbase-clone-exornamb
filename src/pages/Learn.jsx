import { Link } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";

import featuredImg    from "../assets/blog_featured.png";
import bitcoinBasicImg from "../assets/blog1.avif";
import defiImg        from "../assets/blog2.png";
import ethereumImg    from "../assets/blog3.avif";
import defiWhatImg    from "../assets/blog_defi.png";
import stablecoinImg  from "../assets/blog_stablecoin.png";
import fudImg         from "../assets/blog_fud.png";
import donateCryptoImg from "../assets/blog_donate.png";
import walletSetupImg  from "../assets/blog_wallet_setup.png";
import bestTimeImg     from "../assets/blog_featured.png";
import retirementImg   from "../assets/blog_retirement.png";
import techAnalysisImg from "../assets/blog_techanalysis.png";
import futuresDataImg  from "../assets/blog_futuresdata.png";
import tradingChartsImg from "../assets/blog_tradingcharts.png";
import orderBookImg    from "../assets/blog_orderbook.png";
import futuresIntroImg from "../assets/blog_futures_intro.png";
import futuresFundImg  from "../assets/blog_futures_fund.png";
import futuresOpenImg  from "../assets/blog_futures_open.png";
import futuresStratImg from "../assets/blog_futures_strat.png";
import walletDiffImg   from "../assets/blog_walletdiff.png";
import walletSetup2Img from "../assets/blog_wallet_setup.png";
import walletAddImg    from "../assets/blog_walletadd.png";
import walletSendImg   from "../assets/blog_walletsend.webp";
import crypto1 from "../assets/crypto1.png";
import tips from "../assets/tips.png";
import trading from "../assets/trading2.png";
import futures from "../assets/futures.png";
import { FiArrowRight } from "react-icons/fi";


const WHAT_IS_TAGS = [
  "Bitcoin","Blockchain","Cardano","Crypto wallet","DeFi","Ethereum",
  "Fork","Inflation","Market cap","NFT","Private key","Protocol",
  "Smart contract","Token","Volatility","Memecoin",
];

const POPULAR = [
  { tag: "BEGINNER'S GUIDE",  title: "What is cryptocurrency?" },
  { tag: "GETTING STARTED",   title: "How to earn crypto rewards" },
  { tag: "GETTING STARTED",   title: "How to add crypto to your Coinbase Wallet" },
  { tag: "YOUR CRYPTO",        title: "Tax forms, explained: A guide to U.S. tax forms and crypto reports" },
  { tag: "GETTING STARTED",   title: "Beginner's guide to dapps" },
  { tag: "MARKET UPDATE",     title: "Everything you need to know about the first-ever U.S. Bitcoin ETF" },
];


// Standard article card
function ArticleCard({ image, tag, title, excerpt, isVideo, wide, to = "/learn" }) {
  return (
    <Link to={to} className="group block">
      <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${wide ? "h-[220px]" : "h-[160px]"}`}>
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        {isVideo}
      </div>
      {tag && <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">{tag}</p>}
      <h3 className="mt-1 text-sm font-semibold text-gray-900 group-hover:underline leading-snug">{title}</h3>
      {excerpt && <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-3">{excerpt}</p>}
    </Link>
  );
}

// "See more" blue pill button
function SeeMoreBtn({ label, to = "/learn" }) {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        to={to}
        className="flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[#0046d6] transition-colors"
      >
        {label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </Link>
    </div>
  );
}


export default function Learn() {
  

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">


        <section className="border-b border-gray-100 py-12 px-4">
          <div className="mx-auto max-w-[900px]">
            <h1 className="text-center text-4xl font-bold text-gray-900">Crypto questions, answered</h1>
            <p className="mt-2 text-center text-sm text-gray-500">
              Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
            </p>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_260px]">
              {/* Featured */}
              <div>
                <p className="mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Featured</p>
                <Link to="/learn" className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-[220px]">
                    <img src={featuredImg} alt="Featured" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    
                  </div>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">VIDEO TUTORIAL</p>
                  <h2 className="mt-1 text-base font-bold text-gray-900 group-hover:underline">When is the best time to invest in crypto?</h2>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    When prices are fluctuating, how do you know when to buy? Learn more about using dollar-cost averaging to weather price volatility.
                  </p>
                </Link>

                {/* Category quick links */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: "Crypto basics",    icon: crypto1 },
                    { label: "Tips and tutorials",icon: tips },
                    { label: "Advanced trading",  icon: trading },
                    { label: "Futures",           icon: futures },
                  ].map((cat) => (
                    <Link
                      key={cat.label}
                      to="/learn"
                      className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-lg"><img src={cat.icon}className="w-20 h-auto"/></span>
                      <span>{cat.label}<br/><span className="font-normal text-[#000000]">See more <FiArrowRight size={10}/></span></span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular sidebar */}
              <div>
                <p className="mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Popular</p>
                <ul className="space-y-4">
                  {POPULAR.map((item) => (
                    <li key={item.title}>
                      <Link to="/learn" className="group block">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">{item.tag}</p>
                        <p className="mt-0.5 text-xs font-semibold text-gray-900 group-hover:underline leading-snug">{item.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section className="py-14 px-4">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-center text-3xl font-bold text-gray-900">Crypto basics</h2>
            <p className="mt-2 text-center text-sm text-gray-500">New to crypto? Not for long — start with these guides and explainers</p>

            {/* Top 2 wide cards */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ArticleCard wide image={bitcoinBasicImg} tag="BEGINNER'S GUIDE" title="What is Bitcoin?"
                excerpt="Bitcoin is the world's first widely adopted cryptocurrency — it allows for secure and seamless peer-to-peer transactions on the Internet." />
              <ArticleCard wide image={defiImg} tag="BEGINNER'S GUIDE" title="Guide to DeFi tokens and altcoins"
                excerpt="From Aave to Zcash, decide what to trade with our beginner's guide" />
            </div>

            {/* Bottom 4 small cards */}
            <div className="mt-6 grid gap-6 grid-cols-2 sm:grid-cols-4">
              <ArticleCard image={ethereumImg}   tag="BEGINNER'S GUIDE" title="What is Ethereum?" />
              <ArticleCard image={defiWhatImg}   tag="KEY TERM"         title="What is DeFi?" />
              <ArticleCard image={stablecoinImg} tag="BEGINNER'S GUIDE" title="What is a stablecoin?" />
              <ArticleCard image={fudImg}        tag="GLOSSARY"
                title="Don't let FUD give you FOMO or you'll end up REKT — crypto slang, explained" />
            </div>

            <SeeMoreBtn label="See more crypto basics" />
          </div>
        </section>

        {/* ── WHAT IS… tag cloud ───────────────────────────────────────────────── */}
        <section className="bg-[#F5F7FA] py-14 px-4">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-center text-3xl font-bold text-gray-900">What is...</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {WHAT_IS_TAGS.map((tag) => (
                <Link
                  key={tag}
                  to="/learn"
                  className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <SeeMoreBtn label="See more" />
          </div>
        </section>

        {/* ── TIPS AND TUTORIALS ───────────────────────────────────────────────── */}
        <section className="py-14 px-4">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-center text-3xl font-bold text-gray-900">Tips and tutorials</h2>
            <p className="mt-2 text-center text-sm text-gray-500">Get practical, step-by-step answers to all things crypto</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ArticleCard wide image={donateCryptoImg} tag="GETTING STARTED" title="How to donate crypto" />
              <ArticleCard wide image={walletSetupImg}  tag="VIDEO TUTORIAL"  title="How to set up a crypto wallet" isVideo />
              <ArticleCard wide image={bestTimeImg}     tag="VIDEO TUTORIAL"  title="When is the best time to invest in crypto?" isVideo />
              <ArticleCard wide image={retirementImg}   tag="YOUR CRYPTO"     title="How to invest in crypto via your retirement account" />
            </div>

            <SeeMoreBtn label="See more tips and tutorials" />
          </div>
        </section>


        <section className="border-t border-gray-100 py-14 px-4">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-center text-3xl font-bold text-gray-900">Advanced trading</h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Ready to advance? Learn the tools and terminology you need to take control of your trades.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ArticleCard wide image={techAnalysisImg} tag="KEY TERM"      title="What is technical analysis?" />
              <ArticleCard wide image={futuresDataImg}  tag="ADVANCED GUIDE" title="How can I use crypto futures market data for spot trading?" />
              <ArticleCard wide image={tradingChartsImg} tag="ADVANCED GUIDE" title="How to read advanced trading charts" isVideo />
              <ArticleCard wide image={orderBookImg}    tag="KEY TERM"      title="What is an order book?" isVideo />
            </div>

            <SeeMoreBtn label="See more advanced trading" />
          </div>
        </section>

        <section className="border-t border-gray-100 py-14 px-4">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-center text-3xl font-bold text-gray-900">Futures</h2>
            <p className="mt-2 text-center text-sm text-gray-500">New to futures trading? Get up to speed on the basics.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ArticleCard wide image={futuresIntroImg} title="Futures: Introductions and origins" />
              <ArticleCard wide image={futuresFundImg}  title="Futures fundamentals: Understanding the basics" />
              <ArticleCard wide image={futuresOpenImg}  title="Opening, holding, and closing a position in the futures market" />
              <ArticleCard wide image={futuresStratImg} title="Trading strategies: Speculating, hedging, and spreading in the futures market" />
            </div>

            <SeeMoreBtn label="See more about futures" />
          </div>
        </section>


        <section className="border-t border-gray-100 py-14 px-4">
          <div className="mx-auto max-w-[900px]">
            <h2 className="text-center text-3xl font-bold text-gray-900">All Things Wallet</h2>
            <p className="mt-2 text-center text-sm text-gray-500">
              Earn yield, dive into crypto apps, control your holdings, and much more
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <ArticleCard wide image={walletDiffImg} title="What's the difference between Coinbase and Coinbase Wallet?"
                excerpt="And how can a wallet help me access NFTs or DeFi? Your self-custody wallet questions, answered" />
              <ArticleCard wide image={walletSetup2Img} tag="VIDEO TUTORIAL" title="How to set up a crypto wallet"
                excerpt="Learn how to setup and get started with a crypto wallet." isVideo />
              <ArticleCard wide image={walletAddImg} tag="GETTING STARTED" title="How to add crypto to your Coinbase Wallet"
                excerpt="A quick guide on how to add crypto to your Coinbase self-custody wallet." />
              <ArticleCard wide image={walletSendImg} title="How to send or receive crypto using Coinbase Wallet"
                excerpt="Coinbase Wallet helps you unlock one of the most significant features of crypto: the ability to send or receive peer-to-peer transfers without any financial intermediaries." />
            </div>

            <SeeMoreBtn label="See more Wallet articles" />
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
