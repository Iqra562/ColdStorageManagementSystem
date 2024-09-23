import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
// const dispatch = useDispatch();
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
// import { useDispatch, useSelector } from 'react-redux';
// import { IRootState } from '../store';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import Dropdown from './Dropdown';
import { useEffect } from 'react';
// import { setPageTitle } from '../store/themeConfigSlice';

function Analytics(){
    
// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(setPageTitle('Analytics Admin'));
// }, [dispatch]);

// const isDark = useSelector((state) => state.themeConfig.theme) === 'dark';
// const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';

// totalVisitOptions
const totalVisit = {
    series: [{ data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25] }],
    options: {
        chart: {
            height: 58,
            type: 'line',
            fontFamily: 'Nunito, sans-serif',
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#009688',
                opacity: 0.4,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#009688'],
        grid: {
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => '',
                },
            },
        },
    },
};

// paidVisitOptions
const paidVisit = {
    series: [{ data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69] }],
    options: {
        chart: {
            height: 58,
            type: 'line',
            fontFamily: 'Nunito, sans-serif',
            sparkline: {
                enabled: true,
            },
            dropShadow: {
                enabled: true,
                blur: 3,
                color: '#e2a03f',
                opacity: 0.4,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#e2a03f'],
        grid: {
            padding: {
                top: 5,
                bottom: 5,
                left: 5,
                right: 5,
            },
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => '',
                },
            },
        },
    },
};

// uniqueVisitorSeriesOptions
const uniqueVisitorSeries = {
    series: [
        {
            name: 'Direct',
            data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63],
        },
        {
            name: 'Organic',
            data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70],
        },
    ],
    options: {
        chart: {
            height: 360,
            type: 'bar',
            fontFamily: 'Nunito, sans-serif',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            colors: ['transparent'],
        },
        colors: ['#5c1ac3', '#ffbb44'],
        dropShadow: {
            enabled: true,
            blur: 3,
            color: '#515365',
            opacity: 0.4,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 8,
                borderRadiusApplication: 'end',
            },
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            itemMargin: {
                horizontal: 8,
                vertical: 8,
            },
        },
        grid: {
            borderColor:  '#e0e6ed',
            padding: {
                left: 20,
                right: 20,
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: true,
                color: '#e0e6ed',
            },
        },
        yaxis: {
            tickAmount: 6,
            // opposite: isRtl,
            labels: {
                // offsetX: isRtl ? -10 : 0,
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.3,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 100],
            },
        },
        tooltip: {
            marker: {
                show: true,
            },
        },
    },
};

// followersOptions
const followers = {
    series: [
        {
            data: [38, 60, 38, 52, 36, 40, 28],
        },
    ],
    options: {
        chart: {
            height: 160,
            type: 'area',
            fontFamily: 'Nunito, sans-serif',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#4361ee'],
        grid: {
            padding: {
                top: 5,
            },
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => '',
                },
            },
        },
    },
};

// referralOptions
const referral = {
    series: [
        {
            data: [60, 28, 52, 38, 40, 36, 38],
        },
    ],
    options: {
        chart: {
            height: 160,
            type: 'area',
            fontFamily: 'Nunito, sans-serif',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#e7515a'],
        grid: {
            padding: {
                top: 5,
            },
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => '',
                },
            },
        },
    },
};

