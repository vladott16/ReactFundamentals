export const ChildComponent = (props) => {
  return (
    <div>
        <button onClick={() => props.greetHandler('child')}>Greet parent</button>
    </div>
  )
}
