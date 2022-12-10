import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/Routes/Routes";

function App() {
  return (
    <div className="bg-black">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
