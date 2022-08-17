import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Add from '../components/tutors/Add';
import Listing from '../components/tutors/Listing';



const Tutors = () => {

  return (
    <Tabs>
    <TabList>
      <Tab>Tutors Listing</Tab>
      <Tab>Add Tutor</Tab>
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

export default Tutors