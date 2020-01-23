<template>
  <div id="chart">
    <apexchart :height="height" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";
import { format } from "d3-format";

export default {
  components: {
    apexchart: VueApexCharts
  },
  props: ["data", "height", "showLegend"],
  data() {
    return {
      spendingTypes: ["Payroll", "Contracts/Leases", "Equipment/Supplies"]
    };
  },
  computed: {
    totals() {
      let out = [],
        x,
        name;
      for (let i = 0; i < this.data["programs"].length; i++) {
        x = 0;
        for (let j = 0; j < this.spendingTypes.length; j++) {
          name = this.spendingTypes[j];
          if (this.data[name]) {
            x += this.data[name][i];
          }
        }
        out.push(x);
      }
      return out;
    },
    chartOptions() {
      return {
        chart: {
          type: "bar",
          stacked: true,
          toolbar: { show: false }
        },
        legend: {
          show: this.showLegend,
          position: "top",
          fontSize: "20px",
          fontFamily: '"Avenir", Helvetica, Arial, sans-serif',
          onItemClick: {
            toggleDataSeries: false
          },
          onItemHover: {
            highlightDataSeries: false
          },
          markers: { width: 16, height: 16, radius: 16 }
        },
        grid: {
          padding: {
            top: this.showLegend ? -15 : -30
          }
        },
        colors: ["#2176d2", "#58c04d", "#f3c613"],
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
            dataLabels: {
              position: "bottom"
            }
          }
        },
        xaxis: {
          categories: this.data["programs"],
          labels: {
            formatter: function(value) {
              return "$" + format(",.2s")(value);
            }
          },
          min: 0,
          max: 3.5e6,
          tickAmount: 7
        },
        yaxis: {
          labels: {
            minWidth: 300,
            maxWidth: 300
          }
        },
        tooltip: {
          y: {
            formatter: function(value) {
              return "$" + format(",.0f")(value);
            }
          },
          style: { fontSize: "1rem" }
        },
        responsive: [
          {
            breakpoint: 1000,
            options: {
              yaxis: {
                labels: {
                  show: false
                }
              },
              xaxis: { tickAmount: 3, labels: { trim: false } },
              dataLabels: {
                enabled: true,
                textAnchor: "start",
                style: {
                  colors: ["#121516"]
                },
                formatter: (val, opt) => {
                  if (
                    opt.seriesIndex == 0 ||
                    val === this.totals[opt.dataPointIndex]
                  )
                    return opt.w.globals.labels[opt.dataPointIndex];
                }
              }
            }
          }
        ]
      };
    },
    series() {
      let out = [],
        x,
        name;
      for (let i = 0; i < this.spendingTypes.length; i++) {
        name = this.spendingTypes[i];
        if (this.data[name]) {
          x = {};
          x["name"] = name;
          x["data"] = this.data[name];
          out.push(x);
        }
      }
      return out;
    }
  }
};
</script>

<style>
.apexcharts-yaxis-label,
.apexcharts-xaxis-label {
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>