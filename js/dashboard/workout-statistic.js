(function($) {
    /* "use strict" */


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
	var donutChart = function(){
		$("span.donut").peity("donut", {
			width: "90",
			height: "90"
		});
	}	
	var chartBar = function(){
		var optionsArea = {
          series: [{
            name: "Running",
            data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110, 60	]
          }
        ],
          chart: {
          height: 350,
          type: 'area',
		  group: 'social',
		  toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [4],
		  colors:['#FF9432'],
		  curve: 'straight'
        },
        legend: {
			show:false,
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          },
		  markers: {
			fillColors:['#C046D3','#1EA7C5','#FF9432'],
			width: 19,
			height: 19,
			strokeWidth: 0,
			radius: 19
		  }
        },
        markers: {
          size: [6],
		  strokeWidth: [4],
		  strokeColors: ['#FF9432'],
		  border:0,
		  colors:['#fff'],
          hover: {
            size: 10,
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec' ],
		  labels: {
		   style: {
			  colors: '#3E4954',
			  fontSize: '14px',
			   fontFamily: 'Poppins',
			  fontWeight: 100,
			  
			},
		  },
        },
		yaxis: {
			labels: {
			offsetX:-16,
		   style: {
			  colors: '#3E4954',
			  fontSize: '14px',
			   fontFamily: 'Poppins',
			  fontWeight: 100,
			  
			},
		  },
		},
		fill: {
			colors:['#FF9432'],
			type:'solid',
			opacity: 0.2
		},
		colors:['#FF9432'],
        grid: {
          borderColor: '#f1f1f1',
		  xaxis: {
            lines: {
              show: true
            }
          }
        },
		responsive: [{
			breakpoint: 575,
			options: {
				chart: {
					height: 250,
				},
				markers: {
					 size: [4],
					 hover: {
						size: 7,
					  }
				}
			}
		 }]
        };
		var chartArea = new ApexCharts(document.querySelector("#chartBar"), optionsArea);
        chartArea.render();

	}
	var chartBar2 = function(){
		var optionsArea = {
          series: [
          {
            name: "Cycling",
            data: [50, 100, 35, 35, 0, 0,80, 20, 40, 40, 40, 40	]
          }
        ],
          chart: {
          height: 350,
          type: 'area',
		  group: 'social',
		  toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [4],
		  colors:['#1EA7C5'],
		  curve: 'straight'
        },
        legend: {
			show:false,
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          },
		  markers: {
			fillColors:['#1EA7C5'],
			width: 19,
			height: 19,
			strokeWidth: 0,
			radius: 19
		  }
        },
        markers: {
          size: [8],
		  strokeWidth: [0],
		  strokeColors: ['#1EA7C5'],
		  border:0,
		  colors:['#1EA7C5'],
          hover: {
            size: 10,
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec' ],
		  labels: {
		   style: {
			  colors: '#3E4954',
			  fontSize: '14px',
			   fontFamily: 'Poppins',
			  fontWeight: 100,
			  
			},
		  },
        },
		yaxis: {
			labels: {
			offsetX:-16,
		   style: {
			  colors: '#3E4954',
			  fontSize: '14px',
			   fontFamily: 'Poppins',
			  fontWeight: 100,
			  
			},
		  },
		},
		fill: {
			colors:['#1EA7C5'],
			type:'solid',
			opacity: 0.2
		},
		colors:['#1EA7C5'],
        grid: {
          borderColor: '#f1f1f1',
		  xaxis: {
            lines: {
              show: true
            }
          }
        },
		responsive: [{
			breakpoint: 575,
			options: {
				chart: {
					height: 250,
				},
				markers: {
					 size: [6],
					 hover: {
						size: 7,
					  }
				}
			}
		 }]
        };
		var chartArea = new ApexCharts(document.querySelector("#chartBar2"), optionsArea);
        chartArea.render();

	}	
	var chartBar3 = function(){
		var optionsArea = {
          series: [{
            name: "Yoga",
            data: [65, 65, 65, 120, 120, 80, 120, 100, 100, 120, 120, 120]
          }
        ],
          chart: {
          height: 350,
          type: 'area',
		  group: 'social',
		  toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [4],
		  colors:['#C046D3'],
		  curve: 'straight'
        },
        legend: {
			show:false,
          tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
          },
		  markers: {
			fillColors:['#C046D3'],
			width: 19,
			height: 19,
			strokeWidth: 0,
			radius: 19
		  }
        },
        markers: {
          size: [8],
		  strokeWidth: [0],
		  strokeColors: ['#C046D3'],
		  border:0,
		  colors:['#C046D3'],
          hover: {
            size: 10,
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec' ],
		  labels: {
		   style: {
			  colors: '#3E4954',
			  fontSize: '14px',
			   fontFamily: 'Poppins',
			  fontWeight: 100,
			  
			},
		  },
        },
		yaxis: {
			labels: {
			offsetX:-16,
		   style: {
			  colors: '#3E4954',
			  fontSize: '14px',
			   fontFamily: 'Poppins',
			  fontWeight: 100,
			  
			},
		  },
		},
		fill: {
			colors:['#C046D3'],
			type:'solid',
			opacity: 0.2
		},
		colors:['#C046D3'],
        grid: {
          borderColor: '#f1f1f1',
		  xaxis: {
            lines: {
              show: true
            }
          }
        },
		responsive: [{
			breakpoint: 575,
			options: {
				chart: {
					height: 250,
				},
				markers: {
					 size: [6],
					 hover: {
						size: 7,
					  }
				}
			}
		 }]
        };
		var chartArea = new ApexCharts(document.querySelector("#chartBar3"), optionsArea);
        chartArea.render();

	}	
	var pieChart = function(){
		var options = {
          series: [20, 35, 45],
          chart: {
          type: 'donut',
		  height:200,
        },
		legend: {
			show:false,
		},
		fill:{
			colors:['#1EA7C5','#6EC51E','#EBEBEB']
		},
		stroke:{
			width:0,
		},
		colors:['#1EA7C5','#6EC51E','#EBEBEB'],
		dataLabels: {
          enabled: false
        }
        };

        var chart = new ApexCharts(document.querySelector("#pieChart"), options);
        chart.render();
	}
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				donutChart();
				chartBar();
				chartBar2();
				chartBar3();
				pieChart();
			},
			
			resize:function(){
				
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		
		
	});     

})(jQuery);