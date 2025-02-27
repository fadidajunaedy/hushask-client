import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";

const App = () => {
  return (
    <>
      <main className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
