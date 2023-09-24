import { useState } from "react";

import { v4 as uuid } from "uuid";

import { IMessage } from "../types";

import send from "../assets/images/send.svg";
import { auth } from "../configs/firebase";

const defaultMessage = (): IMessage => ({
  id: uuid(),
  text: "",
  uid: auth.currentUser?.uid || "", // this won't fail as we're not showing it if user is null.
});

const SendMessage = ({ onSend }: { onSend: (message: IMessage) => void }) => {
  const [message, setMessage] = useState<IMessage>(defaultMessage);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend(message);
        setMessage(defaultMessage);
      }}
      className="mt-auto w-full py-2 flex items-center gap-2"
    >
      <input
        type="text"
        required
        value={message.text}
        onChange={(e) =>
          setMessage((message) => ({ ...message, text: e.target.value }))
        }
        className="flex-grow p-1.5 border border-zinc-300 text-base rounded-md"
      />
      <button className="mx-auto my-auto">
        <img src={send} alt="send" className="h-10 w-10 object-cover" />
      </button>
    </form>
  );
};

export default SendMessage;
