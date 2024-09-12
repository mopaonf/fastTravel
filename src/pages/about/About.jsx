import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-neutral-200 dark:bg-neutral-900 mt-24">
      <header className="dark:bg-neutral-900/95 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-4">Discover more about our mission, vision, and team.</p>
          
        </div>
      </header>
      <hr className='w-1/4 mx-auto mt-4 dark:bg-voilet-600' />
      <main className="container mx-auto px-6 py-12">
        <section className="bg-neutral-100 dark:bg-neutral-900/95 shadow-lg rounded-md overflow-hidden mb-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src="https://via.placeholder.com/1200x600"
                alt="Our Company"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Our Story</h2>
              <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed mb-4">
                At our company, we are dedicated to revolutionizing bus travel. Founded with a mission to provide reliable, comfortable, and affordable transportation, we are committed to making every journey a pleasant experience.
              </p>
              <p className="text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed">
                Based in Mendong, Simbock - Maison Blanche, our team is passionate about delivering excellence. From daily commutes to special trips, we strive to meet and exceed the expectations of every passenger.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-200 dark:bg-neutral-900 rounded-md shadow-md p-8 mb-12">
          <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-neutral-50 dark:bg-neutral-900/95 shadow-md rounded-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt={`Team Member ${member}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    Team Member {member}
                  </h3>
                  <p className="text-neutral-800 dark:text-neutral-300">
                    A brief description of the team member's role and background, highlighting their expertise and contribution to the company.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


      </main>
    </div>
  );
};

export default AboutUs;