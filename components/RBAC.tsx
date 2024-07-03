const CURRENT_USER_TYPE = localStorage.getItem("role");
interface Element {
  children: React.ReactNode;
}
function AdminElement({ children }: Readonly<Element>) {
  if (CURRENT_USER_TYPE === "admin") {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h1>You don't have permission to access, Please login!</h1>
      </div>
    );
  }
}
function UserElement({ children }: Readonly<Element>) {
  if (CURRENT_USER_TYPE === "user") {
    return <>{children}</>;
  } else {
    return (
      <div>
        <h1>You don't have permission to access,Please login!</h1>
      </div>
    );
  }
}
export { AdminElement, UserElement };
