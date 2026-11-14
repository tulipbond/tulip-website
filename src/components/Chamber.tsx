import Link from "next/link";

function Chamber() {
  return (
    <section className="pb-8">
      <div className="shell">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-10 sm:px-10 sm:py-12">
          <div
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-red-600/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Memberships
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                Tulip Bonded Warehouse is a member of the SITE Association of
                Industry and the Karachi Chamber of Commerce and Industry.
              </h2>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                  SITE Association of Industry
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
                  Karachi Chamber of Commerce
                </span>
              </div>
              <Link href="/contact" className="btn-primary">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chamber;
