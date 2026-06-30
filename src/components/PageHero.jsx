export default function PageHero({ breadcrumb, title, gold, description }) {
  return (
    <div className="page-hero">
      <div className="breadcrumb">{breadcrumb}</div>
      <h1>{title} {gold && <span className="gold">{gold}</span>}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}
