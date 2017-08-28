import React from 'react'
import {Card} from 'antd';

class ActionOverview extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let title = this.props.title;
        if (!title){
            title = "Default";
        }
        return (
            <Card title={title} bordered={false}>
                <div style={{height:'150px'}}>
                    <h3>Europe Street beat</h3>
                    <p>www.instagram.com</p>
                </div>
            </Card>
        );
    }
}

export default ActionOverview;