// engagementOptions
const engagement = {
    series: [
        {
            name: 'Sales',
            data: [28, 50, 36, 60, 38, 52, 38],
        },
    ],
    options: {
        chart: {
            height: 160,
            type: 'area',
            fontFamily: 'Nunito, sans-serif',
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#1abc9c'],
        grid: {
            padding: {
                top: 5,
            },
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: () => '',
                },
            },
        },
    },
};
return(

<div className="pt-5 px-5 ">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="panel p-5 h-full sm:col-span-2 lg:col-span-1 rounded-lg shadow-lg">
            {/* statistics */}
            <div className="flex justify-between dark:text-white-light mb-5">
                <h5 className="font-semibold text-lg ">Statistics</h5>
                <div className="dropdown">
                    <Dropdown
                        offset={[0, 5]}
                        placement='bottom-end'
                        btnClassName="hover:text-primary"
                        button={
                             <svg className="w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        }
                    >
                        <ul>
                            <li>
                                <button type="button">This Week</button>
                            </li>
                            <li>
                                <button type="button">Last Week</button>
                            </li>
                            <li>
                                <button type="button">This Month</button>
                            </li>
                            <li>
                                <button type="button">Last Month</button>
                            </li>
                        </ul>
                    </Dropdown>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 text-sm text-[#515365] font-bold">
                <div>
                    <div>Total Visits</div>
                    <div className="text-[#f8538d] text-lg">423,964</div>
                </div>
                <ReactApexChart series={totalVisit.series} options={totalVisit.options} type="line" height={58} />
            </div>
        </div>

        <div className="panel p-5 h-full rounded-lg shadow-lg">
            <div className="flex justify-between dark:text-white-light mb-5">
                <h5 className="font-semibold text-lg ">Expenses</h5>
                <div className="dropdown">
                    <Dropdown
                        offset={[0, 5]}
                        placement='bottom-end'
                        btnClassName="hover:text-primary"
                        button={
                            <svg className="w-5 h-5 text-black/70 dark:text-white/70 hover:!text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        }
                    >
                        <ul>
                            <li>
                                <button type="button">This Week</button>
                            </li>
                            <li>
                                <button type="button">Last Week</button>
                            </li>
                            <li>
                                <button type="button">This Month</button>
                            </li>
                            <li>
                                <button type="button">Last Month</button>
                            </li>
                        </ul>
                    </Dropdown>
                </div>
            </div>
            <div className="text-[#e95f2b] text-3xl font-bold my-10">
                <span>$ 45,141 </span>
                <span className="text-black text-sm dark:text-white-light ltr:mr-2 rtl:ml-2">this week</span>
                <svg className="text-success inline" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.5"
                        d="M22 7L14.6203 14.3347C13.6227 15.3263 13.1238 15.822 12.5051 15.822C11.8864 15.8219 11.3876 15.326 10.3902 14.3342L10.1509 14.0962C9.15254 13.1035 8.65338 12.6071 8.03422 12.6074C7.41506 12.6076 6.91626 13.1043 5.91867 14.0977L2 18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M22.0001 12.5458V7H16.418" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-full rounded-full h-5 p-1 bg-dark-light overflow-hidden shadow-3xl dark:shadow-none dark:bg-dark-light/10">
                    <div
                        className="bg-gradient-to-r from-[#4361ee] to-[#805dca] w-full h-full rounded-full relative before:absolute before:inset-y-0 ltr:before:right-0.5 rtl:before:left-0.5 before:bg-white before:w-2 before:h-2 before:rounded-full before:m-auto"
                        style={{ width: '65%' }}
                    ></div>
                </div>
                <span className="ltr:ml-5 rtl:mr-5 dark:text-white-light">57%</span>
            </div>
        </div>

        <div
            className="panel p-5 h-full overflow-hidden grid grid-cols-1 content-between rounded-lg shadow-lg text-white"
            style={{ background: 'linear-gradient(0deg,#00c6fb -227%,#005bea)' }}
        >
            <div className="flex items-start justify-between text-white-light mb-16 z-[7]">
                <h5 className="font-semibold text-lg">Total Balance</h5>
                <div className="relative text-xl whitespace-nowrap">
                    $ 41,741.42
                    <span className="table text-[#d3d3d3] bg-[#4361ee] rounded p-1 text-xs mt-1 ltr:ml-auto rtl:mr-auto">+ 2453</span>
                </div>
            </div>
            <div className="flex items-center justify-between z-10">
                <div className="flex items-center justify-between">
                    <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1937cc] ltr:mr-2 rtl:ml-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <button type="button" className="shadow-[0_0_2px_0_#bfc9d4] rounded p-1 text-white-light hover:bg-[#1937cc] grid place-content-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path opacity="0.5" d="M10 12L13 15L18 10" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </button>
                </div>
                <div className="relative flex flex-col">
                    <span className="text-xs text-[#d3d3d3] dark:text-white-light">Last Payment</span>
                    <span className="text-base text-white-light">$ 1,653</span>
                </div>
            </div>
        </div>
    </div>
</div>

)

};
export default Analytics



