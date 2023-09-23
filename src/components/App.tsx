import { useEffect, useReducer, useRef } from "react";

import {
  IAppState,
  IAppStateAction,
  IMessage,
  createSendMessageAction,
} from "../types";

import ChatRoom from "./ChatRoom";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";

const messages: IMessage[] = [
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
  const reducer = (state: IAppState, action: IAppStateAction): IAppState => {
    switch (action.type) {
      case "AUTHENTICATE":
        return {
          ...state,
          isAuthenticated: action.payload,
        };

      case "SEND_MESSAGE":
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    messages,
    isAuthenticated: false,
  });
  const lastMessageRef = useRef<HTMLLIElement>(null);

  const sendMessage = (message: IMessage): void => {
    dispatch(createSendMessageAction(message));
  };

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [state.messages]);

  return (
    <div className="h-screen w-full px-0 md:px-20 lg:px-40 xl:px-60 mx-auto bg-zinc-100 overflow-hidden">
      <TopBar />
      <ChatRoom lastMessageRef={lastMessageRef} messages={state.messages} />
      <SendMessage onSend={sendMessage} />
    </div>
  );
};

export default App;
