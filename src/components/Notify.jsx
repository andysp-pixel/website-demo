export default function Notify({ message }) {
  if (!message) return null;
  return <div className="notify">{message}</div>;
}
