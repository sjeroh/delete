import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    //form은 전송후에 refresh(새로고침한다.) prevent로 막을 수 있다.
    //onChange는 input의 값이 바뀔때마다 실행하는 함수
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default App;
