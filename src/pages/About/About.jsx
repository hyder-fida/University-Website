import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AboutUsSectionImg from "../../utils/images/about-us-section-img.jpg";
import ChooseSection from "../../Components/ChooseSection/ChooseSection";
import Person1 from "../../utils/images/person1.jpg";
import Person2 from "../../utils/images/person2.jpg";
import Person3 from "../../utils/images/person3.jpg";
import Person4 from "../../utils/images/person4.jpg";
import Person5 from "../../utils/images/person5.jpg";
import Person6 from "../../utils/images/person6.jpg";
import Person7 from "../../utils/images/person7.jpg";
import Person8 from "../../utils/images/person8.jpg";
import Person9 from "../../utils/images/person9.jpg";

const persons = [
  {
    id: 1,
    img: [Person1],
  },
  {
    id: 2,
    img: [Person2],
  },
  {
    id: 3,
    img: [Person3],
  },
  {
    id: 4,
    img: [Person4],
  },
  {
    id: 5,
    img: [Person5],
  },
  {
    id: 6,
    img: [Person6],
  },
  {
    id: 7,
    img: [Person7],
  },
  {
    id: 8,
    img: [Person8],
  },
  {
    id: 9,
    img: [Person9],
  },
];

function About() {
  return (
    <div className="about-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">About Us</h1>
          <p className="text-center w-75 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut
            ratione dolore quasi at dolores molestias.
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">Study with us</h2>
            <p>
              About us The Islamic University of Science and Technology (IUST),
              Awantipora, J&K has been established through an Act No. XVIII of
              2005 dated: 7th November 2005 passed by J&K State Legislature and
              notified by the State Government, through Jammu & Kashmir
              Government Gazette dated: 11-11-2005. While the university started
              functioning in November, 2005 the teaching programme was started
              in July 2006. The Chancellor of the University is the Lieuteutant
              Governor of Union Territory of Jammu & Kashmir and the executive
              authority of the University is its Executive Council with the Vice
              Chancellors of University of Jammu, University of Kashmir and Baba
              Ghulam Shah Badshah University as members. The University is
              accredited by NAAC with Grade ‘B’ and is recognized by University
              Grants Commission (UGC) under Section 2(f) and Section 12(b) of
              UGC Act. The Technical and nursing programmes offered by the
              University are approved by All India Council for Technical
              Education (AICTE) and Indian Nursing Council (INC). The University
              has the membership of Association of Indian Universities (AIU).
              The University came into existence with a mandate to advance and
              disseminate knowledge, wisdom and understanding amongst all
              segments of the society within and outside the State. It is also
              charged with creating an environment for learning, teaching and
              research in the sciences, technology, humanities and social
              sciences and that is in keeping with the highest standards of
              scholarship and higher education. People belonging to all sections
              of society are entitled to avail the facilities and opportunities
              offered by the University and there is no distinction on the basis
              of class, caste, creed, colour or religion!
            </p>
            <p className="mb-4 mb-lg-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas
              ipsa assumenda eos veritatis nemo fuga dolore saepe eius, laborum
              earum magni id quae quidem tempore tempora consequuntur eveniet
              voluptatibus, suscipit atque, voluptatem blanditiis deleniti
              perferendis dolores. Architecto corporis sit suscipit labore modi
              sint facilis alias laboriosam facere et? Quo eum neque dolores
              iure, nam voluptates nesciunt quisquam modi maxime alias!
              Blanditiis vel dicta voluptates ab vero quia incidunt facilis
              ratione deserunt, inventore atque necessitatibus?
            </p>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={AboutUsSectionImg} className="img-fluid w-75" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-dark text-light py-5">
        <ChooseSection />
      </div>

      <div className="bg-body-tertiary py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Winners</h2>
          <div className="row g-4">
            {persons.map((person) => (
              <div key={person.id} className="col-md-4">
                <img src={person.img} className="img-fluid" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
