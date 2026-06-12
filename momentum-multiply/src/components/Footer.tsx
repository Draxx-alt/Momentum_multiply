export default function Footer() {
  return (
    <footer className="relative bg-multiply-indigo-dark text-white/60 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              Momentum Multiply
            </h3>
            <p className="text-sm leading-relaxed">
              Rewarding you for the small, positive choices you make every day.
              Because your future self is closer than you think.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Campaign
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About the Campaign
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Five Pillars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Activations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Competition
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Multiply
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Multiply
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mind Matters Summit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wider uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  POPIA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Competition Rules
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Momentum Multiply. All rights reserved.</p>
          <p className="text-white/30">
            &ldquo;The future you is created by what you do today.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
