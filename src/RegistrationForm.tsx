import { SimpleForm, TextInput, Create } from 'react-admin';

export const RegistrationForm = (props: any) => {
    //manually add basePath & resource because this form is accessible from the login page
    //and props is not passed from that page
    return (
        <Create title="Registration" {...props} basePath="registration" resource="hotels">
            <SimpleForm>
                <TextInput source="id" label="Metamask ID" />
                <TextInput source="status" label="Status" />
                <TextInput source="name" label="Hotel Name" />
            </SimpleForm>
        </Create>
    )
};