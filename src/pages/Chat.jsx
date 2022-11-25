import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { getAiAnswer } from "../api";

import '../assets/css/chat.css';
import UserImg from '../assets/imgs/user.png';
import AIImg from '../assets/imgs/ai_bot.png';
import StarImg from '../assets/imgs/star.png';

const Chat = () => {

  const [text, setText] = useState("");
  const [chats, setChats] = useState([]);

  const sendMessage = () => {
    updateChats();
  }

  const EnterPress = (e) => {
    if (e.key != 'Enter') {
      return;
    }
    updateChats();
  }

  const updateChats = async () => {
    if (text === "") {
      return;
    }

    console.log(text);

    let newText = {
      kind: 1,
      text: text,
      datetime: "20220-11-21 07:18:18"
    }
    chats.push(newText);
    //setChats([...chats, newText]);
    setText("");

    const response = await getAiAnswer(text)
    console.log(response.answer);

    let newAIText = {
      kind: 0,
      text: response.answer,
      datetime: "20220-11-21 07:18:19"
    }
    //chats.push(newAIText);
    setChats([...chats, newAIText]);
  }

  const clearChats = () => {
    setChats([]);
  }

  return (
    <Row>
      <Col md="3" className="c_chat_left_dv">
        <div className="c_chat_tlt">IM1 AI</div>
        <div className="c_chat_stlt">Chatting with AI</div>
        <div>
          <Link to={`/learn`} >
            <button className="c_lbutton">Study Room</button>
          </Link>
          <br />
          <button className="c_lbutton" onClick={clearChats}>Clear Chats</button>
        </div>
      </Col>
      <Col md="6">
        <div className="c_chat_header_dv">
          <Row>
            <Col md="8"><img src={UserImg} className="c_chat_img" /><span className="c_chat_tuser_name">Felecia Rower</span></Col>
            <Col md="4" className="g_txt_right"><img src={StarImg} className="c_star_img" /></Col>
          </Row>
        </div>
        <div className="c_chat_body_dv"><div>
          {
            chats.map((chat, index) => {
              return <div key={index} className={chat.kind === 0 ? "" : "g_txt_right"}>
                {chat.kind === 0 ? <img src={AIImg} className="c_chat_img" /> : ""}
                <div className={chat.kind === 0 ? "c_chat_text_r" : "c_chat_text_l"}>{chat.text}</div>
                {chat.kind === 0 ? "" : <img src={UserImg} className="c_chat_img" />}
              </div>
            })
          }
        </div></div>
        <div className="c_chat_form_dv">
          <Row>
            <Col md="10">
              <input className="c_chat_input" value={text} type="text" placeholder="Input chat content"
                onChange={
                  (e) => {
                    setText(e.target.value);
                  }
                }
                onKeyDown={
                  (e) => { EnterPress(e) }
                } />
            </Col>
            <Col md="2">
              <button className="c_chat_btn" onClick={
                sendMessage
              } >Send</button>
            </Col>
          </Row>
        </div>
      </Col>
      <Col md="3" className="c_my_notice">
        
      </Col>
    </Row>
  );
};

export default Chat;