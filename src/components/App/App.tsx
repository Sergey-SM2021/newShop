import Header from '../header/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import Bascet from '../bascet/Bascet';
import Catalog from '../catalog/Catalog'
import Auth from '../Authorization/Authorization'
import AnyCatalog from '../anyCatalog/anyCatalog'
import 'antd/dist/antd.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/' exact={true} render={() => <Main />}></Route>
          <Route path='/bascet' render={() => <Bascet />}></Route>
          <Route path='/catalog' exact={true} render={() => <Catalog />}></Route>
          <Route path='/authorization' render={() => <Auth />}></Route>
          <Route path='/catalog/:id' render={() => <AnyCatalog />}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
