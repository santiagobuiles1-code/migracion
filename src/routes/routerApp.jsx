import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Information } from "../pages/Information";
import { Products } from "../pages/Products";

export let router = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/information",
        element: <Information />
    },
    {
        path: "/products",
        element: <Products />
    }
]