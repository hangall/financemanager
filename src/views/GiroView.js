import React from 'react'
import {Row, Col} from 'antd';
import ActionOverview from "../ActionOverview";

class GiroView extends React.Component{

    render(){
        return (
            <div >
                <Row gutter={16}>

                    <Col span={7} style={{background: '#ECECEC', padding: '10px'}}>
                        <ActionOverview title="Testi"/>
                    </Col>
                    <Col span={7} style={{background: '#ECECEC', padding: '10px'}}>
                        <ActionOverview/>
                    </Col>

                </Row>
                <Row gutter={16}>
                    <Col span={7} style={{background: '#ECECEC', padding: '10px'}}>
                        <ActionOverview/>
                    </Col>
                    <Col span={7} style={{background: '#ECECEC', padding: '10px'}}>
                        <ActionOverview/>
                    </Col>
                    <Col span={7} style={{background: '#ECECEC', padding: '10px'}}>
                        <ActionOverview/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GiroView;
