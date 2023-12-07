import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow flex-row container mx-auto">
        <section className="basis-1/4 px-4 py-4 ">
          <div className="bg-stone-200">Category </div>
        </section>
        <section className="basis-2/4 px-4 py-4">
          <div className="bg-stone-200">Products </div>
        </section>
        <section className="basis-1/4 px-4 py-4">
          <div className="bg-stone-200">Filters </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default App;
