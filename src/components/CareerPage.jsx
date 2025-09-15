// CareersPage.jsx

import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const jobsData = [
  {
    id: "001",
    title: "Sr. Account Manager",
    location: "Dubai, UAE",
    category: "Business Development",
    type: "Full-time"
  },
  {
    id: "002",
    title: "Data Engineer II",
    location: "Dubai, UAE",
    category: "Engineering",
    type: "Full-time"
  },
  {
    id: "003",
    title: "Associate Onboarding & Training",
    location: "Doha, Qatar",
    category: "Operations",
    type: "Full-time"
  },
  // … more mock jobs
];

const CareersPage = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  // Filter logic
  const filteredJobs = jobs.filter((job) => {
    return (
      (keyword === "" || job.title.toLowerCase().includes(keyword.toLowerCase())) &&
      (location === "" || job.location.toLowerCase().includes(location.toLowerCase())) &&
      (category === "" || job.category === category)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroBanner />

      <div className="container mx-auto px-4 py-8">
        <FilterBar
          keyword={keyword}
          setKeyword={setKeyword}
          location={location}
          setLocation={setLocation}
          category={category}
          setCategory={setCategory}
        />

        <JobList jobs={filteredJobs} />
      </div>

      <CompanyCulture />
    
    </div>
  );
};

const HeroBanner = () => (
  <div className="relative bg-white h-64 md:h-96 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold">Our Jobs</h1>
      <p className="mt-4 text-gray-600">Join our team and grow with us</p>
    </div>
  </div>
);

const FilterBar = ({ keyword, setKeyword, location, setLocation, category, setCategory }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <input
      type="text"
      placeholder="Search by title..."
      className="p-3 border border-gray-300 rounded-md w-full"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
    <input
      type="text"
      placeholder="Location"
      className="p-3 border border-gray-300 rounded-md w-full"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
    />
    <select
      className="p-3 border border-gray-300 rounded-md w-full"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Engineering">Engineering</option>
      <option value="Sales & Business Development">Sales & Business Development</option>
      <option value="Operations">Operations</option>
      {/* more categories */}
    </select>
  </div>
);

const JobList = ({ jobs }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
);

const JobCard = ({ job }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-500 mt-2">{job.location}</p>
      <p className="text-gray-400 mt-1 text-sm">{job.category}</p>
    </div>
    <button className="mt-4 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 w-full">
      Apply
    </button>
  </div>
);

const CompanyCulture = () => (
  <div className="container mx-auto px-4 py-16 bg-white mt-12 rounded-lg shadow">
    <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
    <p className="text-gray-700">
      We believe in fostering growth, innovation, and a supportive environment. From work-life balance to learning opportunities, we’ve got you covered.
    </p>

   {/* you can insert some images or icons here for culture, perks */}
  </div>

);

export default CareersPage;
