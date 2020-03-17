class Socket {
  init = ({ dispatch, getState }) => {
      this.dispatch = dispatch;
      this.getState = getState;
  };
}

export default new Socket();
