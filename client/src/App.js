import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/SucessoCadastro";
import Bicicleta from "./components/pages/Bicicleta";
import Login from "./components/pages/Login";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Cadastro from "./components/pages/Cadastro";
import Civil from "./components/pages/Civil";
import CadastroCivil from "./components/pages/CadastroCivil";
import SucessoBicicleta from "./components/pages/SucessoBicicleta";

class App extends Component {
  state = {
    response: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/mensagem");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bicicleta" element={<Bicicleta />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/veiculo" element={<Civil />} />
            <Route path="/sucessoCadastro" element={<sucessoCadastro />} />
            <Route path="/cadastrocivil" element={<CadastroCivil />} />
            <Route path="/sucessoBicicleta" element={<SucessoBicicleta />} />
          </Routes>
        </Container>
        <p className="App-intro">{this.state.response}</p>
        <Footer />
      </Router>
    );
  }
}

export default App;
