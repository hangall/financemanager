import React from 'react';
import {Card} from "antd";

class BusinessVolume extends React.Component{

    constructor(props) {
        super(props);
    }



    getColorCode(chargeValue){
        if (chargeValue.startsWith('-')){
            return '#FF0000';
        }
        return '#000000';
    }

    render(){
        // dekonstruktor
        const {chargeValue, chargeDate} = this.props;
        return (
            <Card style={{ width: 500,border:0}} bodyStyle={{ padding: 10}} bordered="false" noHovering="true">
                <table style={{width:'100%'}}>
                    <tr>
                        <td style={{width:25}}><img alt="chargeType" width={'15px'} src="images/negativeCharge.jpg"/></td>
                        <td style={{width:350}}>
                            <b>Meine Überweisung</b>
                            <br/>Viele weitere informationen
                            <br/>
                            <p style={{fontSize:10}}>{chargeDate}</p>
                        </td>
                        <td style={{textAlign:'right', color: this.getColorCode(chargeValue)}}><br/><br/>{chargeValue}</td>
                    </tr>
                </table>
                <br/>
                <hr/>
            </Card>
        );
    }
}

BusinessVolume.propTypes={
    chargeValue:React.PropTypes.string.isRequired,
    chargeDate: React.PropTypes.string.isRequired
};

BusinessVolume.defaultProps={
    chargeDate: '01.01.1900'
};

export default BusinessVolume;
