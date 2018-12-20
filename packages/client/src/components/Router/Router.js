import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from '../../App'

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    }
}