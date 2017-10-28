import React from 'react';
import {Link} from 'react-router';

export default class StudentFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            status:props.initFilter.status || '',
            scoreCard_gte: props.initFilter.scoreCard_gte || '',
            changed: false,
        };
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeScoreCardGte = this.onChangeScoreCardGte.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.resetFilter = this.resetFilter.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            status: newProps.initFilter.status || '',
            scoreCard_gte: newProps.initFilter.scoreCard_gte || '',
            changed: false,
        });
    }
    resetFilter(){
        this.setState({
            status: this.props.initFilter.status || '',
            scoreCard_gte: this.props.initFilter.scoreCard_gte || '',
            changed: false,
        });
    }
    applyFilter(){
        const newFilter = {};
        if (this.state.status) newFilter.status = this.state.status;
        if (this.state.scoreCard_gte) newFilter.scoreCard_gte = this.state.scoreCard_gte;
        this.props.setFilter(newFilter);
    }
    clearFilter(){
        this.props.setFilter({});
    }
    onChangeStatus(e){
        this.setState({status: e.target.value, changed: true});
    }
    onChangeScoreCardGte(e){
        const scoreCardString = e.target.value;
        if (scoreCardString.match(/^\d*$/)){
            this.setState({scoreCard_gte: e.target.value, changed: true});            
        }
    }
    render() {
        return ( 
            <div>
                Status:
                <select value={this.state.status} onChange={this.onChangeStatus}>
                    <option value="">(Any)</option>
                    <option value="Novice">Novice</option>
                    <option value="Fair">Fair</option>
                    <option value="Good">Good</option>
                    <option value="Pro">Pro</option>
                    <option value="Sensei">Sensei</option>
                </select>
                &nbsp; Minimun Score:
                <input size={5} value={this.state.scoreCard_gte} onChange={this.onChangeScoreCardGte} />
                <button onClick={this.applyFilter}>Apply</button>
                <button onClick={this.resetFilter} disabled={!this.state.changed}>Reset</button>
                <button onClick={this.clearFilter}>Clear</button>
            </div>
        );
    }
}

StudentFilter.propTypes = {
    setFilter: React.PropTypes.func.isRequired,
    initFilter: React.PropTypes.object.isRequired,
}