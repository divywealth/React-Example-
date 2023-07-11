import { useSelector, useDispatch } from "react-redux";
import "./Homepage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADDTODO, DELETE_TODO, JUST_TEST } from "../store/actions/actions";
import NotificationService from "../services/NotificationService";
function Homepage() {
  const todos = useSelector((state) => state.todos);
  const name = useSelector((state) => state.name);
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const newId = parseInt(id);
  const data = {
    id: newId,
    text: value,
  };
  const handleClick = () => {
    if (value === "" && id === "") {
      return;
    }
    dispatch(ADDTODO(data));
    setId("");
    setValue("");
  };
  const handleDelete = (index) => {
    dispatch(DELETE_TODO(index));
  };
  const goToDetails = (payload) => {
    navigator(`/listdetails/${payload}`);
  };
  const justTest = () => {
    dispatch(JUST_TEST());
  };
  const [emailname, setEmailName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailPayload = {
      to: "divywealth1@gmail.com",
      subject: subject,
      from: email,
      text: name,
      html: `<h1>${message}</h1>`,
    };
   //await NotificationService.emailNotificationService(emailPayload);
  };
  return (
    <div>
      <h1>{todos.length} NUMBER OF THINGS</h1>
      {todos.map((todo, index) => (
        <div key={todo.id} className="main">
          <p onClick={() => goToDetails(todo.id)}>{todo.text}</p>
          <span onClick={() => handleDelete(index)}>cancel</span>
        </div>
      ))}
      <div className="input">
        <input
          placeholder="Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="Add todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
      <h2 onClick={justTest}>{name}</h2>

      <section>
        <div className="myForm">
          <h1>Send Me Message</h1>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              placeholder="Enter Your Name"
              value={emailname}
              onChange={(e) => setEmailName(e.target.value)}
            />
            <label>Email</label>
            <input
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Subject</label>
            <input
              placeholder="Enter Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <input
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
