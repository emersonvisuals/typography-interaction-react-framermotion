import "./App.css";
import Title from "./Components/Title/Title";
import First from "./images/first.png";
import Second from "./images/second.png";
import Third from "./images/third.png";
import Fourth from "./images/fourth.png";
import Fifth from "./images/fifth.png";

function App() {
    return (
        <div className="App">
            <section className="typography-container">
                <Title first="outdoor" second="escapes" image={First} />
                <Title first="cit" second="ies" image={Second} />
                <Title first="coas" second="tals" image={Third} />
                <Title first="des" second="erts" image={Fourth} />
                <Title first="forest" second="trails" image={Fifth} />
            </section>
        </div>
    );
}

export default App;
