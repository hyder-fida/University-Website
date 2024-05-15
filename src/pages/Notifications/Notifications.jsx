import { Link } from "react-router-dom";
import "./Notifications.css";
import Tabs from '../../Components/Tabs/Tabs';


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
    msg: "Apply for reevalvation",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Check your results here",
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
    msg: "Apply for reevalvation",
    url: "https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/",
  },
  {
    id: 1,
    msg: "Check your results here",
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
    msg: "Apply for reevalvation",
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
