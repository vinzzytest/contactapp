import { HomeComponent } from "../Home/Contact.HomeComponent";
import { RegistrationComponent } from "../Registration/Contact.RegistrationComponent";
import { LoginComponent } from "../Login/Contact.LoginComponent";

export const MainRoutes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Registration', component: RegistrationComponent },
    { path: 'Login', component: LoginComponent },
    { path: '', component: HomeComponent }
    
];