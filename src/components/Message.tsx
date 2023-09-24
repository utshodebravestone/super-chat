import { auth } from "../configs/firebase";

import { IMessage } from "../types";
import useToggle from "../hooks/useToggle";

const Message = ({ message }: { message: IMessage }) => {
  const userImageUrl = "https://placekitten.com/640/360";
  const [showUsername, toggleShowUsername] = useToggle(false);

  return (
    <div
      className={`py-5 w-full flex flex-col justify-start ${
        message.uid === auth.currentUser?.uid ? "items-end" : "items-start"
      } gap-1.5`}
    >
      <div className="flex gap-2">
        {message.uid !== auth.currentUser?.uid && (
          <img
            src={userImageUrl}
            alt="user"
            className="w-10 h-10 object-cover rounded-full"
          />
        )}
        <div
          onClick={toggleShowUsername}
          className="min-w-fit max-w-[75%] px-6 py-2 bg-zinc-200 rounded-2xl shadow-md cursor-pointer"
        >
          <p className="overflow-x-clip">{message.text}</p>
        </div>
      </div>

      {showUsername && (
        <small className="font-light text-xs">{message.uid}</small>
      )}
    </div>
  );
};

export default Message;
