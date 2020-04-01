import React from 'react';
export const Context = React.createContext(null);

export const Provider = (props) => {

    return (
        <Context.Provider value={props.store}>{props.children}</Context.Provider>
    )
}

export const connect = (mapStateToProps, mapDispatchToProps) => (wrappedComponent) => {
    return class connectComponent extends React.Component {
        constructor(props, context) {
            super(props, context);
            this.state = {
                props: this.getRecentProps()
            }
            this.getRecentProps = this.getRecentProps.bind(this);
        }
        getRecentProps() {
            const { getState } = this.context;
            const stateToProps = mapStateToProps(getState());


        }
        render() {
            return <WrappedComponent {...this.state.props}></WrappedComponent>;
        }
    }
}
