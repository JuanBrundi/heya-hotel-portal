import {ErrorInfo} from 'react';
import { useState, useEffect } from 'react';
import { useDataProvider, Loading, Error, ListProps } from 'react-admin';
import {Hotel} from '../../types';


export const CreateHotel = ( props: {id: string} ) => {
    const dataProvider = useDataProvider();
    const [hotel, setHotel] = useState<Hotel>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [errorInfo, setErrorInfo] = useState(undefined);
    const [title, setTitle] = useState("Hotel Status")
    useEffect(() => {
        dataProvider.getOne<Hotel>('hotels/status', { id: props.id })
            .then(({ data }) => {
                setHotel(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error                                 
                        error={{} as Error}
                        errorInfo={errorInfo}
                        title={title as string}/>;
    if (!hotel) return null;

    return (
        <ul>
            <li>Name: {hotel.name}</li>
            <li>Email: {hotel.email}</li>
        </ul>
    )
};