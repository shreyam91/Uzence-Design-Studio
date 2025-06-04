import React from "react";

type ColorItem = {
  name: string;
  code: string;
  tailwindClass: string;
};

const primaryColors: ColorItem[] = [
  { name: "Blue", code: "primary-50", tailwindClass: "bg-blue-50" },
  { name: "Blue", code: "primary-100", tailwindClass: "bg-blue-100" },
  { name: "Blue", code: "primary-200", tailwindClass: "bg-blue-200" },
  { name: "Blue", code: "primary-300", tailwindClass: "bg-blue-300" },
  { name: "Blue", code: "primary-400", tailwindClass: "bg-blue-400" },
  { name: "Blue", code: "primary-500", tailwindClass: "bg-blue-500" },
  { name: "Blue", code: "primary-600", tailwindClass: "bg-blue-600" },
  { name: "Blue", code: "primary-700", tailwindClass: "bg-blue-700" },
  { name: "Blue", code: "primary-800", tailwindClass: "bg-blue-800" },
  { name: "Blue", code: "primary-900", tailwindClass: "bg-blue-900" },
];

const secondaryColors: ColorItem[] = [
  { name: "Purple", code: "secondary-50", tailwindClass: "bg-purple-50" },
  { name: "Purple", code: "secondary-100", tailwindClass: "bg-purple-100" },
  { name: "Purple", code: "secondary-200", tailwindClass: "bg-purple-200" },
  { name: "Purple", code: "secondary-300", tailwindClass: "bg-purple-300" },
  { name: "Purple", code: "secondary-400", tailwindClass: "bg-purple-400" },
  { name: "Purple", code: "secondary-500", tailwindClass: "bg-purple-500" },
  { name: "Purple", code: "secondary-600", tailwindClass: "bg-purple-600" },
  { name: "Purple", code: "secondary-700", tailwindClass: "bg-purple-700" },
  { name: "Purple", code: "secondary-800", tailwindClass: "bg-purple-800" },
  { name: "Purple", code: "secondary-900", tailwindClass: "bg-purple-900" },
];

const semanticColor: ColorItem[] = [
  { name: "Success", code: "green-500", tailwindClass: "bg-green-500" },
  { name: "Error", code: "red-500", tailwindClass: "bg-red-500" },
  { name: "Warning", code: "orange-400", tailwindClass: "bg-orange-400" },
  { name: "Info", code: "blue-400", tailwindClass: "bg-blue-400" },
];

const tertiaryColor: ColorItem[] = [
  { name: "Teal", code: "teal-400", tailwindClass: "bg-teal-400" },
  { name: "Amber", code: "amber-500", tailwindClass: "bg-amber-500" },
  { name: "Indigo", code: "indigo-400", tailwindClass: "bg-indigo-400" },
  { name: "Lime", code: "lime-500", tailwindClass: "bg-lime-500" },
];

const neutralColors: ColorItem[] = [
  { name: "White", code: "white", tailwindClass: "bg-white border" },
  { name: "Black", code: "black", tailwindClass: "bg-black" },
  { name: "Gray 50", code: "gray-50", tailwindClass: "bg-gray-50" },
  { name: "Gray 100", code: "gray-100", tailwindClass: "bg-gray-100" },
  { name: "Gray 200", code: "gray-200", tailwindClass: "bg-gray-200" },
  { name: "Gray 300", code: "gray-300", tailwindClass: "bg-gray-300" },
  { name: "Gray 400", code: "gray-400", tailwindClass: "bg-gray-400" },
  { name: "Gray 500", code: "gray-500", tailwindClass: "bg-gray-500" },
  { name: "Gray 600", code: "gray-600", tailwindClass: "bg-gray-600" },
  { name: "Gray 700", code: "gray-700", tailwindClass: "bg-gray-700" },
  { name: "Gray 800", code: "gray-800", tailwindClass: "bg-gray-800" },
  { name: "Gray 900", code: "gray-900", tailwindClass: "bg-gray-900" },
];


const ColorRow: React.FC<{ title: string; colors: ColorItem[] }> = ({
  title,
  colors,
}) => (
  <div className="mb-10">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-6">
      {colors.map((color) => (
        <div key={color.code} className="flex flex-col items-center text-center w-20">
          <div className={`w-10 h-10 rounded ${color.tailwindClass}`}></div>
          <div className="text-xs mt-2 font-medium">{color.name}</div>
          <div className="text-[11px] text-gray-500">{color.code}</div>
        </div>
      ))}
    </div>
  </div>
);

const ColorTemplate: React.FC = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-8">Color System</h2>

      <ColorRow title="Primary Colors" colors={primaryColors} />
      <ColorRow title="Secondary Colors" colors={secondaryColors} />
      <ColorRow title="Semantic Colors" colors={semanticColor} />
      <ColorRow title="Tertiary Colors" colors={tertiaryColor} />
      <ColorRow title="Neutral Colors" colors={neutralColors} />

    </div>
  );
};

export default ColorTemplate;
