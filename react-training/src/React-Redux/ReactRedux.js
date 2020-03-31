import React from "react";

export const ReduxContext = React.createContext(null);

export class Provider extends React.Component {
  render() {
    console.log(this.props.store);
    return (
      <ReduxContext.Provider value={this.props.store}>
        {this.props.children}
      </ReduxContext.Provider>
    );
  }
}
//const MyApp = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
// const mapStateToProps = state => {
//     return {
//       todoList: state.todoList,
//       isLoading: state.isLoading
//     };
//   };
//   const mapDispatchToProps = {
//     fetchTodos,
//     removeTodo
//   };
export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => WrappedComponent =>
  class ConnectCmponent extends React.Component {
    static contextType = ReduxContext;
    constructor(props, context) {
      super(props, context);
      //   this.state = {
      //     props: {
      //       todoList: [
      //         { id: 1, content: "hello" },
      //         { id: 2, content: "hello2" }
      //       ],
      //       removeTodo: function() {
      //         console.log("removeTodo");
      //       },
      //       fetchTodos: function() {
      //         console.log("fetchTodos");
      //       }
      //     }
      //   };

      this.state = {
        props: this.getRecentProps()
      };

      this.getRecentProps = this.getRecentProps.bind(this);
    }
    getRecentProps() {
      const { getState, dispatch } = this.context;

      const stateToProps = mapStateToProps(getState());
      const dispathToProps = Object.keys(mapDispatchToProps).reduce(
        (acc, cur) => {
          acc[cur] = (...args) => {
            dispatch(mapDispatchToProps[cur](...args));
          };

          return acc;
        },
        {}
      );

      console.log({ ...stateToProps, ...dispathToProps });
      return { ...stateToProps, ...dispathToProps };
    }

    // static getDerivedStateFromProps(props, state) {
    //   return {
    //     ...state,
    //     props: this.getRecentProps()
    //   };
    // }

    render() {
      return <WrappedComponent {...this.state.props}></WrappedComponent>;
    }

    componentDidMount() {
      const { subscribe } = this.context;
      subscribe(() => {
        this.setState({
          props: this.getRecentProps()
        });
      });
    }
  };
