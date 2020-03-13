import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options:Object
  options2:Object
  options3:Object

  ngOnInit() {
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#2196f3'
          }
        }
      },
      legend: {
        data: ["Mar 1", "Mar 10"]
      },
      toolbox: {
        feature: {
          downloadTable: {
            show: false
          }
        }
      },
      grid: {
        left: "20%",
        right: "0",
        bottom: "15%",
        containLabel: true,
        width: "auto"
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: ["Mar 1", "", "", "", "", "", "", "", "", "Mar 10"],
          splitNumber: 2,
          axisTick: { show: false },
          axisLine: {
            show: false
          },
  
          name: "Scheduled Prod",
          nameLocation: "middle",
          nameGap: 50,
          axisLabel: {
            padding: [3, 30, 5, 6]
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          splitNumber: 2,
          axisTick: { show: false },
          axisLine: {
            show: false
          },
  
          name: "PROD",
          nameLocation: "middle",
          nameGap: 45,
          axisLabel: {
            formatter: function(value) {
              var data = "$" + value * 2 + "k";
              return data;
            }
          }
        }
      ],
      series: [
        {
          name: "Projected",
          type: "line",
          stack: "Projected",
          itemStyle: { normal: { color: "#9c27b0" } },
          areaStyle: { opacity: 0.2 },
          showSymbol: false,
          data: [0, 1, 2, 2, 4, 3.8, 5, 7, 6.5, 9]
        },
  
        {
          name: "Actual",
          type: "line",
          stack: "Actual",
          areaStyle: { opacity: 0.2 },
          itemStyle: { normal: { color: "#2196f3" } },
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          showSymbol: false,
          data: [0, 0.8, 1.5, 1, 2, 2.3, 3, 4, 3.8, 5]
        }
      ]
    };
  
    this.options2 = {
      title: {
        text: ""
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#2196f3"
          }
        }
      },
      legend: {
        data: ["Mar 1", "Mar 10"]
      },
      toolbox: {
        feature: {
          downloadTable: {
            show: false
          }
        }
      },
      areaColor: {},
      grid: {
        left: "20%",
        right: "0",
        bottom: "15%",
        containLabel: true,
        width: "auto"
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: ["Mar 1", "", "", "", "", "", "", "", "", "Mar 10"],
          splitNumber: 2,
          axisTick: { show: false },
          axisLine: {
            show: false
          },
  
          name: "New Patients",
          nameLocation: "middle",
          nameGap: 50,
          axisLabel: {
            padding: [3, 30, 5, 6]
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          splitNumber: 2,
          axisTick: { show: false },
          axisLine: {
            show: false
          },
  
          name: "PATIENTS",
          nameLocation: "middle",
          nameGap: 30
        }
      ],
      series: [
        {
          name: "Projected",
          type: "line",
          stack: "Projected",
          itemStyle: { normal: { color: "#9c27b0" } },
          areaStyle: { opacity: 0.2 },
          showSymbol: false,
          data: [0, 1, 2, 2, 4, 3.8, 5, 7, 6.5, 9]
        },
  
        {
          name: "Actual",
          type: "line",
          stack: "Actual",
          areaStyle: { opacity: 0.2 },
          itemStyle: { normal: { color: "#2196f3" } },
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          showSymbol: false,
          data: [0, 0.8, 1.5, 1, 2, 2.3, 3, 4, 3.8, 5]
        }
      ]
    };
  
  
    this.options3 = {
      title: {
        text: ""
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#2196f3"
          }
        }
      },
      legend: {
        data: ["Mar 1", "Mar 10"]
      },
      toolbox: {
        feature: {
          downloadTable: {
            show: false
          }
        }
      },
      areaColor: {},
      grid: {
        left: "20%",
        right: "0",
        bottom: "15%",
        containLabel: true,
        width: "auto"
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: true,
          data: ["Mar 1", "", "", "", "", "", "", "", "", "Mar 10"],
          splitNumber: 2,
          axisTick: { show: false },
          axisLine: {
            show: false
          },
  
          name: "Total AR to Collect",
          nameLocation: "middle",
          nameGap: 50,
          axisLabel: {
            padding: [3, 30, 5, 6]
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          splitNumber: 2,
          axisTick: { show: false },
          axisLine: {
            show: false
          },
  
          name: "AR",
          nameLocation: "middle",
          nameGap: 45,
          axisLabel: {
            formatter: function(value) {
              var data = "$" + value * 2 + "k";
              return data;
            }
          }
        }
      ],
      series: [
        {
          name: "Projected",
          type: "line",
          stack: "Projected",
          itemStyle: { normal: { color: "#9c27b0" } },
          areaStyle: { opacity: 0.2 },
          showSymbol: false,
          data: [0, 1, 2, 2, 4, 3.8, 5, 7, 6.5, 9]
        },
  
        {
          name: "Actual",
          type: "line",
          stack: "Actual",
          areaStyle: { opacity: 0.2 },
          itemStyle: { normal: { color: "#2196f3" } },
          label: {
            normal: {
              show: true,
              position: "top"
            }
          },
          showSymbol: false,
          data: [0, 0.8, 1.5, 1, 2, 2.3, 3, 4, 3.8, 5]
        }
      ]
    };
  }
}
