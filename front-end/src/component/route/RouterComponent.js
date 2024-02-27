import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';  // npm install react-router@5 react-router-dom@5
import ListSampleComponent from '../sample/ListSampleComponent';
import AddSampleComponent from '../sample/AddSampleComponent';
import EditSampleComponent from '../sample/EditSampleComponent';

const style = {
    margin: '10'
}

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Route path="/" exact={true} component={ListSampleComponent} />
                    <Route path="/samples" exact={true} component={ListSampleComponent} />
                    <Route path="/add-sample" exact={true} component={AddSampleComponent} />
                    <Route path="/edit-sample" exact={true} component={EditSampleComponent} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;