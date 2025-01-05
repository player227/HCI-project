import Header from "@/components/header";
import "@fontsource/playfair-display";

export default function Home() {
  return (
    <div className="bg-gray-light min-h-screen">
      <Header />
      <main className="space-y-16 bg-gray-light">
        <section
          className="min-h-[420px] h-[calc(420px/700*100vw)] pt-4 text-center flex flex-col justify-between bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/kodaknascar.jpg')" }}
        >
          <h2 className="text-5xl font-playfair italic text-white">
            <span className="text-7xl">30</span>
            <span className="text-6xl">+ </span>
            <span>years of collaboration </span>
            <span className="text-black text-opacity-70">
              and{" "}
              <span className="text-black text-opacity-70">c</span>
              <span className="text-black text-opacity-65">o</span>
              <span className="text-black text-opacity-60">u</span>
              <span className="text-black text-opacity-55">n</span>
              <span className="text-black text-opacity-50">t</span>
              <span className="text-black text-opacity-45">i</span>
              <span className="text-black text-opacity-40">n</span>
              <span className="text-black text-opacity-35">g</span>
            </span>
          </h2>
          <div className="flex justify-center space-x-8 pb-4">
            <div className="corner-button">
              <div className="relative h-24 w-30 px-3 py-2 bg-[#008020] rounded-lg flex flex-col items-center justify-center text-center text-white font-playfair">
                <span>Develop</span>
              </div>
            </div>
            <div className="corner-button">
              <div className="relative h-24 w-30 p-3 bg-[#008020] rounded-lg flex items-center justify-center text-center text-white font-playfair">
                Book us
              </div>
            </div>
          </div>
        </section>
        <section className="px-8">
          <h3 className="text-xl font-medium bg-highlight text-black inline-block p-2 font-playfair">
            Document photos
          </h3>
          <div className="mt-4 flex">
            <div className="h-48 w-48 bg-gray-300 rounded-lg"></div>
            <div className="ml-8 text-gray-700 flex flex-col justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua...
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}