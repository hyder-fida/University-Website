import "./home.css";
import "./card.css";
import "./home.css";
import { Link } from "react-router-dom";
import ChooseSection from "../../Components/ChooseSection/ChooseSection";
import StartCoursesImg from "../../utils/images/start-courses-img.jpg";
import FaqAccordion from "../../Components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";
import { useEffect, useState } from "react";
import Notifications from "../Notifications/Notifications";
import News from "../../Components/News/News";
import Events from "../../Components/Events/Events";
import vcImg from "../../utils/images/vc.jpg";

// to b added
const blogs = [
  {
    id: 1,
    img: Blog1Img,
    title: "Blog 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 2,
    img: Blog2Img,
    title: "Blog 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 3,
    img: Blog3Img,
    title: "Blog 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
];

function Home() {
  const [blogsId, setBlogsId] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlogsId((prevId) => (prevId + 1) % blogs.length);
    }, 5000); // Change the interval duration as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, []); // This effect runs only once when the component mounts

  return (
    <div className="home-page">
      <header
        className=" h-100 min-vh-100 d-flex align-items-center text-light"
        style={{
          backgroundImage: `url(${blogs[blogsId].img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="container d-flex flex-column align-items-center ">
          <h2>Welcome To</h2>
          <h1 className="text-center fw-semibold">
            Islamic University Of Science And Technology
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi
            debitis, et quas voluptatibus nam ex. Necessitatibus eligendi
            ratione expedita! Porro, ut.
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our Courses
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-5 m-auto">
        <div className="row">
          <div className="col-lg-8  mb-4 mb-lg-0">
            <Notifications />
          </div>
          <div className="col-lg-4">
            {/* <VcProfile /> */}
            <div className="manual-card">
              <img src={vcImg} alt="Card" className="card-image" />
              <div className="card-content">
                <h2 className="card-title text-center mb-4">
                  Prof Shakeel Ahmed Ramshoo
                </h2>
                <p className="card-description">
                  I am delighted to welcome you to Islamic University of Science
                  and Technology (IUST)...
                </p>
                <a href="/vcprofile" className="card-button">
                  Read more
                </a>
              </div>
            </div>

            {/* end */}
          </div>
        </div>
      </div>

      <div className="py-5 ">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">2024 start courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, placeat.
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCoursesImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5 text-dark">
            Latest on the blogg{" "}
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Read More Blogs
            </button>
          </Link>
        </div>
      </div>
      <News />
      <div>
        <Events />
      </div>
    </div>
  );
}

export default Home;
