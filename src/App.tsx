import Credits from "./components/Credits";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <Credits />
      <MainContainer />
    </div>
  )
}