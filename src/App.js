import './App.css';
import { ClickHandler } from './components/ClickHandler';
import { Form } from './components/Form';
import {Greet} from './components/Greet';
import { Message } from './components/Message';
import { NameList } from './components/NameList';
import { ParentComponent } from './components/ParentComponent';
import { Stylesheet } from './components/Stylesheet';
import { UserGreeting } from './components/UserGreeting';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import ClassComponent from './components/ClassComponent';
function App() {
  return (
    <div className="App">
      <Greet name = 'Props are immutable. States are mutable.'/>
      <Greet name = 'Tadeas'>This is children props</Greet>
      <Message />
      <ClickHandler />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheet />
      <Form />
      <PostList />
      <PostForm />
      <ClassComponent />
    </div>
  );
}

export default App;
