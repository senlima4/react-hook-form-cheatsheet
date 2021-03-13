import { FC, useState, ChangeEventHandler } from 'react'
import loadable from '@loadable/component'

import { Container } from './styles/Container'
import { Block } from './styles/Block'

type AsyncFormProps = {
  form: string
}

const AsyncForm = loadable(
  (props: AsyncFormProps) => import(`./forms/${props.form}`),
  {
    cacheKey: props => props.form,
    fallback: <div>Loading...</div>,
  }
)

export const App: FC = () => {
  const [form, setForm] = useState('')

  const handleChangeForm: ChangeEventHandler<HTMLSelectElement> = e => {
    setForm(e.target.value)
  }

  return (
    <Container>
      <Block>
        <h3>Form area</h3>
        {form && <AsyncForm form={form} />}
      </Block>
      <Block>
        <h3>Description area</h3>
        <select value={form} onChange={handleChangeForm}>
          <option value="">Select a form</option>
          <option value="Basic">Basic form</option>
          <option value="SimpleValidation">SimpleValidation form</option>
        </select>
      </Block>
    </Container>
  )
}

export default App
