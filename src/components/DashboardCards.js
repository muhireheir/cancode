import React from 'react'

const DashboardCards = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <DashboardCard icon={'fa fa-user'} label="Tutors" numbers={90} color="bg-red-600" />
                <DashboardCard icon={'fas fa-chart-bar'} label="Tutors" numbers={90} color="bg-red-600" />
                <DashboardCard icon={'fas fa-chart-pie'} label="Tutors" numbers={90} color="bg-red-600" />
                <DashboardCard icon={'fa fa-lock'} label="Tutors" numbers={90} color="bg-red-600" />
            </div>
        </>
    )
}
export const DashboardCard = ({ label, icon, numbers, color }) => {
    return (
        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">{label}</h5>
                            <span className="font-semibold text-xl text-blueGray-700">{numbers}</span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${color}`}>
                                <i className={icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardCards