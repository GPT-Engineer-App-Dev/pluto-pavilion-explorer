import React from 'react';
import { CircleDot, CircleSlash2, CircleEqual, Rocket, Thermometer, Mountain } from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-blue-300">Pluto: The Enigmatic Dwarf Planet</h1>
        <p className="text-xl text-blue-100">Journey to the Outer Reaches of Our Solar System</p>
      </header>

      <section className="mb-12 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-blue-300">About Pluto</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4 text-gray-300">
              Pluto, once the ninth planet in our cosmic neighborhood, now reigns as the king of dwarf planets. 
              Discovered in 1930, it has been a celestial enigma, challenging our understanding of the solar system's boundaries.
            </p>
            <p className="text-gray-300">
              Despite its reclassification in 2006, Pluto's allure has only grown. Its icy heart, captured by NASA's New Horizons mission, 
              continues to captivate scientists and stargazers alike, offering a window into the mysterious Kuiper Belt.
            </p>
          </div>
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Pluto" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-300">Cosmic Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FactCard icon={<CircleDot />} title="Cosmic Dance" description="3.7 billion miles from the Sun on average" />
          <FactCard icon={<CircleSlash2 />} title="Pluto Year" description="248 Earth years to orbit the Sun" />
          <FactCard icon={<CircleEqual />} title="Pluto's Entourage" description="5 known moons, with Charon as its largest companion" />
          <FactCard icon={<Rocket />} title="Space Exploration" description="Visited by NASA's New Horizons in 2015" />
          <FactCard icon={<Thermometer />} title="Frigid World" description="Surface temperature around -230°C (-382°F)" />
          <FactCard icon={<Mountain />} title="Icy Peaks" description="Mountains of water ice up to 3,500 meters high" />
        </div>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-blue-300">Pluto's Cosmic Timeline</h2>
        <div className="space-y-4">
          <TimelineEvent year="1930" event="Clyde Tombaugh discovers Pluto" />
          <TimelineEvent year="1978" event="Pluto's largest moon, Charon, is discovered" />
          <TimelineEvent year="1988" event="Pluto and Charon are found to be tidally locked" />
          <TimelineEvent year="2006" event="Reclassified as a dwarf planet" />
          <TimelineEvent year="2015" event="NASA's New Horizons performs historic flyby" />
        </div>
      </section>
    </div>
  );
};

const FactCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-blue-500">
    <div className="flex items-center mb-4">
      {React.cloneElement(icon, { className: "h-6 w-6 text-blue-400 mr-2" })}
      <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
    </div>
    <p className="text-gray-300">{description}</p>
  </div>
);

const TimelineEvent = ({ year, event }) => (
  <div className="flex items-center">
    <div className="w-24 text-blue-400 font-bold">{year}</div>
    <div className="flex-1 ml-4 pb-4 border-l-2 border-blue-500 pl-4">
      <p className="text-gray-300">{event}</p>
    </div>
  </div>
);

export default Index;
