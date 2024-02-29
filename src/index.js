import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const root = createRoot(document.getElementById("app"))
root.render(
    <StrictMode>
        <Router>
            <App/>
        </Router>
    </StrictMode>
    )