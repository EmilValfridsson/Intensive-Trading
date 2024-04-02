export default function StatisticsNews() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        minHeight: "100vh",
      }}
    >
      <ul
        className="menu bg-base-200 rounded-box"
        style={{ width: "100%", maxWidth: "800px" }}
      >
        <li className="menu-title" style={{ fontSize: "24px" }}>
          Statistik & Nyheter
        </li>
        <li>
          <a style={{ fontSize: "20px" }}>Item 1</a>
        </li>
        <li>
          <a style={{ fontSize: "20px" }}>Item 2</a>
        </li>
        <li>
          <a style={{ fontSize: "20px" }}>Item 3</a>
        </li>
      </ul>
    </div>
  );
}
