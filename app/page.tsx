export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Small Businesses
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chasing Invoices.<br />
          <span className="text-[#58a6ff]">Automate Payment Follow-ups.</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          PayEnforcer tracks your invoice due dates and fires off escalating email &amp; SMS reminders automatically — so you get paid without the awkward nudges.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No contracts. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Due Date Tracking</h3>
            <p className="text-sm text-[#8b949e]">Automatically monitors every invoice and flags overdue payments daily.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📨</div>
            <h3 className="font-semibold text-white mb-1">Escalating Reminders</h3>
            <p className="text-sm text-[#8b949e]">Customizable email &amp; SMS sequences that get firmer as invoices age.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚖️</div>
            <h3 className="font-semibold text-white mb-1">Collections Escalation</h3>
            <p className="text-sm text-[#8b949e]">Automatically escalate to collections workflows when clients go silent.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited invoices</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email &amp; SMS reminders</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Customizable templates</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Collections escalation</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Payment processor integrations</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the reminder sequence work?</h3>
            <p className="text-sm text-[#8b949e]">A cron job checks overdue invoices daily. It sends a polite reminder at 3 days overdue, a firmer one at 7 days, and an escalation notice at 14 days — all fully customizable.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which payment processors are supported?</h3>
            <p className="text-sm text-[#8b949e]">PayEnforcer integrates with Stripe, PayPal, and Square. Payment links are embedded directly in reminder emails so clients can pay instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your account dashboard at any time with no penalties. Your reminders stop at the end of the billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} PayEnforcer. All rights reserved.
      </footer>
    </main>
  );
}
