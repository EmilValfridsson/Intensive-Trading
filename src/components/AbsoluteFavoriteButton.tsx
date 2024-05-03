interface Props {
  isFavored: boolean;
  onFavor(): void;
}

export default function AbsoluteFavoriteButton({ isFavored, onFavor }: Props) {
  let classes = "relative fa-star fa-";
  classes += isFavored ? "solid" : "regular";

  return (
    <i
      className={classes}
      onClick={onFavor}
      style={{
        position: "absolute",
        top: "4px",
        left: "150px",
        cursor: "pointer",
      }}
    ></i>
  );
}
