import './App.css';
import crudProvider from 'ra-data-nestjsx-crud'
import { Admin, Resource } from 'react-admin';
import { HotelList } from './Resources/Hotels/hotel-list';
import MyLayout from './MyLayout';
import AuthProvider from './AuthProvider';
import LoginWithTheme from './MyLoginPage';
import { Route } from 'react-router';
import { RegistrationForm,EditHotel } from './Resources/Hotels';

const dataProvider = crudProvider('http://localhost:3000');
const App = () => 
    <Admin 
      dataProvider={dataProvider}
      layout={MyLayout}
      authProvider={AuthProvider}
      loginPage={LoginWithTheme}
      customRoutes={[
        <Route
            key="registration"
            path="/registration"
          component={RegistrationForm}
        />
      ]}
    >
      { permissions => [
        <Resource name="hotels" list={HotelList} create={RegistrationForm} edit={EditHotel}/>
      ]}
    </Admin>

export default App;