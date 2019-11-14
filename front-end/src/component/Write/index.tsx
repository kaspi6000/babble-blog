import React from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

const WriteWrap = styled.div`
  /* padding: 300px; */
  height: 100vh;
  display: flex;
  flex-flow: row;
`;

const MarkdownWrap = styled.div`
  width: 50%;
  height: 100%;
  background: #2c3e50;
  padding: 16px;
`;

const ViewWrap = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  background: #2c3e50;
  color: #fff;
  border-style: none;
  outline-style: none;
`;

const Write = () => {
  const [content, setContent] = React.useState("");

  console.log(content);

  return (
    <WriteWrap>
      <MarkdownWrap>
        <Textarea onChange={e => setContent(e.target.value)} value={content} />
      </MarkdownWrap>
      <ViewWrap>
        {/* <ReactMarkDown source={content} escapeHtml={false} /> */}
        <Markdown>{content}</Markdown>
      </ViewWrap>
    </WriteWrap>
  );
};

export default Write;
