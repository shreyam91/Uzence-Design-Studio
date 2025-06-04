import { useState } from "react";
import Accordion from "./components/Accordion"
import Badges from "./components/Badges"
import ColorTemplate from "./components/ColorTemplate"
import Pagination from "./components/Pagination";

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <h1 className="text-3xl text-center "> Design System </h1>
      <p className="text-xl text-center">This project is given by UZENCE Design Studio.</p>
      <ColorTemplate/>
      <Badges/>
      <Accordion/>

      <Pagination currentPage={page} totalPages={5} onPageChange={setPage} />
    </>
  )
}

export default App
