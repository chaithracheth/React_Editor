import React, { useRef,useEffect } from "react";
import demo from './demo.json';
import Editor from "@monaco-editor/react";
function App() {
  const editorRef = useRef();

  function handleEditorDidMount(_, editor) {
    editorRef.current = editor;
  }
return (
    <div>
      <Editor
        height="100vh"
        theme="vs-dark"
        editorDidMount={handleEditorDidMount}
        language="python"
        value={JSON.stringify(  demo, null, ' ')}
      />
    </div>
  );
}

export default App;
