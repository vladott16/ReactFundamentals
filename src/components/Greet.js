export const Greet = ({name, children}) => {
    return (
     <>
        <h1>Hello {name}</h1>
        {children}
     </>
    )
}