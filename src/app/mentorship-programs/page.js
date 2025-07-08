import Image from "next/image";
import Link from "next/link";

const MentorshipSection = () => {
  const partners = [
    { name: "", logo: "/images/logo.png" },
    { name: "", logo: "/images/logo.png" },
    { name: "", logo: "/images/logo.png" },
    { name: "", logo: "/images/logo.png" },
    { name: "", logo: "/images/logo.png" },
    { name: "", logo: "/images/logo.png" },
    { name: "", logo: "/images/logo.png" },
    { name: "", logo: "/images/logo.png" },
  ];
  return (
    <section className="relative bg-white py-40 px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[#25ABBE] to-[#1A6DAF] opacity-10"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div> */}

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#25ABBE] to-[#1A6DAF] mb-6">
              Mentorship & Programs
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mentorship That Moves You Forward
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Logisense.AI, mentorship isn&apos;t one-size-fits-all. We
              tailor our approach based on your industry, stage of growth, and
              business challenges. Our hands-on support empowers you to make
              strategic decisions with confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-[#25ABBE] mb-4 flex items-center">
                  <span className="w-3 h-3 bg-[#25ABBE] rounded-full mr-2"></span>
                  Our Focus Areas:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Corporate Governance for Startups",
                    "Business Model Validation",
                    "Industry Networking and Alliances",
                    "Growth and Scalability Strategy",
                    "College Start-up Incubation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#25ABBE] mb-4 flex items-center">
                  <span className="w-3 h-3 bg-[#25ABBE] rounded-full mr-2"></span>
                  Who Should Join:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Early-stage startups seeking structure and direction",
                    "College teams with entrepreneurial ideas",
                    "Founders needing guidance on scaling and governance",
                    "Industry disruptors ready for their next leap",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Let&apos;s co-create the next wave of impactful enterprises.
              </h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button
                    className="px-8 py-3 bg-gradient-to-r from-[#25ABBE] to-[#1A6DAF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    //   onClick={() => {
                    //   }}
                  >
                    Apply for Mentorship
                  </button>
                </Link>
                <Link href="/contact">
                  <button
                    className="px-8 py-3 bg-white text-[#25ABBE] font-semibold rounded-lg border-2 border-[#25ABBE] shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    //   onClick={() => {
                    //   }}
                  >
                    Partner With Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10">
            <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/mentorship.jpg" // Replace with your actual image path
                alt="Mentorship collaboration"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-70"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg max-w-xs z-20 border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg
                    className="h-6 w-6 text-[#25ABBE]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Tailored Guidance</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Personalized mentorship programs based on your unique needs
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-lg max-w-xs z-20 border border-indigo-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg
                    className="h-6 w-6 text-[#25ABBE]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Proven Results</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    85% of startups see growth within 6 months of mentorship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full px-6 py-12 md:py-20 bg-white flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <div className="mb-2 text-sky-500 text-2xl">〰️</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Booking tool and Google Maps integration.
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We understand that the path to opening a swim school is not only
            about the love of the water, but also about the right technical
            support. That's why we offer more than just a franchise system – we
            provide you with a ready-made technical infrastructure.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
              Demo Website
            </button>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
              Demo Booking Tool
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg viewBox="0 0 300 100" className="w-full h-full opacity-20">
              <path
                d="M 0 80 Q 50 10, 100 60 T 200 40 T 300 80"
                stroke="#3b82f6"
                strokeWidth="4"
                fill="transparent"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-gray-800">
              Booking confirmed
            </h3>
            <p className="text-sm text-gray-500 mb-4">Seahorse course</p>

            <div className="flex flex-wrap gap-3">
              {partners.map((item, idx) => (
                <div className="bg-white">
                  <Image
                    key={idx}
                    src={item.logo}
                    alt="user"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-4 right-[-60px] w-44 bg-gradient-to-b from-yellow-100 to-yellow-300 rounded-xl shadow-xl p-4 text-center">
            <div className="text-xl mb-1">🖱️</div>
            <h4 className="font-bold text-sm text-gray-800">New Events</h4>
            <p className="text-xs text-gray-600 mb-2">
              New swimming event at TYS
            </p>
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-semibold hover:bg-blue-600 transition">
              New Event
            </button>
          </div>
        </div>
      </div> */}
      <section className="bg-gradient-to-br from-[#25ABBE] to-[#1A6DAF] py-16 px-6 rounded-3xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Our partners
          </h2>
          <p className="text-gray-100 text-lg mb-10">
            All partners who work with us
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-4 w-full h-28 flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default MentorshipSection;
