import { LegacyRef } from "react";
import { IMessage } from "../types";
import Message from "./Message";

const ChatRoom = ({
  messages,
  lastMessageRef,
}: {
  messages: IMessage[];
  lastMessageRef: LegacyRef<HTMLLIElement>;
}) => {
  return (
    <div className="h-[80vh] my-4 overflow-hidden overflow-y-scroll no-scrollbar">
      <h1 className="text-3xl text-center">Messages</h1>
      <ul>
        {messages.map((message) => (
          <li ref={lastMessageRef} key={message.id}>
            <Message
              message={message}
              userImageUrl="https://placekitten.com/640/360"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatRoom;
