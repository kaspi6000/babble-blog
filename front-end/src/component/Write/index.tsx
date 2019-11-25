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
  height: 94vh;
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
  overflow: scroll;
`;

const ViewWrap = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
  overflow: scroll;
  word-break: break-all;
`;

const Textarea = styled.textarea`
  width: 94%;
  height: 100%;
  background: #2c3e50;
  color: #fff;
  border-style: none;
  outline-style: none;
  margin: 16px;
`;

const CustomMarkdown = styled(Markdown)`
  margin: 16px;
`;

const Back = styled.span`
  cursor: pointer;
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
        <Back onClick={() => window.history.back()}>{`뒤로가기`}</Back>
      </WriteHeader>
      <WriteWrap>
        <MarkdownWrap>
          <Textarea
            spellCheck={false}
            onChange={e => setContent(e.target.value)}
          />
        </MarkdownWrap>
        <ViewWrap>
          <CustomMarkdown>{content}</CustomMarkdown>
        </ViewWrap>
      </WriteWrap>
    </>
  );
};

export default Write;
