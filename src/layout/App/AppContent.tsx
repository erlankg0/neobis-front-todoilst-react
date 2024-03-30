import App from "./App.tsx";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import store from '../../redux/store.ts';
import {persister} from "../../redux/store.ts";

const AppContent = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persister} loading={null}>
                <div className={'container'}>
                    <App/>
                </div>
            </PersistGate>
        </Provider>

    )
}

export default AppContent