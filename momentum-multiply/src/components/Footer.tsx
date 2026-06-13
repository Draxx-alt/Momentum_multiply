export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-[1440px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-[48px] font-bold leading-[1.1]">
              This is your journey. <br />
              Unlock the future you!
            </p>
            <a
              href="#how-feeling"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-purple px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all hover:bg-brand-purple/80"
            >
              Choose your journey
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">About Multiply</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  What is Multiply?
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  Rewards
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Terms and conditions</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  Competition rules
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  POPIA compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Privacy policy</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                  PAIA Manual
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Momentum Multiply. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
