import { BrowserRouter, Switch, Route } from "react-router-dom"
import ResetCSS from "./ResetCSS"
import LoginPage from "./LoginPage"
import SignInPage from "./SignInPage"
import HabitsPage from "./HabitsPage"

const App = () => {
    return (
        <BrowserRouter>
            <ResetCSS />

            <Switch>
                <Route path='/' exact>
                    <LoginPage />
                </Route>
                <Route path='/cadastrar' exact>
                    <SignInPage />
                </Route>
                <Route path='/habitos' exact>
                    <HabitsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App