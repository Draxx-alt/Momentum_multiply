import JoinMultiplyForm from "@/components/JoinMultiplyForm";
import Link from "next/link";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-brand-off-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="mx-auto flex h-[60px] max-w-[1440px] items-center justify-between px-4 md:h-[100px] md:px-8">
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/" className="flex items-center gap-1 md:gap-2">
              <span className="text-base font-bold tracking-tight text-brand-navy md:text-xl">
                MOMENTUM
              </span>
              <span className="text-base font-light text-brand-navy md:text-xl">
                MULTIPLY
              </span>
            </Link>
            <Link
              href="/continue"
              className="text-xs font-bold text-brand-navy transition-colors hover:text-brand-purple md:text-[15px]"
            >
              My journey
            </Link>
          </div>
          <a
            href="/join"
            className="rounded-full bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700 md:px-8 md:py-2.5 md:text-sm"
          >
            Join Multiply
          </a>
        </div>
      </nav>

      <section className="flex min-h-screen items-center justify-center px-4 pt-[60px] md:pt-[100px]">
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <JoinMultiplyForm />
        </div>
      </section>
    </main>
  );
}
