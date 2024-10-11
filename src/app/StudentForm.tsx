import React from 'react';

const StudentForm = () => {
  return (
    <form className="flex flex-col gap-4 p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-semibold">Student Form</h2>
      <label className="flex flex-col">
        Name:
        <input type="text" className="border border-gray-300 rounded p-2" />
      </label>
      <label className="flex flex-col">
        Age:
        <input type="number" className="border border-gray-300 rounded p-2" />
      </label>
      <button type="submit" className="bg-blue-500 text-white rounded p-2">
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
