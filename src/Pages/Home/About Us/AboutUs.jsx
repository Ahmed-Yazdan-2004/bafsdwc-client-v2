import CommonTitle from "../../../Components/CommonTitle/CommonTitle";
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="about-" style={{ margin: "0 13%" }}>
      <CommonTitle
        title={"ABOUT US"}
        height={document.getElementsByClassName("about-us").clientHeight}
      ></CommonTitle>
      <div className="flex flex-row">
        <div className="basis-1/2 pr-12">
          <p
            style={{ color: "#FFFFFF", width: "100%" }}
            className="ctext pr-12 mr-12 text-2xl leading-loose text-left"
          >
            Unleashing the Power of Words! <br />
            <br />
            With this thought, a family named BAF Shaheen College Dhaka Writers'
            Club established on November 1, 2017 by our visionary Founding
            President Omar Fahean Hamim and dynamic General Secretary Ivy Akter.
            With the power of their initiative, BAFSDWC continues its legacy
            till this day. From our humble beginning with 30 founding members
            and 7 initial activities, we've grown into a precious family to be
            reckoned with. Guided by our dedicated Moderator Naima Akter Ma'am
            and Co-moderator Abdur Rahman Sir, we've reached new heights with
            our biggest achievement named "Shahittokanon"! a literary event that
            brought together nearly 750 institutions in 2021.
          </p>
        </div>
        <div className="basis-1/2">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg"
            alt=""
          />
        </div>
      </div>

      {/* PART 2 */}

      <div className="flex flex-row-reverse my-12">
        <div className="basis-1/2 pr-12">
          <p
            style={{ color: "#FFFFFF", width: "100%" }}
            className="ctext pr-12 ml-12 text-2xl leading-loose text-left"
          >
            Today, with 17 members in our passionate executive committee, we
            continue to foster a love for language and creativity. We believe
            that everyone has a story to tell and we're here to help you find
            your voice and share it with the world. So, whether you're a
            seasoned author or just starting to explore the magic of words, we
            invite you to join BAF Shaheen College Dhaka Writers Club. Let your
            pen be the pioneer!
          </p>
        </div>
        <div className="basis-1/2">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
