import React, { type ChangeEvent } from 'react';

interface SettingData {
  theme: 'light' | 'dark';
}

interface SettingProps {
  data: SettingData;
  setData: React.Dispatch<React.SetStateAction<SettingData>>;
}

const Setting: React.FC<SettingProps> = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.value as 'light' | 'dark',
    }));
  };

  return (
    <div className="space-y-4">
      {['dark', 'light'].map((mode) => (
        <label key={mode} className="flex items-center space-x-2">
          <input
            type="radio"
            name="theme"
            value={mode}
            checked={theme === mode}
            onChange={handleDataChange}
            className="accent-indigo-600"
          />
          <span className="capitalize text-gray-700">{mode} Theme</span>
        </label>
      ))}
    </div>
  );
};

export default Setting;
