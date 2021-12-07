import './App.css';
import crudProvider from 'ra-data-nestjsx-crud'
import { Admin, Resource } from 'react-admin';
import { HotelList } from './Resources/Hotels/hotel-list';
import MyLayout from './MyLayout';

const dataProvider = crudProvider('http://localhost:3000');
const App = () => 
    <Admin 
      dataProvider={dataProvider}
      layout={MyLayout}
    >
      <Resource name="hotels" list={HotelList} />
    </Admin>

export default App;