
<script>
import VueCharts from "vue-chartjs";
import { Bar, Line, Radar } from "vue-chartjs";
export default {
  extends: Radar,
  data: () => ({
    chartdata: {
      datacollection: {
        labels: [
          "Javascript",
          "CSS",
          "HTML",
          "PHP",
          "Symfony",
          "Laravel",
          "Vuejs",
          "Nuxtjs",
          "Docker",
          "Linux"
        ],
        datasets: [
          {
            label: "Skillset",
            data: [30, 50, 60, 60, 50, 30, 10, 20, 40, 40]
          }
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scale: {
        ticks: {
          beginAtZero: false,
          max: 100,
          min: 0
        }
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartdata.datacollection, this.options);
  }
};
</script>
