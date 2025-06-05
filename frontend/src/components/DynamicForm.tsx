import React, { useState } from 'react';
import FormField from './FormField';

interface FormData {
  [key: string]: string | number;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  birthdate: '',
};

const DynamicForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsSaving(true);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      if (!formData[key]) newErrors[key] = `${key} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
    <div className="p-8 space-y-4 bg-white text-black ">
      <h1 className="text-xl font-bold">Form Componenet</h1>
      
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          />
        <FormField
          label="Birthdate"
          name="birthdate"
          type="date"
          value={formData.birthdate}
          onChange={handleChange}
          error={errors.birthdate}
          />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          disabled={isSaving}
          >
          Submit
        </button>
        {isSaving && <span className="text-sm text-gray-500">Saving...</span>}
      </div>
    </form>
    </div>  
          </>
  );
};

export default DynamicForm;
