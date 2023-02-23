export const errorInitialState = [];

export default (
  state = errorInitialState,
  { type, payload, meta },
) => {
  const match = /(.*)_(REQUEST|FAIL)/.exec(type);

  if (!match) return state;

  const [, actionType, actioName] = match;
  if (actioName === 'FAIL') {
    return [
      ...state,
      {
        action: actionType,
        ...payload,
        ...meta,
      },
    ];
  }

  return state.filter(
    x =>
      !(
        x.action === actionType &&
        x.loadingId === meta.loadingId
      ),
  );
};
