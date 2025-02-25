/* eslint-disable react/prop-types */
import Part from "./Part";
  const Content = ({ parts }) => (
    <>
      {parts.map((p, i) => (
        <Part key={i} name={p.name} exercises={p.exercises} />
      ))}
    </>
  );

  export default Content;