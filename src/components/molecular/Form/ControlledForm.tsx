import { ChangeEvent, useState, useEffect } from "react";

const initFormData = { name: "", age: 0, hairColor: "" };

export default function ControlledForm() {
  const [formData, setFormData] = useState(initFormData);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((pre) => {
      return { ...pre, [e.target.name]: e.target?.value };
    });
  };

  useEffect(() => {
    if (formData.name.length < 2) {
      console.log("tt");
    }
  });

  return (
    <form>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={changeHandler}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={changeHandler}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={formData.hairColor}
        onChange={changeHandler}
      />
    </form>
  );
}
