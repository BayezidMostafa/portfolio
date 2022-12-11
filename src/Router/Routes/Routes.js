import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import ProjectDetails from "../../Pages/Home/Projects/ProjectDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/projects/:id', 
                loader: ({params}) => fetch(`https://portfolio-server-ten.vercel.app/projects/${params.id}`),
                element: <ProjectDetails/>
            }
        ]
    }
])

