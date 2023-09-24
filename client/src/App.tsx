import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import Main from './layuot/main/Main';
import './App.css';
import { PersistGate } from 'redux-persist/es/integration/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './layuot/header/Header';
import Footer from './layuot/footer/Footer';

function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
