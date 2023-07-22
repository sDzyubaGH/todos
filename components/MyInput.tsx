import React, { ChangeEvent } from 'react'

type Props = {
  value: string,
  setValue: (value: string) => void,
  id: string,
  label: string
}

export default function MyInput({ value, setValue, id, label }: Props) {
  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-neutral-100">{label || 'Default input'}</label>
      <input onChange={onChangeEvent} value={value} type="text" id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
  )
}