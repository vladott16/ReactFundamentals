export const UserGreeting = () => {
    const isLoggedIn = false;
  return (
    <>
    <div>Welcome {isLoggedIn ? 'Vladimir' : 'Guest'}</div>
    <div>Welcome {isLoggedIn && 'Vladimir'}</div>
    </>
  )
}
