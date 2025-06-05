import React, { type ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  age: string | number;
  interest: string[];
  theme: "light" | "dark";
}

interface ProfileErrors {
  name?: string;
  email?: string;
  age?: string;
}

interface ProfileProps {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: ProfileErrors;
}

const Profile: React.FC<ProfileProps> = ({ data, setData, errors }) => {
  const { name, email, age } = data;

  const handleDataChange = (
    e: ChangeEvent<HTMLInputElement>,
    item: keyof Pick<FormData, 'name' | 'email' | 'age'>
  ) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="space-y-4">
      {[
        { label: 'Name', value: name, type: 'text', key: 'name' },
        { label: 'Age', value: age, type: 'number', key: 'age' },
        { label: 'Email', value: email, type: 'email', key: 'email' }
      ].map(({ label, value, type, key }) => (
        <div key={key}>
          <label className="block text-sm font-medium text-gray-700">{label}:</label>
          <input
            type={type}
            value={value}
            onChange={(e) => handleDataChange(e, key as keyof Pick<FormData, 'name' | 'email' | 'age'>)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors[key as keyof ProfileErrors] && (
            <span className="text-red-500 text-sm">{errors[key as keyof ProfileErrors]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Profile;
