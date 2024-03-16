import React, { useState } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
}

export default function Select({
  options = [],
  label = "please select option",
  onOptionSelected,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const optionSelectHandler = (option: SelectOption, idx: number) => {
    setIsOpen(!isOpen)
    onOptionSelected(option, idx);
  };

  const onLabelClick =()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={onLabelClick}>{label}</button>
      {isOpen?(<ul>
        {options.map((option, idx) => (
          <li
            onClick={() => optionSelectHandler(option, idx)}
            key={option.value}
          >
            {option.label}
          </li>
        ))}
      </ul>): null}
    </div>
  );
}
