import React from 'react';
import {Tabs,DatePicker,LocaleProvider} from 'antd';
import TextField from 'material-ui/TextField';
import deDE from 'antd/lib/locale-provider/de_DE';
import moment from 'moment';
import 'moment/locale/de';
import GiroView from "./GiroView";
import BusinessVolume from "../components/BusinessVolume";

const TabPane = Tabs.TabPane;
const { MonthPicker } = DatePicker;

class KreissparkasseKoelnView extends React.Component {

    constructor(props) {
        super(props);
        moment.locale('de')
    }



    render() {
        const kskExampleValue ={
            chargeDate : '21.01.2017',
            chargeValue : '-88,88 €'
        };
        return (
            <div>
                <Tabs renderTabBar={true} renderTabContent={true} defaultActiveKey="1">
                    <TabPane tab="Allgemein" key="1">
                        <img alt="KskLogo" width={'200px'} src="images/Logo-Kreissparkasse.jpg"/>
                        <br/>
                        <TextField
                            hintText="Kontoinhaber"
                            floatingLabelText="Kontoinhaber"
                            defaultValue="Christian Becker"
                            style={{width:500}}
                        /><br/>
                        <TextField
                            style={{width:500}}
                            hintText="Kontonummer"
                            floatingLabelText="Kontonummer"
                            defaultValue="XXX"
                        /><br/>
                        <TextField
                            style={{width:500}}
                            hintText="BLZ"
                            floatingLabelText="BLZ"
                            defaultValue="37050299"
                        />
                        <br/>
                        <TextField
                            style={{width:500}}
                            hintText="IBAN"
                            floatingLabelText="IBAN"
                        />
                        <br/>

                        <TextField
                            style={{width:500}}
                            hintText="Freistellungsauftrag"
                            floatingLabelText="Freistellungsauftrag"
                            defaultValue="100,00 €"
                        />
                        <br/>
                        <TextField
                            style={{width:500}}
                            hintText="Dispositionskredit"
                            floatingLabelText="Dispositionskredit"
                            defaultValue="3.800,00 €"
                        />
                    </TabPane>
                    <TabPane tab="Umsätze" key="2">
                        <LocaleProvider locale={deDE}>
                            <MonthPicker style={{width:'500px'}} format="MMMM YYYY" defaultValue={moment()}/>
                        </LocaleProvider>
                        <br/> <br/>
                        <BusinessVolume {...kskExampleValue}/>
                        <BusinessVolume chargeDate="21.08.2017" {...kskExampleValue}/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="-1531,89 €"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="100,57 €"/>

                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>
                        <BusinessVolume chargeDate="21.08.2017" chargeValue="positive"/>

                    </TabPane>
                    <TabPane tab="Statistiken" key="3"><GiroView/></TabPane>
                </Tabs>
            </div>
        );
    }
}

export default KreissparkasseKoelnView;