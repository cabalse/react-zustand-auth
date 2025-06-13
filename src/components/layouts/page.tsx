const Page = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col h-screen w-screen p-12">{children}</div>;
};

export default Page;
