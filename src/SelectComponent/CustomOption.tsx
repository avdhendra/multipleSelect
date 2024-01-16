import { CustomOptionProps } from '../defs/type.def'

export default function CustomOption({label,image,email,isMulti}:CustomOptionProps) {
  return (
    <div className='custom-option'>
          <img src={image} alt={label} className='custom-option-image' />
          <span className='custom-option-label'>{label}</span>
        {isMulti && <span className='custom-option-email'>{email}</span>}
        </div>
  )
}