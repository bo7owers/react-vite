import "./search-history.css";
export default function SearcHistory(props) {
  return (
    // terms come from MainCont
    <ul className="search-list">
      {props.terms.map((term) => (
        <li key={term}>{term}</li>
      ))}
    </ul>
  );
}
