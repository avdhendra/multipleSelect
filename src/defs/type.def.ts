import { OnChangeValue } from "react-select";

export type Option={
    label: string,
    value: string,
  image: string,
    email:string,
}

export type CustomOptionProps = {
   label: string,
    value: string,
  image: string,
  email: string,
   isMulti: boolean 
}


export type CustomSelectProps = {
  options: Array<Option>;
  onChange: (value: OnChangeValue<Option,true>) => void;
  value: Option[];
}