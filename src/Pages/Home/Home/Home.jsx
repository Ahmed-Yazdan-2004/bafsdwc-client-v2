import MyParticles from "./MyParticles";
import "./Home.css"
import AboutUs from "../About Us/AboutUs";

const Home = () => {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const mouseXspring = useSpring(x);
  // const mouseYspring = useSpring(y);

  // const rotateX = useTransform(
  //   mouseYspring,
  //   [-0.5, 0.5],
  //   ["17.5deg", "-17.5deg"]
  // );
  // const rotateY = useTransform(
  //   mouseXspring,
  //   [-0.5, 0.5],
  //   ["17.5deg", "-17.5deg"]
  // );

  // const handleMouseMove = (e) => {
  //   const rect = e.target.getBoundingClientRect();
  //   const width = rect.width;
  //   const height = rect.height;

  //   const mouseX = e.clientX - rect.left;
  //   const mouseY = e.clientY - rect.top;

  //   const xPct = mouseX / width - 0.5;
  //   const yPct = mouseY / height - 0.5;

  //   setX(xPct);
  //   setY(yPct);
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <img
          className="image"
          src="../../../../Images/bafsdwc3.png"
          alt="BAF Shaheen College Dhaka Writers' Club logo"
          style={{
            width: "250px",
            height: "250px",
            transition:"transform 0.3s ease-out",
            margin:"3%"
          }}
        />
        <h1
          style={{
            fontSize: "3.5rem",
            fontFamily:" Roboto, sans-serif",
            // fontFamily: "'Bebas Neue', sans-serif",
            color: "#FFD700",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          BAF SHAHEEN COLLEGE DHAKA WRITERS' CLUB
        </h1>
        <span style={{ fontSize: "18px", color: "#FFFFFF"}}>
          Let your pen be the pioneer.
        </span>
      </div>
      <MyParticles></MyParticles>
      <AboutUs></AboutUs>
    </>
  );
};
export default Home;
