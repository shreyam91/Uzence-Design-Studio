import React, { type ChangeEvent } from 'react';
import type { FormData, FormErrors } from './types'; 

interface InterestProps {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
}

const Interest: React.FC<InterestProps> = ({ data, setData, errors }) => {
  const { interest } = data;

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setData((prevState) => ({
      ...prevState,
      interest: checked
        ? [...prevState.interest, name]
        : prevState.interest.filter((i) => i !== name),
    }));
  };

  const options = ['coding', 'music', 'javascript', 'travel'];

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2">
          <input
            type="checkbox"
            name={option}
            checked={interest.includes(option)}
            onChange={handleDataChange}
            className="accent-indigo-600 w-4 h-4"
          />
          <span className="capitalize text-gray-700">{option}</span>
        </label>
      ))}
      {errors.interest && <span className="text-red-500 text-sm">{errors.interest}</span>}
    </div>
  );
};

export default Interest;
