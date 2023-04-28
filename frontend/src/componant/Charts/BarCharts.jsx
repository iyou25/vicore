import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ chartType, data }) => {
  console.log("data", data);
  const chatsData = {
    series: [
      {
        name: "sales",
        data: data?.rows?.map((d) => d?.sub_type?.price || "")
      }
    ],
    options: {
      chart: {
        height: 350,
        type: { chartType },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: data?.rows?.map((d) => d?.name || "")
      }
    }
  };

  return (
    <div>
      <Chart
        options={chatsData.options}
        series={chatsData.series}
        type={chartType}
        height={500}
        width={1000}
      />
    </div>
  );
};

export default BarChart;
