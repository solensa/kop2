import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-12 z-10">
        <h1 className="text-4xl font-bold mb-5">What&apos;s the Purpose of Knowing Our People?</h1>
      </div>

      {/* Strategic Priorities Section */}
      <div className="w-full max-w-6xl mb-8 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Develop Our People */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#019cde] to-[#189fac] p-3 flex justify-center">
              <Image
                src="/persona3.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <Image
                src="/persona4.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white ml-3"
              />
              <Image
                src="/persona5.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white ml-3"
              />
            </div>
            <div className="px-6 py-5 max-w-[323px] mx-auto">
              <h3 className="text-2xl font-bold mb-1 text-center">For Colleagues</h3>
              <ul className="mt-4 mb-4 space-y-3 leading-[1.2]">
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-blue.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    <strong>Rounded</strong> Feedback
                  </span>
                </li>
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-blue.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    <strong>Access</strong> to growth & career opportunities
                  </span>
                </li>
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-blue.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    <strong>Builds</strong> colleagues&apos; profile
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Improve Delivery Consistency */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#1a9fa8] to-[#2B8E6A] p-3 flex justify-center">
              <Image
                src="/persona2.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <Image
                src="/persona1.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white ml-3"
              />
            </div>
            <div className="px-6 py-5 max-w-[323px] mx-auto">
              <h3 className="text-2xl font-bold mb-1 text-center">For Managers</h3>
              <ul className="mt-4 mb-4 space-y-3 leading-[1.2]">
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-turquoise.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    <strong>Identify</strong> collective strengths & opportunities​
                  </span>
                </li>
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-turquoise.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    <strong>Peer input & different perspectives</strong> to unlock growth
                  </span>
                </li>
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-turquoise.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    <strong>Strengthen</strong> the team for future growth
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Invest in Growth */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#33A273] to-[#4AA441] p-3 flex justify-center">
              <Image
                src="/persona0.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
            </div>
            <div className="px-6 py-5 max-w-[323px] mx-auto">
              <h3 className="text-2xl font-bold mb-1 text-center">For Laing O&apos;Rourke</h3>
              <ul className="mt-4 mb-4 space-y-3 leading-[1.2]">
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-green.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    Discover the breadth and <strong>depth of talent</strong>
                  </span>
                </li>
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-green.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    Develop and retain <strong>diverse talent</strong>
                  </span>
                </li>
                <li className="flex items-center gap-4 h-11">
                  <Image
                    src="/bullet-tick-green.svg"
                    alt="Bullet"
                    width={34}
                    height={34}
                    className="flex-shrink-0"
                  />
                  <span>
                    <strong>Plan for future</strong> talent needs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Goals Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 z-10">
        {/* Traditional */}
        <div className="bg-white rounded-lg overflow-hidden text-black relative hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
          <div className="h-2.5 w-full bg-gradient-to-r from-[#009CDE] to-[#00A7B5]"></div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/blue-cross.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <h2 className="text-2xl font-bold">Traditional</h2>
            </div>

            <ul className="mb-12 list-disc pl-6">
              <li>Managing talent through ratings</li>
              <li>Ratings done by senior leaders</li>
              <li>Functional or project silo&apos;s</li>
              <li>Talent programmes that are only focused on high potentials</li>
            </ul>
          </div>
        </div>

        {/* Knowing Our People 2.0 */}
        <div className="bg-white rounded-lg overflow-hidden text-black relative hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
          <div className="h-2.5 w-full bg-gradient-to-r from-[#50A684] to-[#64A70B]"></div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/green-tick.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <h2 className="text-2xl font-bold">Knowing Our People 2.0</h2>
            </div>

            <ul className="mb-5 list-disc pl-6">
              <li>Managing talent through ratings</li>
              <li>Ratings done by senior leaders</li>
              <li>Functional or project silo&apos;s</li>
              <li>Talent programmes that are only focused on high potentials</li>
            </ul>

            <div className="bg-[#DAFCEF] rounded-lg p-4 mb-4 border border-[#A6E4CB] flex justify-center">
              <Image
                src="/kop-text.svg"
                alt="Check"
                width={450}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/gradient.png"
        alt=""
        width={800}
        height={271}
        className="absolute top-[570px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 "
      />
    </div>
  );
}
