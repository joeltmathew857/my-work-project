import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
