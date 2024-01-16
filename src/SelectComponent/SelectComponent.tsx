
import Select from 'react-select'


import { FC } from 'react';
import { CustomSelectProps, Option } from '../defs/type.def';
import CustomOption from './CustomOption';




const SelectComponent: FC<CustomSelectProps> = ({ options, onChange, value }) => {
  
  return (
    <Select
      options={options}
      isMulti
      onChange={onChange}

      value={value}
      className="formMultiSelect"
      formatOptionLabel={(item:Option,{context}) => (
        <CustomOption label={item.label} value={item.value} image={item.image} email={item.email} isMulti={context==='menu' } />
      )}
      autoFocus
      
      
    />
  );
};


export default SelectComponent
