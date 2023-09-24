export interface IMessage {
  id: string;
  text: string;
  uid: string;
}

export interface IAppState {
  messages: IMessage[];
  isAuthenticated: boolean;
}

interface AuthenticateAction {
  type: "AUTHENTICATE";
  payload: boolean;
}

export const createAuthenticateAction = (
  isAuthenticated: boolean
): AuthenticateAction => ({
  type: "AUTHENTICATE",
  payload: isAuthenticated,
});

interface SendMessageAction {
  type: "SEND_MESSAGE";
  payload: IMessage;
}

export const createSendMessageAction = (
  message: IMessage
): SendMessageAction => ({
  type: "SEND_MESSAGE",
  payload: message,
});

interface SetMessageAction {
  type: "SET_MESSAGE";
  payload: IMessage[];
}

export const createSetMessageAction = (
  messages: IMessage[]
): SetMessageAction => ({
  type: "SET_MESSAGE",
  payload: messages,
});

export type IAppStateAction =
  | AuthenticateAction
  | SendMessageAction
  | SetMessageAction;
