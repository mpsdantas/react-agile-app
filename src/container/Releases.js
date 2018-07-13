import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';
export default class Releases extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 01',
                    releaseDate: '01/01/2017'
                },
                {
                    id: 2,
                    releaseName: 'Release 02',
                    releaseDate: '01/01/2018'
                },
                {
                    id: 3,
                    releaseName: 'Release 03',
                    releaseDate: '01/01/2019'
                },
                {
                    id: 4,
                    releaseName: 'Release 04',
                    releaseDate: '01/01/2020'
                }
            ]
        }
    }
    handleRemove(id) {
        console.log('Implement remove function here!');
        console.log(id)
        var myReleases = this.state.releases;
        delete myReleases[id-1];
        this.setState({ releases: myReleases });
    }
    handleSubmit(e, {name, date}){
        e.preventDefault();
        let state = this.state;
        let myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)})
    }
    render() {
        return (
            <div className="container" style={{paddingTop: '30px'}}>
                <ReleaseForm submitHandle={this.handleSubmit}/>
                <table className="table table-hover" style={{ marginTop: '30px' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><td><button type="button" className="btn btn-danger btn-sm" onClick={(e) => this.handleRemove(release.id)}>Remove</button></td></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}