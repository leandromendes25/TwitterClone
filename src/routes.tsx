import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./components/Status";
import { Default } from "./layout/Default";

export const router = createBrowserRouter([
    
   {
    path: '/',
    element: <Default/>,
    //quais páginas terão o sidebar na esquerda
    children: [
        {
        path: '/',
        element: <Timeline/>
    },
    {
        path: '/status',
        element: <Status/>
    }]
   }
])