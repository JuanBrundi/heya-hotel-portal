import { SimpleForm, TextInput, Edit } from 'react-admin';

export const EditHotel = (props: any) => {
    //manually add basePath & resource because this form is accessible from the login page
    //and props is not passed from that page
    return (
        <Edit title="Edit" {...props}>
            <SimpleForm>
                <TextInput source="id" label="Metamask ID" />
                <TextInput source="status" label="Status" />
                <TextInput source="name" label="Hotel Name" />
            </SimpleForm>
        </Edit>
    )
};