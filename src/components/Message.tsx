import { IMessage } from "../types";

const Message = ({
  message,
  userImageUrl,
}: {
  message: IMessage;
  userImageUrl: string;
}) => {
  return (
    <div
      className={`py-5 w-full flex items-center ${
        message.mine ? "justify-end" : "justify-start"
      } gap-2`}
    >
      {!message.mine && (
        <img
          src={userImageUrl}
          alt="User"
          className="w-10 h-10 object-cover rounded-full"
        />
      )}
      <div
        className={`max-w-[75%] px-6 py-2 bg-zinc-200 rounded-2xl shadow-md`}
      >
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
