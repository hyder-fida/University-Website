import { Link } from "react-router-dom";
import "./Notifications.css";
import Tabs from "../../Components/Tabs/Tabs";

const links = [
  {
    id: 1,
    msg: "Visit to our admissions",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 2,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 3,
    msg: "Apply for reevaltion",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 4,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 5,
    msg: "Visit to our admissions",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 6,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 7,
    msg: "Apply for reevalvation",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 80,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 8,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 9,
    msg: "Apply for reevaltion",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 10,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 11,
    msg: "Visit to our admissions",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 12,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 13,
    msg: "Apply for reevalvation",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 14,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 150,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 15,
    msg: "Apply for reevaltion",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 159,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 16,
    msg: "Visit to our admissions",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 17,
    msg: "Batch 2024 Result declared here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 18,
    msg: "Apply for reevalvation",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 19,
    msg: "Check your results here",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
];

const Notifications = () => {
  return (
    <div className="notifi-page ">
      { <header className="bg-danger p-3">
        <h3 className=" text-white">Notifications </h3>
      </header> }

      {/* <div
        className="container overflow-auto py-5 flex-wrap"
        style={{ maxHeight: "60vh" }}
      >
        <div>
          {links.map((link) => (
            <div key={link.id}>
              <Link to={link.url}>{link.msg}</Link>
            </div>
          ))}
        </div>
      </div>*/}
      <div>  
      <h1></h1>
      <Tabs/>

    </div>
    </div>
  );
};

export default Notifications;