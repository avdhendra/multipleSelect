import { useState } from 'react'


import './App.scss'
import SelectComponent from './SelectComponent/SelectComponent';

import { Option } from './defs/type.def';



function App() {
 const options = [
  { value: 'sarty', label: 'Sarty', image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',email:"sarty@gmail.com" },
  { value: 'gomail', label: 'GoMail', image: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',email:"gomail@gmail.com" },
  
];


  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (value:any) => {
    setSelectedOptions(value);
  };

  return (
    <div>
      <h1>Multiple Select Dropdown with Images</h1>
      <SelectComponent
        options={options}
        value={selectedOptions}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default App
