export default function Icon({ name, ...props }) {
  return (
    <svg {...props}>
      <use href={`#ic-${name}`} />
    </svg>
  );
}
