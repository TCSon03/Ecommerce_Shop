import "./App.css";
import Header from "@components/header/Header";
import Layout from "@components/layout/Layout";
import Footer from "@components/footer/Footer";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <div className="content">
          <h1>Welcome to the App</h1>
          <p>This is a simple React application.</p>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
