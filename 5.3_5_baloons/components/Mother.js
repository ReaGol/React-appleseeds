import Balloon from "./Balloon";
import Child from "./Child";

const Mother = () => {
  const arrOfColor = [
    { name: "Ori", color: "red" },
    { name: "Ron", color: "blue" },
    { name: "Sigalit", color: "green" },
    { name: "Ruti", color: "yellow" },
    { name: "Alon", color: "purple" },
  ];
  return (
    <div className='mother'>
      <h1>A Tale of Five Balloons</h1>
      <div class='mother_c'>
        {arrOfColor.map((kid) => {
            return (
              <Child>
                <h3>{kid.name}</h3>
                <Balloon>{kid.color}</Balloon>
              </Child>
            );
          })}
      </div>
    </div>
  );
};

export default Mother;
