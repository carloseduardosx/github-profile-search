export const createActionCreator = (moduleName, prefix, args = {}) => ({
  type: `${moduleName}/${prefix}`,
  payload: {
    ...args
  }
});

export const requestActions = (moduleName, prefix) => ({
  REQUESTED: `${moduleName}/${prefix}_REQUESTED`,
  SUCCEEDED: `${moduleName}/${prefix}_SUCCEEDED`,
  FAILED: `${moduleName}/${prefix}_FAILED`
});
