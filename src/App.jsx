import AvatarComponent from "./components/AvatarComponent";
import BtnPrimary, { ButtonSecondary } from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const unreadMessages = [2, 4, 4, 3];
  function handleClick() {
    alert("Button clicked! ");
  }
  const students=[
    {
      id:1,
      username:"nini",
      profile:"https://i.pinimg.com/236x/7a/b1/cf/7ab1cf1c041e57e20d8a8e4d74febcd3.jpg"
    },
    {
      id:2,
      username:"dada",
      profile:"https://i.pinimg.com/236x/57/c3/b6/57c3b6e5c8a341c8b84a7e8691ae6369.jpg"
    },
    {
      id:3,
      username:"yaya",
      profile:"https://i.pinimg.com/236x/d1/3d/0c/d13d0cd5bf954595cf245b5d0993210f.jpg"
    }
  ]
  return (
    <>
    {unreadMessages.length >0 && (
      <h2>You have {unreadMessages.length} unreadMessages. </h2>
    )}
      <BtnPrimary title="Login" onClick={handleClick}/>
      <BtnPrimary color="bg-green-600" title="Sign up" />
      <h1 className="text-4xl text-center font-bold">Top student in clas</h1>
      {
        students.map((student, index)=>(
          <AvatarComponent
          key={index}
            id={student.id}
            username={student.username}
            image={student.profile}
          />
        ))
      }
      
    </>
  );
}

export default App;
