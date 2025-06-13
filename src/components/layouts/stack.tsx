const Stack = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col w-full gap-4">{children}</div>;
};

export default Stack;
