import React, { useCallback, useDebugValue, useState } from 'react'

export const useInput = () => {
  const [state, setState] = useState('')

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  }, [])

  useDebugValue(`hoge Input: ${state}`)

  return [state, onChange] as const
}
