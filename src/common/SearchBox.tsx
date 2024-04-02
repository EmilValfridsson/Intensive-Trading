interface Props {
  value: string;
  onChange(value: string): void;
}

function SearchBox({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="form-control mb-2"
      placeholder="Search..."
    />
  );
}

export default SearchBox;
