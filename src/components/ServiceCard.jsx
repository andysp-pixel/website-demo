import Icon from './Icon.jsx';

export default function ServiceCard({ icon, title, children, onClick }) {
  return (
    <div className="service-card" onClick={onClick}>
      <div className="service-icon-wrap"><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
