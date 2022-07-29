import React from 'react';

import ReactApexChart from 'react-apexcharts';

const series = [
    {
        name: 'Send',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 42, 56, 82]
    },
    {
        name: 'Receive',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 90, 134, 42]
    },
    {
        name: 'Withdraw',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 64, 13, 64]
    }
]

const options = {
    chart: {
        width: "100%",
        height: 200,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            columnWidth: '90%',
            distributed: true,
            borderRadius: 5,
        }
    },
    stroke: {
        width: [6, 6, 6],
        colors: ["transparent"]
    },
    markers: {
        size: 0,
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
    yaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
    },
    grid: {
        show: false
    },
    legend: {
        show: false,
    },
    colors: ["#00BBFF", "#9C42F5", "#FF00AA"]
}

const TripleChart = () => {
    return(
        <ReactApexChart options={options} series={series} type="bar" height={200} />
    )
}

export default TripleChart;