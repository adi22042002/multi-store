interface AuthLayoutProp{
    children:React.ReactNode;
}

const AuthLayout = ({children}:AuthLayoutProp) => {
  return (
    <div className="flex items-center justify-center h-screen ">{children}</div>
  )
}

export default AuthLayout