import { Link } from "react-router-dom";
import "./Notifications.css";

const links = [
  {
    id: 1,
    msg: "Visit to our admissions",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Apply for reevaltion",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Visit to our admissions",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Apply for reevaltion",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
];

const Notifications = () => {
  return (
    <div className="notifi-page mb-5 ">
      <header className="py-2">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light mt-4">
          <h1 className="text-center fw-semibold mt-5">Notifications </h1>
        </div>
      </header>

      <div className="container py-5">
        <div>
          {links.map((link) => (
            <div key={link.id}>
              <Link to={link.url}>{link.msg}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
