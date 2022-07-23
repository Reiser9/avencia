import React from 'react';
import ReactApexChart from 'react-apexcharts';

const series = [{
    name: "Total Send",
    data: [100, 95, 76, 90, 60, 75, 63, 120, 76, 60, 70, 60]
  },
  {
    name: "Total Received",
    data: [97, 110, 102, 120, 89, 70, 60, 72, 81, 90, 120, 60]
  },
  {
    name: 'Total Send',
    data: [87, 60, 74, 99, 75, 70, 62, 96, 82, 79, 100, 120]
  }
]

const options = {
    chart: {
        width: '100%',
        height: 230,
        toolbar: {
            show: false
        }
    },
    stroke: {
        width: [2, 2, 2],
        curve: 'smooth',
        dashArray: [0, 0, 0],
        colors: ["#00BBFF", "#9C42F5", "#FF00AA"]
    },
    markers: {
        size: 0,
        strokeWidth: 0,
        colors: ["#00BBFF", "#9C42F5", "#FF00AA"],
        hover: {
            sizeOffset: 4
        }
    },
    xaxis: {
        categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OKT', 'NOV', 'DEC'],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: "rgba(224, 224, 255, 0.4)",
                fontFamily: 'Montserrat, sans-serif',
                fontSize: "12px"
            }
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        min: 60,
        max: 120,
        tickAmount: 3,
        labels: {
            style: {
                colors: "rgba(224, 224, 255, 0.4)",
                fontFamily: 'Montserrat, sans-serif',
                fontSize: "12px"
            }
        },
        opposite: true,
    },
    grid: {
        show: false
    },
    legend: {
        show: false,
    }
}

const BalanceChart = () => {
    return(
        <ReactApexChart options={options} series={series} type="line" height={230} />
    )
}

export default BalanceChart;