import React, { useCallback, useState, useEffect } from 'react'

type UseLocalStorageReturn<T> = [T, React.Dispatch<T>, () => void]

export function useLocalStorage<T = unknown>(
  key: string,
  defaultValue?: T
): UseLocalStorageReturn<T> {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === 'function') return defaultValue()
    else return defaultValue
  })

  useEffect(() => {
    if (value === undefined) return localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  const remove = useCallback(() => {
    localStorage.removeItem(key)
  }, [key])

  return [value, setValue, remove]
}
