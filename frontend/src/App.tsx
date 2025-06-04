import { useState } from "react";
import Accordion from "./components/Accordion"
import Badges from "./components/Badges"
import ColorTemplate from "./components/ColorTemplate"
import Pagination from "./components/Pagination";
import DynamicForm from "./components/DynamicForm";

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
      <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-2xl font-bold mb-6">Dynamic Form Builder</h1>
    <DynamicForm />
  </div>
    </>
  )
}

export default App
