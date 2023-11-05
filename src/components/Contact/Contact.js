export const Contact = ({ data: { name, number, id } }) => {
  return (
    <li key={id}>
      Name: {name} Number: {number}
    </li>
  );
};
