import React from 'react'
import Icons from './Icons'

const CustomInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  className = '',
  minValue,
  maxValue,
  maxLength,
  inputMode,
  pattern,
  icon,
}) => {
  const isDateOrTime = type === 'date' || type === 'time'
  const hasValue = value && value !== ''

  return (
    <div className="relative !w-full">
      {isDateOrTime ? (
        <>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            min={minValue}
            max={maxValue}
            maxLength={maxLength}
            inputMode={inputMode}
            pattern={pattern}
            className={`appearance-none bg-white-100 outline-0 font-Inter py-[13px] px-5 rounded-xl leading-160 w-full ${hasValue ? 'text-dark-black' : 'text-dark-grey'} ${error ? 'border border-red-500' : ''} ${className}`}
            style={{ color: hasValue ? '#1a1a1a' : '#9ca3af' }}
          />

          {/* 🔘 Only show placeholder if value is empty */}
          {!hasValue && (
            <span className="absolute left-5 top-1/2 font-Inter -translate-y-1/2 text-dark-grey bg-white-100 pr-6 pointer-events-none">
              {placeholder}
            </span>
          )}

          
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            value={value}
            autoComplete="off"
            onChange={onChange}
            min={minValue}
            max={maxValue}
            maxLength={maxLength}
            inputMode={inputMode}
            pattern={pattern}
            placeholder={placeholder}
            className={`bg-white-100 outline-0 py-[13px] font-Inter px-5 rounded-xl leading-160 w-full placeholder:text-dark-grey text-dark-grey ${error ? 'border border-red-500' : ''} ${className}`}
          />
        </>
      )}

      <span className="absolute right-5 bg-white-100 pointer-events-none top-1/2 -translate-y-1/2 text-dark-grey">
            <Icons icon={icon} />
          </span>

      {error && <p className="text-red-500 font-Inter text-sm mt-1">{error}</p>}
    </div>
  )
}

export default CustomInput
