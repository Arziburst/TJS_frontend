export type FillActionType<T> = (
  payload: T,
) => {
  type: string;
  payload: T;
};
