export const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="bg-transparent">
      <div className="footer-container">
      {children}
      </div>
    </footer>
  );
}