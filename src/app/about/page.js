import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Lightbulb,
  Shield,
  Users,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Rocket,
} from "lucide-react";
import MissionVision from "../components/Mission-vision";
import MentorshipSection from "../components/MentorshipSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight mb-8">
                About <br />
                LogiSense<span className="text-sky-500">.</span>AI
              </h1>
              <p className="text-lg md:text-xl font-light text-black leading-tight mb-8">
                Built by Experts. Driven by Purpose.
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Founded by veterans in logistics, supply chain, and
                international trade, Logisense.AI is more than a mentorship
                platform — it’s a catalyst for entrepreneurial excellence.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                We understand the challenges startups face. Our team brings
                hands-on experience and strategic insight to help you navigate
                complex business environments, avoid common pitfalls, and focus
                on long-term growth.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-sky-500 hover:bg-sky-700 text-white px-10 py-8 rounded-full text-base font-medium inline-flex">
                  JOIN US
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-8 rounded-full text-base font-medium "
                >
                  OUR VALUES
                </Button>
              </div> */}
            </div>
          </div>
          {/* <div className="w-full">
            <Image
              src="/images/globe.png"
              width={1000}
              height={500}
              className="w-full object-cover"
            />
          </div> */}
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image
              src="/images/globe.png"
              alt="Half Globe"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Bottom Blur/Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-black mb-4">
              100<span className="text-sky-500">%</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold text-black mb-4">
              On time shipment
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Lorem ipsum dolor amet lorem consectetur adipiscing elit quam id
              dapibus magna.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-black mb-4">
              650<span className="text-sky-500">+</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Clients worldwide
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Enim justo sit suspendisse egestas semper id sed urna sed felis
              iaculis massa tortor.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-black mb-4">
              30<span className="text-sky-500">+</span>
            </div>
            <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Years of experience
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Eu quis nulla morbi malesuada at nunc eu non proin ultrices
              elementum blandit et massa.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-sky-500 font-semibold text-sm tracking-wider uppercase mb-4">
                What We Do:
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                The values that drive everything we do.
              </h2>
            </div>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed">
                Whether you&apos;re in logistics, tech, manufacturing, or
                services — if you&apos;re a founder ready to build something
                meaningful, Logisense.AI is here to guide you every step of the
                way.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Innovation
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Offer strategic mentoring from industry professionals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Governance
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Help startups meet corporate governance standards
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Collaboration
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Enable sustainable growth through expert-led interventions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Startup Support
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Support college startups from idea to enterprise.
                </p>
              </CardContent>
            </Card>

            {/* <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Commitment
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet lorem consectetur adipiscing elit
                  est vel semper nam porta arcu.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Teamwork
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet lorem consectetur adipiscing elit
                  est vel semper nam porta arcu.
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      <MissionVision />
      <MentorshipSection />
      {/* Story Section */}
      {/* <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-full">
            <Image
              src="/images/brokerage.jpg"
              alt="Team workers in blue hard hats"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-black text-white p-12 lg:p-16 flex items-center my-10">
            <div className="w-full">
              <div className="text-sky-500 font-semibold text-sm tracking-wider uppercase mb-6">
                OUR STORY /
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                The story of how our company was founded.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                Netus in commodo egestas tristique augue sit odio lorem torto
                facilisis in pharetra nisl leo semper in suscipit risus eu
                accumsan, sem proin tellus at et nisl amet morbi.
              </p>

              <Button className="bg-sky-500 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-base font-medium">
                JOIN US
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Office Location Section */}
      {/* <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-black text-white p-12 lg:p-16 flex items-center my-10">
            <div className="w-full">
              <div className="text-sky-500 font-semibold text-sm tracking-wider uppercase mb-6">
                OUR OFFICE /
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Visit our location.
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tempus
                fringilla enim a eget mi amet viverra lorem.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">newyork@cargo.com</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">(415) 509 - 6995</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8">
                <Button
                  variant="link"
                  className="text-white hover:text-blue-400 p-0 text-base font-medium"
                >
                  Visit now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-full">
            <Image
              src="/images/6.jpg"
              alt="Modern office building"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-semibold text-sm tracking-wider uppercase mb-4">
              OUR TEAM /
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              The amazing team members behind LogiSense.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="relative w-full max-w-[350px] mx-auto aspect-square mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/m1.jpg"
                  alt="John Carter"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Kamal Jain
              </h3>
              <p className="text-sky-500 font-semibold text-sm tracking-wider uppercase mb-4">
                Director
              </p>
              <div className="flex justify-center space-x-4">
                {/* <Facebook className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" /> */}
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" />
              </div>
            </div>

            {/* <div className="text-center">
              <div className="relative w-full aspect-square mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/profile2.jpg"
                  alt="Sophie Moore"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Sophie Moore
              </h3>
              <p className="text-sky-500 font-semibold text-sm tracking-wider uppercase mb-4">
                FINANCIAL OFFICER
              </p>
              <div className="flex justify-center space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" />
              </div>
            </div> */}

            <div className="text-center">
              <div className="relative w-full max-w-[350px] mx-auto aspect-square mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/m2.jpg"
                  alt="Andy Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Rajeev k Tukhral
              </h3>
              <p className="text-sky-500 font-semibold text-sm tracking-wider uppercase mb-4">
                Additional Director
              </p>
              <div className="flex justify-center space-x-4">
                {/* <Facebook className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" /> */}
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-sky-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
