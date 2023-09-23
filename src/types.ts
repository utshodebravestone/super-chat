export interface IMessage {
  id: string;
  text: string;
  mine: boolean;
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

export type IAppStateAction = AuthenticateAction | SendMessageAction;
