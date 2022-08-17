import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Add from '../components/class/Add';
import Listing from '../components/class/Listing';

const Classes = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Class Listing</Tab>
                <Tab>Add Class</Tab>
            </TabList>

            <TabPanel>
                <Listing />
            </TabPanel>

            <TabPanel>
                <Add />
            </TabPanel>

        </Tabs>
    )
}

export default Classes





