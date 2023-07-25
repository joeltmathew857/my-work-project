// src/components/Card.js
import React, { useState } from 'react';

const Card = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn1.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcSLgWvs017HfsTfzk_zUhiJ79xs-_d8tNecyY97wuu7VqUUWsVZRxyDtteDiFv_Njpi3qgcPjRcRIsEQ70&psig=AOvVaw1dcDa9LcIWHzMlw1ouR7uE&ust=1690362699987000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCc1PPBqYADFQAAAAAdAAAAABAS"
        alt="luca"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p
          className={`text-gray-700 text-base ${
            isExpanded ? 'block' : 'truncate'
          }`}
        >
          Luka Modrić is a Croatian professional footballer who plays as a
          midfielder for La Liga club Real Madrid and captains the Croatia
          national team.
        </p>
        {!isExpanded && (
          <button
            onClick={toggleDescription}
            className="text-blue-500"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
