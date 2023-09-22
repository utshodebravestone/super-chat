import { useEffect, useRef, useState } from "react";
import { IMessage } from "../types";
import ChatRoom from "./ChatRoom";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";

const _messages: IMessage[] = [
  {
    id: "lksajf;",
    text: "hey",
    mine: false,
  },
  {
    id: "sajf;",
    text: "hello",
    mine: true,
  },
  {
    id: "alkdj;",
    text: "how is it going?",
    mine: false,
  },
  {
    id: "lsfj;",
    text: "i'm not dead yet!",
    mine: true,
  },
  {
    id: "safj;",
    text: "wanna go outside?",
    mine: false,
  },
  {
    id: "ldsjf;",
    text: "where",
    mine: true,
  },
  {
    id: "sfda;",
    text: "where nobody cries. where only butteries.",
    mine: false,
  },
  {
    id: "adkfjs;",
    text: "take me away, a hiding place. take me away a sweet escape. take me away, a hiding place. take me away a sweet escape.take me away, a hiding place. take me away a sweet escape.take me away, a hiding place. take me away a sweet escape.",
    mine: true,
  },
];

const App = () => {
  const [messages, setMessages] = useState(_messages);
  const lastMessageRef = useRef<HTMLElement>(null);

  const sendMessage = (message: IMessage): void => {
    setMessages((messages) => [...messages, message]);
  };

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="h-screen w-full px-0 md:px-20 lg:px-40 xl:px-60 mx-auto bg-zinc-100 overflow-hidden">
      <TopBar />
      <ChatRoom lastMessageRef={lastMessageRef} messages={messages} />
      <SendMessage onSend={sendMessage} />
    </div>
  );
};

export default App;
