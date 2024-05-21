import "./Notifications.css";
import Tabs from "../../Components/Tabs/Tabs";

const Notifications = () => {
  return (
    <div className="notifi-page ">
      <header className="bg-danger p-3">
        <h3 className=" text-white">Notifications </h3>
      </header>
      <div>
        <h1></h1>
        <Tabs />
      </div>
    </div>
  );
};

export default Notifications;
