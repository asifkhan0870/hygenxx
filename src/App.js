import "./App.css";
import CenterImg from "./components/Header/CenterImg/CenterImg";
import FAQ from "./components/Header/FAQ/FAQ";
import Footer from "./components/Header/Footer/Footer";
import Header from "./components/Header/Header";
import ImageCont from "./components/Header/ImageCont/ImageCont";
import Innermenu from "./components/Header/Innermenu/Innermenu";
import Input from "./components/Header/Input/Input";
import Navigation from "./components/Header/Navigation/Navigation";
import Relation from "./components/Header/Relation/Relation";

function App() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Relation></Relation>
      <Innermenu />
      <CenterImg></CenterImg>
      <ImageCont />
      <FAQ></FAQ>
      <Input></Input>
      <Footer></Footer>
    </div>
  );
}

export default App;
