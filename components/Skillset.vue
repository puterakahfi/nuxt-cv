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
          "Vuejs",
          "Nuxtjs",
          "PHP",
          "Symfony",
          "Laravel",
          "Docker",
          "Linux",
          "git"
        ],
        datasets: [
          {
            borderColor: "#F26083",
            backgroundColor: "rgb(248, 203, 223, 0.5)",
            label: "Frontend",
            data: [40, 50, 60, 30, 30, 0, 0, 0, 0, 0, 0]
          },
          {
            label: "Backend",
            borderColor: "rgb(246, 231, 137)",
            backgroundColor: "rgb(246, 231, 137, 0.5)",
            data: [0, 0, 0, 0, 0, 70, 60, 50, 30, 0, 0]
          },
          {
            label: "Tools",
            borderColor: "#B390D0",
            backgroundColor: "rgb(179, 144, 208, 0.5)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 70]
          }
        ]
      }
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: "#F8CBDF",
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
