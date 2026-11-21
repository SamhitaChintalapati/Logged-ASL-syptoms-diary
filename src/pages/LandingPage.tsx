import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Quick log entry',
    description:
      'Pick a date and one area, such as speech, swallowing or breathing. Rate how hard it was today from 1 to 5, and add a short note if you want.',
  },
  {
    title: 'Your diary',
    description:
      'See entries from newest to oldest, filter them by area, and edit or delete any entry.',
  },
  {
    title: 'Summary for visits',
    description:
      'Print the last 90 days, grouped by area, to bring to your doctor.',
  },
]

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-lg text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:outline-2 focus:outline-blue-800"
      >
        Skip to main content
      </a>

      <main id="main" className="flex-1">
        <section className="bg-blue-50 px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Logged
              </h1>
              <p className="mt-2 text-2xl font-semibold text-blue-900 sm:text-3xl">
                An ALS symptom diary
              </p>
              <p className="mt-6 text-xl leading-relaxed">
                A simple diary for adults with ALS, or their caregivers, to log
                day-to-day symptom changes and bring a clear record to doctor
                visits.
              </p>
              <p className="mt-4 font-medium">
                It never diagnoses or interprets symptoms. It uses made-up demo
                data only.
              </p>
              <Link
                to="/app"
                className="mt-8 inline-flex min-h-14 items-center rounded-lg bg-blue-800 px-8 text-xl font-semibold text-white hover:bg-blue-900 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
              >
                Get started
              </Link>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="features-heading"
          className="px-4 py-12 sm:px-8 sm:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <h2 id="features-heading" className="text-3xl font-bold">
              What you can do
            </h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 sm:px-8">
        <p className="mx-auto max-w-5xl font-medium">
          For education only. Not medical advice. In an emergency, call your
          local emergency number.
        </p>
      </footer>
    </div>
  )
}

export default LandingPage
