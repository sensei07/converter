import { useContext } from "react";
import { CourseInfoContext } from "../../App";

const CourseInfoList = () => {
  const items = useContext(CourseInfoContext);
  return (
    <>
      {items
        .filter((obj) => {
          if (obj.cc.includes("EUR") || obj.cc.includes("USD")) {
            return true;
          }
          return false;
        })
        .map((obj) => (
          <li key={obj.cc} className="menu__list-item">
            {obj.cc + " - " + obj.rate}
          </li>
        ))}
    </>
  );
};

export default CourseInfoList;
