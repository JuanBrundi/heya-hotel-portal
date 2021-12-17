import { useEffect } from 'react';
import { SimpleForm, TextInput, Create, useDataProvider, useCreate, useNotify} from 'react-admin';

export const CreateUser = (props: any) => {
  const dataProvider = useDataProvider();
  const notify = useNotify()
  const [create, { loading, error, data }] = useCreate();

  const onSuccess = async (res: any) => {
    const { email, metamaskHex, polkadotSs58 } = res?.data || {}
    const data = {
      email,
      pwd: metamaskHex ? metamaskHex : polkadotSs58 ? polkadotSs58 : ""
    }

    // await fetch('http://localhost:3000/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then(response => response.json())
    //   .then(({ access_token }) => {
    //     notify(`Register user succeed`)
    //     localStorage.setItem('username', access_token)
    //     return
    //   })
    //   .then(() => {
    //     notify(`Register your hotel`)
    //     redirect("/hotels/create")
    //   })
    //   .catch((error) => {
    //     notify(error)
    //   });
  }
  const save = async (data: any) => {
    create("auth/register", data)
  }

  useEffect(() => {
    console.log(data, "DATA NI BOSSS")
    console.log(loading, "LOADING NI BOSSS")
    console.log(error, "ERROR NI BOSSS")
  }, [data, loading, error])
  return (
    <Create
      title="Create new user"
      basePath="registration"
      resource="auth/register"
      onSuccess={onSuccess}
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
