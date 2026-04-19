import "./HorizontalRule.css";

const colours = [
  "#FE3636",
  "#F66C02",
  "#DBC302",
  "#85961F",
  "#14BFAF",
  "#1A2F96",
  "#624BAD",
  "#FD39D4",
];

export function HorizontalRule() {
  return (
    <div className="horizontal-rule">
      {colours.map((colour) => (
        <div key={colour} style={{ backgroundColor: colour }} />
      ))}
    </div>
  );
}
