FusionCharts.ready(function () {
    var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        width: '215',
        height: '200',
        dataFormat: 'json',
		id:'fusionPie',
        dataSource: {
            "chart": {
                "paletteColors": "#980416,#ce5605,#007856,#f45b00,#8e0000",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "use3DLighting": "0",
				"showHoverEffect":"1",
                "showShadow": "0",
                "enableSmartLabels":false,
                "startingAngle": "310",
                "showLabels": false,
                "showPercentValues": false,
                "showLegend": false,
                "showTooltip": true,
                "decimals": "0",
				"animation":"1",
				"showValues":false,
				"chartLeftMargin":"-25",
				"chartRightMargin":"-25",
				"chartTopMargin":'-25',
				"chartBottomMargin":"-25"
				
               
            },
            "data": [
                {
                    "label": "initiated",
                    "value": "30",
					"tooltext": "initiated : 30%"
                }, 
                {
                    "label": "suspended",
                    "value": "40",
					"tooltext": "suspended : 40%"
                }, 
                {
                    "label": "submitted",
                    "value": "30",
					"tooltext": "submitted : 30%"
                }
            ]
        }
    });

	
	var widgetChart = FusionCharts("fusionPie").clone();
	revenueChart.render("loanChart");
	widgetChart.render(document.getElementById ("loanChart1"));

});

FusionCharts.ready(function () {
    var barChart = new FusionCharts({
        type: 'bar2d',
        width: '210',
        height: '150',
        dataFormat: 'json',
		id:'fusionBar',
        dataSource: {
            "chart": {
            
               
                "paletteColors": "#980416,#ce5605,#007856,#f45b00,#8e0000",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "showHoverEffect":"1",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "0",
                "legendBorderAlpha": "0",
                "legendShadow": "0",
                "placevaluesInside": "0",
                "valueFontColor": "#ffffff",
                "showXAxisLine": "0",
                "showLegend": false,
                "showTooltip": true,
                "divlineColor": "#999999",               
                "divLineIsDashed": "0",
                "showAlternateVGridColor": "0",
                "subcaptionFontBold": "0",
				"showValues":false,
				"numDivLines":'0',
				"yAxisMaxValue":'40',
				"borderAlpha":'0',
				"canvasbgAlpha":'0',
				"divLineAlpha":'0' ,
				"showDivLineValues":"0",
				"chartLeftMargin":"-25",
				"chartRightMargin":"-45",
				"chartTopMargin":'-25',
				"chartBottomMargin":"0"
            },            
            "categories": [
                {
                    "category": [
                        {
                            "label": "pending review"
                        }, 
                        {
                            "label": "pending assignment"
                        }, 
                        {
                            "label": "assigned"
                        }
                    ]
                }
            ],            
            "dataset": [
                {
                  
                    "data": [
                        {
                            "value": "30",
							"tooltext": "pending review : 30%"
							
                        }, 
                        {
                            "value": "40",
							"tooltext": "pending assignment : 40%"
                        }, 
                        {
                            "value": "30",
							"tooltext": "assigned : 40%"
                        }
                    ]
                }
            ]
        }
    });  
	var widgetBarChart = FusionCharts("fusionBar").clone();
	barChart.render("barChart");
	widgetBarChart.render(document.getElementById ("barChart1"));
});