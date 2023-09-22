import { useState } from "react";
import send from "../assets/images/send.svg";
import { IMessage } from "../types";

const SendMessage = ({ onSend }: { onSend: (message: IMessage) => void }) => {
  const [message, setMessage] = useState<IMessage>({
    id: "ldsj;",
    text: "",
    mine: true,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend(message);
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
