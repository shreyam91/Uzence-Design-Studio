import React, { useState } from "react";

type AccordionItem = {
  id: number;
  title: string;
  content: React.ReactNode;
};

const Accordion: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const allowMultipleOpen = false; 

  const items: AccordionItem[] = [
    {
      id: 1,
      title: "What is React?",
      content: (
        <p>
          React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small,
          isolated pieces of code called “components.”
        </p>
      ),
    },
    {
      id: 2,
      title: "Why use TypeScript with React?",
      content: (
        <p>
          TypeScript adds static typing to JavaScript, which helps catch errors early and improves developer
          experience.
        </p>
      ),
    },
    {
      id: 3,
      title: "What is Tailwind CSS?",
      content: (
        <p>
          Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
        </p>
      ),
    },
  ];

  const toggleItem = (id: number) => {
    if (allowMultipleOpen) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <>
    <div className="p-8 space-y-4 bg-white text-black ">
      <h1 className="text-xl font-bold">Accordion</h1>
      </div>
    <div className="w-full max-w-xl mx-auto border rounded-md p-4 space-y-4 bg-white">
  {items.map(({ id, title, content }) => {
    const isOpen = openItems.includes(id);
    return (
      <div key={id} className="border rounded-md">
        <button
          onClick={() => toggleItem(id)}
          className="w-full text-left px-4 py-3 flex justify-between items-center"
          aria-expanded={isOpen}
          aria-controls={`accordion-content-${id}`}
          id={`accordion-header-${id}`}
        >
          <span className="font-medium">{title}</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-header-${id}`}
            className="px-4 py-3 border-t border-gray-200"
          >
            {content}
          </div>
        )}
      </div>
    );
  })}
</div>

    </>
  );
};

export default Accordion;
