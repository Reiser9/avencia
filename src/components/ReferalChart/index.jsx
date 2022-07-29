import React from 'react';
import ReactApexChart from 'react-apexcharts';

const series = [
    {
        name: 'Referal',
        data: [88, 116, 99, 36, 83, 75, 48, 88, 64, 115, 99]
    }
]

const options = {
    xaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
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
    chart: {
        width: '100%',
        height: 140,
        toolbar: {
            show: false
        }
    },
    grid: {
        show: false,
    },
    colors: [function({value}) {
        if(value < 50) {
            return "#9C42F5"
        }
        else {
            return "rgba(224, 224, 255, 0.64)"
        }
    }],
    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: true,
            borderRadius: 10,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    }
}

const ReferalChart = () => {
    return(
        <ReactApexChart options={options} series={series} type="bar" height="100%" />
    )
}

export default ReferalChart;