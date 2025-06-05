
import { useState } from 'react'
import Accordion from './components/Accordion'
import Badges from './components/Badges'
import ColorTemplate from './components/ColorTemplate'
import DynamicForm from './components/DynamicForm'
import Pagination from './components/Pagination'
import TabForm from './components/TabForm'

function App() {
  const [currentPage, setCurrentPage] = useState(1); // Pagination starts at page 1

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
   <>
    <h1 className="text-3xl font-bold text-center font-serif">
    Design System 
  </h1>
  <p className='text-xl text-center font-extralight'>This task is provide by Uzence Design Studio </p>
    <ColorTemplate/>

     <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    
    <Badges/>
    <Accordion/>
    <DynamicForm/>
    <TabForm/>

   </>
  )
}

export default App
