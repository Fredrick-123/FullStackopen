/* eslint-disable react/prop-types */
const Total = ({ parts }) => (
    <p>
      <b>
        total of {parts.map((p) => p.exercises).reduce((a, cv) => a + cv)}{' '}
        exercises
      </b>
    </p>
  );

  export default Total