import { useDispatch, useSelector } from "react-redux";
import { SimpleForm, TextInput, Create, useNotify, useRedirect } from 'react-admin';
import { useEffect } from "react";

export const CreateUser = (props: any) => {
  const notify = useNotify()
  const redirect = useRedirect()
  const dispatch = useDispatch()

  const save = async (data: any) => {
    await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
      .then(response => response.json())
      .then((data) => {
        const { jwt, id } = data
        localStorage.setItem('username', jwt)
        dispatch({
          type: "USER_AUTH",
          payload: { id }
        })
        redirect("/hotels/create")
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
      <SimpleForm save={save}>
        <TextInput source="email" label="Email" />
        <TextInput source="password" label="password" />
        <TextInput source="polkadotSs58" label="PolkadotSs58" />
        <TextInput source="metamaskHex" label="MetamaskHex" />
      </SimpleForm>
    </Create>
  )
};

