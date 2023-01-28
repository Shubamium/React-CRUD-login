import { Outlet } from "react-router-dom";
const Root = () => {
    return ( 
        <div id="main">
            <header>This is the header</header>
            <nav>
                this navigation
            </nav>

            <main>
                <Outlet></Outlet>
            </main>
        </div>
     );
}
 
export default Root;