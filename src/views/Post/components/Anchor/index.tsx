import { useArticleAnchorContext } from "../../contexts";

export default function Article() {
  const { anchors } = useArticleAnchorContext();

  return (
    <aside
      style={{
        position: "sticky",
        top: "160px",
        display: "flex",
        alignItems: "flex-start",
        height: "100%",
        padding: "20px",
      }}
    >
      <ul>
        {anchors.map(({ id, title, level }) => (
          <li key={id} style={{ marginLeft: `${(level - 1) * 16}px` }}>
            <a href={`#${title}`}>{title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
