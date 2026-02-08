import Hero from "../components/Hero";
import FirstAidKitGen from "../components/FirstAidKitGen";

const Home = ({ setActiveTab }) => {
  return (
    <>
      <Hero setActiveTab={setActiveTab} />
      {/**1 rem = usually 16px
          80 × 16 = 1280px
          Matlab ye element 1280px se zyada wide nahi hoga, chahe screen aur badi ho */}
      <div className="max-w-7xl mx-auto px-4">
        <FirstAidKitGen />
      </div>
    </>
  );
};

export default Home;
