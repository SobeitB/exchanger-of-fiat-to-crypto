import {withProviders} from "./middlewares";
import {MainPage} from "pages/main";

function App() {
  return (
    <div className="App">
        <MainPage />
    </div>
  )
}

export default withProviders(App)
