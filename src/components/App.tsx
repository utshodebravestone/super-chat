import { useEffect, useReducer, useRef } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDocs } from "firebase/firestore/lite";

import {
  IAppState,
  IAppStateAction,
  IMessage,
  createAuthenticateAction,
  createSendMessageAction,
  createSetMessageAction,
} from "../types";
import { auth, messagesRef } from "../configs/firebase";

import ChatRoom from "./ChatRoom";
import SendMessage from "./SendMessage";
import TopBar from "./TopBar";
import SignIn from "./SignIn";

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

    case "SET_MESSAGE":
      return {
        ...state,
        messages: action.payload,
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    isAuthenticated: false,
  });
  const lastMessageRef = useRef<HTMLLIElement>(null);

  const sendMessage = (message: IMessage): void => {
    dispatch(createSendMessageAction(message));
  };

  useEffect(() => {
    const setInitialState = async () => {
      const query = await getDocs(messagesRef);
      const messages = query.docs.map((doc) => doc.data()) as IMessage[];
      dispatch(createSetMessageAction(messages));
      dispatch(createAuthenticateAction(auth.currentUser ? true : false));
    };
    setInitialState();
  }, []);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView();
  }, [state]);

  return (
    <div className="h-screen w-full px-5 md:px-20 lg:px-40 xl:px-60 mx-auto bg-zinc-100 overflow-hidden">
      <TopBar
        isAuthenticated={state.isAuthenticated}
        onSignOut={() =>
          signOut(auth).then(() => dispatch(createAuthenticateAction(false)))
        }
      />
      {state.isAuthenticated ? (
        <>
          <ChatRoom lastMessageRef={lastMessageRef} messages={state.messages} />
          <SendMessage onSend={sendMessage} />
        </>
      ) : (
        <>
          <SignIn
            onSignIn={() =>
              signInWithPopup(auth, new GoogleAuthProvider()).then(() =>
                dispatch(createAuthenticateAction(true))
              )
            }
          />
        </>
      )}
    </div>
  );
};

export default App;
