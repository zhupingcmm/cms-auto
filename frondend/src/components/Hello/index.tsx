interface HelloProps {
  className?: string;
  name: string;
}

export const Hello = ({ className, name }: HelloProps) => (
  <div className={className}>Hello {name}</div>
);
