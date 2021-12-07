import { useGetOne } from "ra-core";
import { Loading, Error } from "react-admin";
import { Hotel } from "../../types";


export function HotelStatus( props:{id: string} ) {
    // const [setError] = useState();
        // useEffect(() => {
        const { data, loading, error } = useGetOne<Hotel>('hotels/statuses', props.id);
        if (loading) return <Loading />;
        if (error) return <Error                                 
                error={{} as Error}
                errorInfo={error}
            />;
        return <div>User {data?.status}</div>;
    // }
};