import App from "./App.tsx";
import {Provider} from "react-redux";
import store from '../../redux/store.ts';
const AppContent = () => {
    return (
        <Provider store={store}>
            <div className={'container'}>
                <App/>
            </div>
        </Provider>

    )
}

export default AppContent