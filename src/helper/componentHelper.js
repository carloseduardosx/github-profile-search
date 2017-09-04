const shallowEqual = (objA, objB) => {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
};

const shallowCompare = (instance, nextProps, nextState) =>
  !(shallowEqual(this.props, nextProps) && shallowEqual(this.state, nextState));

const pureComponent = (Component) => {
  // eslint-disable-next-line no-param-reassign
  Component.shouldComponentUpdate = (nextProps, nextState) =>
    shallowCompare(this, nextProps, nextState);
};

export default pureComponent;
