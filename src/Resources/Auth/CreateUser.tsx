import { SimpleForm, TextInput, Create, useNotify } from 'react-admin';

export const CreateUser = (props: any) => {
  const notify = useNotify()
  
  const save = async (data: any) => {
    await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, role: "admin" }),
    })
      .then(response => response.json())
      .then(({ jwt }) => {
        localStorage.setItem('jwt', jwt)
        return
      })
      .catch((error) => {
        notify(error)
      });
  }

  return (
    <Create
      title="Create new user"
      basePath="registration"
      resource="auth/register"
      {...props}
    >
      <SimpleForm save={save} redirect="hotels">
        <TextInput source="email" label="Email" />
        <TextInput source="password" label="password" />
        <TextInput source="polkadotSs58" label="PolkadotSs58" />
        <TextInput source="metamaskHex" label="MetamaskHex" />
      </SimpleForm>
    </Create>
  )
};
