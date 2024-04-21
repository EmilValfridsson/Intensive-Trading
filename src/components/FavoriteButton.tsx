interface Props {
  isFavored: boolean;
  onFavor(): void;
}

export default function FavoriteButton({ isFavored, onFavor }: Props) {
  let classes = "fa-star fa-";
  classes += isFavored ? "solid" : "regular";

  return (
    <i
      className={classes}
      onClick={onFavor}
      style={{ position: "absolute", left: "-20px" }}
    ></i>
  );
}
