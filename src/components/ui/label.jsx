export const Label = ({ children, ...props }) => (
  <label {...props} className={`block mb-1 font-medium text-gray-700 ${props.className}`}>
    {children}
  </label>
);
