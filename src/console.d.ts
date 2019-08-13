declare module 'console' {
  let _console: typeof import('console');
  export default _console;
}
