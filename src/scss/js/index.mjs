import { setFormRegisterListener } from "./handlers/register.mjs";
import { setFormLoginListener } from "./handlers/login.mjs";



const path = location.pathname;
if (path === "/profile/login/index.html") {
    setFormLoginListener()
} else if (path === "/profile/register/index.html") {
    setFormRegisterListener()
}
