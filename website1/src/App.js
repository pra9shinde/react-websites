import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages';
import SiginPage from './pages/signin';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/signin' component={SiginPage} exact />
            </Switch>
            {/* <Home /> */}
        </Router>
    );
}

export default App;
