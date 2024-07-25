import React from 'react';
import { CircleOff, CircleDot, CircleSlash2, CircleEqual } from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pluto: The Dwarf Planet</h1>
        <p className="text-xl text-gray-600">Exploring the Mysteries of Our Solar System's Underdog</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Pluto</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="mb-4">
              Pluto, once considered the ninth planet in our solar system, is now classified as a dwarf planet. 
              Discovered in 1930, it has captured the imagination of astronomers and space enthusiasts for decades.
            </p>
            <p>
              Despite its reclassification in 2006, Pluto continues to be a subject of fascination and scientific study, 
              offering insights into the outer reaches of our solar system.
            </p>
          </div>
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Pluto" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FactCard icon={<CircleOff />} title="Size" description="About 1/6 the mass of Earth's moon" />
          <FactCard icon={<CircleDot />} title="Distance" description="Average of 3.7 billion miles from the Sun" />
          <FactCard icon={<CircleSlash2 />} title="Orbit" description="248 Earth years to orbit the Sun" />
          <FactCard icon={<CircleEqual />} title="Moons" description="5 known moons, largest being Charon" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Pluto's Journey</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <ul className="list-disc list-inside space-y-2">
            <li>1930: Discovered by Clyde Tombaugh</li>
            <li>1978: Pluto's largest moon, Charon, is discovered</li>
            <li>1988: Pluto and Charon are found to be tidally locked</li>
            <li>2006: Reclassified as a dwarf planet</li>
            <li>2015: NASA's New Horizons spacecraft performs a flyby, providing detailed images</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const FactCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {React.cloneElement(icon, { className: "h-6 w-6 text-blue-500 mr-2" })}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
