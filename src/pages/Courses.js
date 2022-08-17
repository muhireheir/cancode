import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Add from '../components/tutors/Add';
import Listing from '../components/class/CourseListing';



const Courses = () => {

  return (
    <Tabs>
    <TabList>
      <Tab>Course listing</Tab>
      <Tab>Students</Tab>
      <Tab>Tutor</Tab>
    </TabList>

    <TabPanel>
      <Listing />
    </TabPanel>

    <TabPanel>
      <Add />
    </TabPanel>
    <TabPanel>
      <span>Course</span>
    </TabPanel>

  </Tabs>
  )
}

export default Courses;