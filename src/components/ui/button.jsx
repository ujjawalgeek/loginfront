export const Button = ({ children, ...props }) => (
  <button
    {...props}
    className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${props.className}`}
  >
    {children}
  </button>
);
