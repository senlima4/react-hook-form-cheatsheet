import { useForm } from 'react-hook-form'

type FormDataType = {
  message: string
}

export const Form = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: FormDataType) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="message">
        "message" field
        <input
          id="message"
          ref={register()}
          type="text"
          name="message"
          placeholder="type something.."
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}
