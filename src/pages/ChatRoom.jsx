import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chat from './Chat';

const ChatRoom = () => {
  return (
    <Row>
      <Chat />
    </Row>
  );
};

export default ChatRoom;