import React, {Component} from 'react';
import ChecklistItems from './ChecklistItems'


class Checklist extends Component {
    constructor() {
        super();
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('Mount');
    }

    render() {
        console.log('Render');
        return(
            <div className='container'>
                <div className='row'>
                    <ChecklistItems />
                </div>
            </div>
        )
    }
}

export default Checklist;