import React from 'react'
import Card from './card/Card'
import { FaDollarSign } from "react-icons/fa6";
import { GiScales } from "react-icons/gi";
import { SiCompilerexplorer } from "react-icons/si";

const ChooseUs = () => {
  return (
    <>
        <div className='mx-24 py-16'>
            <div className='mx-40'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-5'>Why to Choose Hajir?</h1>
                    <p className='text-xl font-normal '>Personnel management solution optimizes operations with leave management, payroll monitoring, and two-way communication. Its easy platform encourages collaboration and openness, improving operations and worker happiness.</p>
                </div>
                <div className='flex justify-center items-center gap-20'> 
                    <Card icon={<FaDollarSign fontSize="24px" />} heading="Cost Effective" paragraph="Automates manual processes, saving businesses on administrative costs and resources."/>

                    <Card icon={<GiScales fontSize="24px" />} heading="Scalability" paragraph="Whether for small businesses or large enterprises, it  can scale to meet the needs of any organization."/>

                    <Card icon={<SiCompilerexplorer fontSize="24px" />} heading="Compliance" paragraph="Ensures labor regulation and policy compliance, mitigating non-compliance risks."/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChooseUs