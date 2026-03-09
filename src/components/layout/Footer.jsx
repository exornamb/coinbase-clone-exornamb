import logo from "../../assets/coinbase_logo.png";

export default function Footer() {
    return (
        <footer className="bg-[#EEF1F4]">
        <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-5">
            {/* logo */}
            <div className="lg:col-span-1">
                <div className="flex items-center gap-3">
                <img
                    src={logo}
                    alt="Coinbase"
                    className="h-9 w-auto"
                />
                </div>
            </div>

            {/* columns */}
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
                <FooterCol
                title="Company"
                items={[
                    "About",
                    "Careers",
                    "Blog",
                    "Press",
                    "Security",
                    "Vendors",
                    "Legal & privacy",
                    "Cookie policy",
                    "Cookie preferences",
                    "Digital Asset Disclosures",
                    "UK Modern Slavery Statement",
                ]}
                />
                <FooterCol
                title="Individuals"
                items={[
                    "Buy & sell",
                    "Base App",
                    "Coinbase One",
                    "Debit Card",
                    "Derivatives",
                    "Token Sales",
                    "Savings",
                    "Businesses",
                    "Asset Listings",
                    "Payments",
                    "Commerce",
                    "Prime",
                    "Staking",
                    "Exchange",
                    "International Exchange",
                    "Verified Pools",
                ]}
                />
                <FooterCol
                title="Developers"
                items={[
                    "Developer Platform",
                    "Base",
                    "Server Wallets",
                    "Embedded Wallets",
                    "Base Accounts (Smart Wallets)",
                    "Onramp & offramp",
                    "x402",
                    "Trade API",
                    "Paymaster",
                    "OnchainKit",
                    "Data API",
                    "Verifications",
                    "Node",
                    "AgentKit",
                    "Staking",
                    "Faucet",
                    "Exchange API",
                    "International Exchange API",
                    "Prime API",
                ]}
                />
                <FooterCol
                title="Support"
                items={[
                    "Help center",
                    "Contact us",
                    "Create account",
                    "ID verification",
                    "Account information",
                    "Payment methods",
                    "Account access",
                    "Supported crypto",
                    "Status",
                    "Asset prices",
                    "Bitcoin price",
                    "Ethereum price",
                    "Solana price",
                    "XRP price",
                    "Stock prices",
                    "NVIDIA price",
                    "Apple price",
                    "Microsoft price",
                ]}
                />
            </div>
            </div>

            <div className="mt-12 border-t border-gray-300 pt-6 text-xs text-gray-600">
            © {new Date().getFullYear()} Coinbase • Privacy • Terms & Conditions
            </div>
        </div>
        </footer>
    );
}

function FooterCol({ title, items }) {
    return (
        <div>
        <h4 className="text-xs font-bold uppercase tracking-wide text-gray-700">
            {title}
        </h4>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {items.map((t) => (
            <li key={t}>
                <a href="#" className="hover:text-gray-900">
                {t}
                </a>
            </li>
            ))}
        </ul>
        </div>
    );
}