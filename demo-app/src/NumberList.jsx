import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()} className="text-lg text-blue-700 mb-2">{number}</li>
  );
  return (
    <ul className="list-disc pl-4">{listItems}</ul>
  );
}

export default NumberList;
