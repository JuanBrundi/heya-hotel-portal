import './App.css';
import crudProvider from 'ra-data-nestjsx-crud'
import { Admin, Resource } from 'react-admin';
import { HotelList } from './Resources/Hotels/hotel-list';
import MyLayout from './MyLayout';
import AuthProvider from './AuthProvider';
import LoginWithTheme from './MyLoginPage';
import { Route } from 'react-router';
import { RegistrationForm, EditHotel } from './Resources/Hotels';
import { CreateUser } from "./Resources/Auth";
import { customStateReducer } from "./CustomRedux";

const dataProvider = crudProvider('http://localhost:3000');
const App = () =>
  <Admin
    customReducers={{ customState: customStateReducer }}
    dataProvider={dataProvider}
    layout={MyLayout}
    authProvider={AuthProvider}
    loginPage={LoginWithTheme}
    customRoutes={[
      <Route
        key="auth"
        path="/auth/register"
        component={CreateUser}
      />
    ]}
  >
    {permissions => [
      <Resource name="hotels" list={HotelList} create={RegistrationForm} edit={EditHotel} />,
      <Resource name="auth" create={CreateUser} />
    ]}
  </Admin>

export default App;