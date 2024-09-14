import io from "socket.io-client";
import Ace from "ace-builds";

const editor = Ace.edit("editor");
editor.setTheme("ace/theme/chrome");
editor.session.setMode("ace/mode/markdown");

const socket = io();

// イベントの受信
socket.on("change", (delta) => {

});

// イベントの発信
editor.session.on('change', (delta) => {
  console.log(editor.session.doc.getValue().length);
});
