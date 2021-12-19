import authState from "./Auth";

export const customStateReducer = (
  customState = {
    authState
  },
  { type, payload }: { type: string, payload: any }
) => {
  if (type === 'USER_AUTH')
    customState.authState = payload;
  return customState;
}