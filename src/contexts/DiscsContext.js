import React, { Component } from 'react';

const DiscsContext = React.createContext({
    discs: [],
    filteredDiscs: [],
    filterTouched: false,
    currentDiscId: null,
    setDiscs: () => {},
    setDiscId: () => {},
    deleteDisc: () => {}
})

export default DiscsContext;

export class DiscsProvider extends Component {
    state = {
        discs: [],
        filteredDiscs: [],
        filterTouched: false,
        currentDiscId: null
    };

    setDiscs = discs => {
        this.setState({ discs });
        console.log(this.state.discs)
    };

    setDiscId = discId => {
        this.setState({ currentDiscId: discId });
    };

    deleteDisc = discId => {
        this.setState({
            discs: this.state.discs.filter(disc => disc.id !== discId)
        });
    };

    render() {
        const value = {
            discs: this.state.discs,
            filteredDiscs: this.state.filteredDiscs,
            filterTouched: this.state.filterTouched,
            currentDiscId: this.state.currentDiscId,
            setDiscs: this.setDiscs,
            setDiscId: this.setDiscId,
            deleteDisc: this.deleteDisc
        };
        return (
            <DiscsContext.Provider value= {value}>
                {this.props.children}
            </DiscsContext.Provider>
        );
    }
}