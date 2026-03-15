import React, { useState } from 'react';

const SearchWidget = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full md:w-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
    </div>
  );
};

export default SearchWidget;