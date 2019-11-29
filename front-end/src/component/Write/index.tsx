import React from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";

// Highlight.js
import "highlight.js/styles/github.css";
const hljs = require("highlight.js/lib/highlight");
const javascript = require("highlight.js/lib/languages/javascript");
const css = require("highlight.js/lib/languages/css");
const html = require("highlight.js/lib/languages/xml");

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);

const WriteWrap = styled.div`
  /* padding: 300px; */
  position: absolute;
  top: 50px;
  width: 100%;
  z-index: -1;
  height: 94.5vh;
  display: flex;
  flex-flow: row;
`;

const WriteHeader = styled.div`
  height: 40px;
  background: #000;
  color: #fff;
  font-size: 2rem;
  padding: 8px;
`;

const MarkdownWrap = styled.div`
  width: 50%;
  height: 100%;
  background: #2c3e50;
  /* overflow: auto; */
`;

const ViewWrap = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: auto;
  word-break: break-all;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  background: #2c3e50;
  color: #fff;
  border-style: none;
  outline-style: none;
  padding: 0;
  /* margin: auto 16px;
  padding-right: 47px;
  padding-top: 18px; */
`;

const CustomMarkdown = styled(Markdown)`
  margin: 16px;
`;

const Back = styled.span`
  cursor: pointer;
  margin-left: 16px;
`;

const TestWrap = styled.div`
  width: 50%;
  height: 100%;
  background: #2c3e50;
`;

const Write = () => {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  }, [content]);

  // console.log(content);

  return (
    <>
      <WriteHeader>
        <Back onClick={() => window.history.back()}>Go Back</Back>
      </WriteHeader>
      <WriteWrap>
        <TestWrap>
          <MarkdownWrap style={{ margin: "16px" }}>
            <Textarea spellCheck={false} onChange={e => setContent(e.target.value)} />
          </MarkdownWrap>
        </TestWrap>
        <ViewWrap>
          <CustomMarkdown>{content}</CustomMarkdown>
        </ViewWrap>
      </WriteWrap>
    </>
  );
};

export default Write;
