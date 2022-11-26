import React, { useCallback, useState, useEffect } from 'react'

type UseLocalStorageReturn<T> = [T, React.Dispatch<T>, () => void]

export function useLocalStorage<T = unknown>(
  key: string,
  defaultValue?: T
): UseLocalStorageReturn<T> {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = window.localStorage.getItem(key)

    if (jsonValue) return JSON.parse(jsonValue)

    if (typeof defaultValue === 'function') return defaultValue()
    else return defaultValue
  })

  useEffect(() => {
    if (value === undefined) return window.localStorage.removeItem(key)
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  const remove = useCallback(() => {
    window.localStorage.removeItem(key)
  }, [key])

  return [value, setValue, remove]
}
