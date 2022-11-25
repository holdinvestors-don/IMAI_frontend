import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import fs from 'fs';
//const fs = require('fs')
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJson } from "../api";

const Home = () => {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [mlanswer, setMLAnswer] = useState("");
  const [matter, setMatter] = useState("");

  const onRequestQuestion = () => {
    if (question === "") {
      toast.error("Please input question!");
      return;
    }
    toast.success("Exported Question JSON File!");

    exportJson({
      question: question
    }, "question_jsong");


  }

  const onClickCompareMLAnswer = () => {
    if (matter === "") {
      toast.error("Please input matter content!");
      return;
    }

    if (mlanswer == "") {
      toast.error("Please input ML answer!");
      return;
    }

    toast.info('Exported Answer JSON File!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    const completion = mlanswer;

    exportJson({
      prompt: matter,
      completion: completion
    }, "fine_tuning")
  }

  const onClickCompareAnswer = () => {
    if (matter === "") {
      toast.error("Please input matter content!");
      return;
    }

    if (answer === "") {
      toast.error("Please input user answer!");
      return;
    }

    toast.info('Exported Answer JSON File!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });

    const completion = answer;

    exportJson({
      prompt: matter,
      completion: completion
    }, "fine_tuning")
  }

  const exportJson = (jsonData, fileName) => {
    const json = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    console.log("*** json: ", json);
    console.log("*** blob: ", blob);
    /*
    // create "a" HTLM element with href to file
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    */
    saveJson(jsonData);
  }

  return (
    <Row>
      <Col md="3"></Col>
      <Col md="6" className="c_cnt_top_dv">
        <Container>
          <Row>
            <Col md="12" className="c_label">Matter</Col>
            <Col md="12">
              <textarea placeholder='Input matter' rows='5' onChange={(e) => setMatter(e.target.value)}> </textarea>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="c_label">Quetion: </Col>
            <Col md="8">
              <input type="text" placeholder='Input questions'
                onChange={(e) => setQuestion(e.target.value)} />
            </Col>
            <Col md="12" className="g_txt_right">
              <button className="g_none_dis" onClick={onRequestQuestion}>Request Question</button>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="c_label">ML Answer: </Col>
            <Col md="8">
              <textarea placeholder='ML answer' rows='3' onChange={(e) => setMLAnswer(e.target.value)}></textarea>
            </Col>
            <Col md="12" className="g_txt_right">
              <button onClick={onClickCompareMLAnswer}>Make ML JSON</button>
            </Col>
          </Row>
          <Row>
            <Col md="4"></Col>
            <Col md="8" className="g_txt_center"><i>Or</i></Col>
          </Row>
          <Row>
            <Col md="4" className="c_label">User Answer: </Col>
            <Col md="8">
              <textarea placeholder='User Answer' rows='3'
                onChange={(e) => setAnswer(e.target.value)} ></textarea>
            </Col>
            <Col md="12" className="g_txt_right">
              <button onClick={onClickCompareAnswer}>Make User JSON</button>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col md="3"></Col>
      <ToastContainer />
    </Row>
  );
};

export default Home;