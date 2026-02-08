import Hero from "../components/Hero";
import FirstAidKitGen from "../components/FirstAidKitGen";

const Home = ({ setActiveTab }) => {
  return (
    <>
      <Hero setActiveTab={setActiveTab} />
      <div className="max-w-7xl mx-auto px-4">
        <FirstAidKitGen />
      </div>
    </>
  );
};

export default Home;
