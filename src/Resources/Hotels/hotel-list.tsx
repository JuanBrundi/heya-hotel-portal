import { List, Datagrid, TextField } from 'react-admin';

export const HotelList = (props: any) => (
    <List {...props} resource="hotels">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="status" />
        </Datagrid>
    </List>
);