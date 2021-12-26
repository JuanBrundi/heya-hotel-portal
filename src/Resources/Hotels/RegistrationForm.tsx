import { SimpleForm, TextInput, Create, useRedirect, useNotify } from 'react-admin';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";
export const RegistrationForm = (props: any) => {
  //manually add basePath & resource because this form is accessible from the login page
  //and props is not passed from that page
  const notify = useNotify()
  const redirect = useRedirect()

  const save = async (data: any) => {
    const jwt: any = localStorage.getItem('username');
    const { sub } = jwt_decode<any>(jwt) || {};

    await fetch('http://localhost:3000/hotels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': jwt ? `Bearer ${jwt}` : ''
      },
      body: JSON.stringify({ ...data, userId: sub }),
    })
      .then(response => response.json())
      .then((data) => {
        redirect("/hotels")
        return
      })
      .catch((error) => {
        notify(error)
      });
  }

  return (
    <Create title="Registration" {...props} basePath="registration" resource="hotels">
      <SimpleForm save={save}>
        {/* <TextInput source="id" label="Metamask ID" /> */}
        {/* <TextInput source="status" label="Status" /> */}
        <TextInput source="name" label="Hotel Name" />
      </SimpleForm>
    </Create>
  )
};