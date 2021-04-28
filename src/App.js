import React, { useEffect } from "react";
import { useState } from "react";
import TableContent from "./components/TableOfContents";
import SimpleDialogDemo from "./components/AddButton";

function App() {
  const [waredata, setWaredata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((data) => setWaredata(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <TableContent warehouses={waredata} />
      <SimpleDialogDemo />
    </div>
  );
}

export default App;
