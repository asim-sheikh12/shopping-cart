import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";                             
import { DisplayPage} from "./Components/DisplayPage";
import 'antd/dist/antd.css';
import './App.css';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import 'bootstrap/dist/css/bootstrap.min.css'
import HttpApi from 'i18next-http-backend';
import {initReactI18next } from "react-i18next";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Cart} from './Components/Cart'
import { Login } from "./Components/Login";
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en','fr', 'ar','CN'], 
    fallbackLng: "en",
    detection : {
      order: ['cookie', 'htmlTag','localStorage', 'sessionStorage','path', 'subdomain'],
      caches : ['cookie']
    },
    backend: {
        loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react : {
      useSuspense : false
    },
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route  path ='/displaypage' element={<DisplayPage/>}/>
      </Routes>
        <Routes>
      <Route path ='/cart' element={<Cart/>}/>
      </Routes>
        <Routes>
      <Route path ='/' element={<Login/>}/>
      </Routes>
      </Router>
    </div> 
  );
}

export default App;
