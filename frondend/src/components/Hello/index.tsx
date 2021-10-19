interface HelloProps {
  className?: string;
  name: string;
}

export const Hello = ({ className, name }: HelloProps) => {
  return <div className={className}>Hello {name}</div>;
};
