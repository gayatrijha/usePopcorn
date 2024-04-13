// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import React, { useState, useEffect } from "react";
export default function App() {
  const [input, setInput] = useState(1);
  const [selectedVal1, setSelectedVal1] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [converted, setConverted] = useState("");

  let output;
  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${selectedVal1}&to=${to}`
        );
        console.log(to);
        const data = await res.json();
        setConverted(data.rates[to]);
      }
      if (selectedVal1 === to) return setConverted(input);

      fetchData();
    },
    [input, selectedVal1, to] // Update dependency array
  );
  function handleChange(e) {
    setSelectedVal1(e.target.value);
    console.log(e.target.value);
  }
  function handleChangeTo(e) {
    setTo(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <select onChange={(e) => handleChange(e)} value={selectedVal1}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => handleChangeTo(e)} value={to}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {converted}
        {to}
      </p>
    </div>
  );
}
