import forEach from 'lodash/forEach';

export const id = (() => {
  let counter = 0;
  return () => ++counter;
})();

export const bindAll = (context, funcs) => {
  forEach(funcs, f => context[f.name] = f.bind(context));
};
