import Home from "./pages/HomePage/Home";
import { Provider } from "../components/ui/provider";

const App: React.FC = () => {

    document.title = "Password Generator"


    return (
        <main className="main">
            <Provider>
                <Home />
            </Provider>
        </main>
    )
}

export default App;