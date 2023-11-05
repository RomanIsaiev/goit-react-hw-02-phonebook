export const Contact = ({ data: { name, number, id }, onDeleteContact }) => {
  return (
    <li key={id}>
      <div>
        Name: {name} Number: {number}
      </div>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};
