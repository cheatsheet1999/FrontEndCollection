
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreatePage from "./pages/CreatePage";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
const App = () => {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path={'/user'} component={UserPage}/>
                    <Route path={'/create'} component={CreatePage}/>
                    <Route path={'/view/:id'} component={DetailPage}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;
