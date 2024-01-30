import {useState} from "react";
import Header from "./components/header/header";
import Table from "./components/table/table";
import "./App.css";


const App = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const onClickFavourite = () => {
    setIsActive(false);
  };
  const onClick = () => {
    setIsActive(true);
  };

  return (
    <div className="App">
      <Header favourite={isActive} onClick={onClick} onClickFavourite={onClickFavourite} />
      <Table favourite={isActive} />
    </div>
  );
};

export default App;
