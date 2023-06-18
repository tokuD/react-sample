import { useInput } from "./hooks/useInput"


const Input = () => {
  const [text, onChangeText] = useInput()

  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  )
}

export default Input