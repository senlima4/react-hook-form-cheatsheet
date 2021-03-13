import { useForm } from 'react-hook-form'

type FormDataType = {
  mind: string
}

export const Form = () => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data: FormDataType) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="mind">
        "mind" field
        <input
          id="mind"
          ref={register({
            required: 'now you must type somthing..',
            minLength: { value: 5, message: 'BTW also need to above 5 chars' },
          })}
          type="text"
          name="mind"
          placeholder="type something.."
        />
      </label>
      {errors.mind && <p style={{ color: 'red' }}>{errors.mind.message}</p>}

      <button type="submit">Submit</button>
    </form>
  )
}
