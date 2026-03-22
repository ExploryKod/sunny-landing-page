export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="bg-transparent">
      <div className="header-container">
        {children}
      </div>
    </header>
  );
}