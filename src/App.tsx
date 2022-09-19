import { useState } from "react";
import Content from "./components/Content";
import Menu from "./components/Menu";
import { data } from "./dummyData";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1">
        <Menu />
      </div>
      <div className="col-span-5">
        <Content />
      </div>
    </div>
  );
}

export default App;
