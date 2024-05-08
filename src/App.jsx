import './App.css'
import NavBar from './component/NavBar'
import HeroSection from './component/HeroSection'
import TurstedBy from './component/TurstedBy.jsx'
import Discription from './component/Discription.jsx'
import Discription2 from './component/Discription2.jsx'
import Createaccount from './component/Createaccount.jsx'
import ChooseUs from './component/ChooseUs.jsx'
import Review from './component/Review.jsx'
import Downloadsection from './component/Downloadsection.jsx'

function App() {

  return (
    <>
    <NavBar />

    <HeroSection/>

    <TurstedBy/>
    
    <Discription heading="Monitoring Attendance" paragraph="Monitoring attendance with the Hajir app is simple and efficient. Employees can clock in and out using their smartphones, providing real-time data on their attendance. Managers can easily track attendance records, view reports, and manage schedules, ensuring accurate and streamlined attendance management." image="./img/hero-sub1.png"/>

    <Discription2 heading="Instant Payroll Tracking" paragraph="Employers may quickly calculate the number of hours worked by simply tracking employee attendance in real time. The payroll system incorporates this data with ease, guaranteeing exact and timely salary calculations. Workers have rapid access to their attendance data, which promotes trust and transparency in the payment process." image="./img/hero-sub2.png"/>

    <Discription heading="Leave Management" paragraph="Employees may quickly request leave with the Hajir app, and employers can quickly approve or reject requests on this user-friendly platform. In addition to tracking leave balances and keeping an exhaustive record of all leave activities, it automates the leave approval procedure. Doing this allows you to manage staff absences effectively, guarantee openness, reduce paperwork, and minimize errors." image="./img/hero-sub3.png"/>

    <Discription2 heading="Audit Report" paragraph="The Hajir app facilitates audit reporting by maintaining accurate and up-to-date records of employee attendance, leave, and other relevant data. It generates detailed reports on various aspects of workforce management, including attendance patterns, leave utilization, compliance with company policies, and more. These reports can be customized as needed and are instrumental in conducting audits, identifying trends, and making informed decisions to improve operational efficiency." image="./img/hero-sub4.png"/>

    <Createaccount/>

    <Discription heading="Notice Board Management" paragraph="Hajir reduces Notice Board Management by letting companies submit announcements, updates, and vital notices on the app. All employees can access these alerts anytime, anywhere, keeping them informed. These centralized methods minimize the need for physical notice boards, decrease confusion, and ensure that vital information reaches all employees quickly." image="./img/hero-sub5.png"/>

    <Discription2 heading="Two Way Communication" paragraph="Employers may quickly calculate the number of hours worked by simply tracking employee attendance in real time. The payroll system incorporates this data with ease, guaranteeing exact and timely salary calculations. Workers have rapid access to their attendance data, which promotes trust and transparency in the payment process." image="./img/hero-sub6.png"/>
    
    <ChooseUs />

    <Review />

    <Downloadsection />
    </>
  )
}

export default App
