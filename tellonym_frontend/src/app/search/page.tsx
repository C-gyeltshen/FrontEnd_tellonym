<<<<<<< HEAD
"use client";
import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/name?user_name=${searchTerm}`);
      if (response.status === 404) {
        setUser(null);
        setError('User not found');
      } else if (response.ok) {
        const data = await response.json();
        setUser(data);
        setError('');
      } else {
        setError('Error fetching user');
      }
    } catch (err) {
      console.error('Error fetching user:', err);
      setError('An error occurred while fetching user');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg">
        <div className="w-full mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search by username"
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            className="w-full mt-2 p-2 bg-blue-500 text-white rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="w-full">
          {error && <p className="text-red-500">{error}</p>}
          {user && (
            <ul className="list-disc pl-5">
              <p key={user.user_id}>{user.user_name}</p>
            </ul>
          )}
=======
'use client'

import { IoIosArrowBack } from "react-icons/io";
import React from 'react';
import ProfileCard from '../../reuseable_component/Profile';
import Header from '../../reuseable_component/homepageheader';
import Navigation from '../../reuseable_component/navigation'; // Adjust the path as per your project structure
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";


const App = () => {
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <main className="flex flex-col items-center justify-start h-full max-w-md w-full p-4 border border-gray-300 bg-white shadow-md rounded-lg overflow-auto relative">
      <div className="flex items-start p-4 items-center ">
        <IoIosArrowBack className="text-2xl cursor-pointer" />
          <input className="ml-2 flex-grow border border-gray-600"/>
          <CiSearch className=""/>
      </div>
        <div className="w-full flex justify-center p-4">
          <Navigation />
>>>>>>> 7355611 (edit ownProfile)
        </div>
      </main>
    </div>
  );
};

<<<<<<< HEAD
export default Search;
=======
export default App;
>>>>>>> 7355611 (edit ownProfile)
