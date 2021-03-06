/*
 *  @param id  id值，如本例使用的#test
 *  @param value 变化的最终值
 */
function draw(paramsObj) {
	var id = paramsObj.id;
	var value = paramsObj.value;

	//数据处理
	if (value <= 0 || value === "--") {
		value = 0;
	} else if (value >= 100) {
		value = 100;
	} else {
		value = Math.round(value * 100) / 100;
	}

	var number = [100]
	var svg = d3.select(id).select('svg');
	var currentValue = svg.attr("data-value") || 0;
	svg.attr('data-value', value);
	var oldValue = currentValue;
	var pie = d3.pie();
	var minorTicks = 2;
	var majorTicks = 11;
	var majorDelta = 100 / (majorTicks - 1); //大刻度之间的距离
	var arcOuterCircle1 = d3.arc()
		.outerRadius(260)
		.innerRadius(245); //定义一个arc类
	var oldValue2 = oldValue;

	var outerCircle = svg.append("g")
		.attr("class", "outerCircle")

	//可变深色外圈
	function outerCircleVar(progress) {
		progress = Math.round(progress * 100) / 10000;
		outerCircle.append("svg:path")
			.data(pie(number))
			.style("stroke", "#013286")
			.style("fill", "#013286")
			.attr("transform", function() { //移动
				return "translate(" + 300 + ", " + 300 + ") rotate(270)"
			})
			.transition()
			.duration(2000)
			.attrTween('d', tweenPieOuterCircle)

		//半圆过渡
		function tweenPieOuterCircle(b) {
			b.endAngle = progress * Math.PI;
			var i = d3.interpolate({
				startAngle: 0,
				endAngle: 0
			}, b);
			return function(t) {
				return arcOuterCircle1(i(t));
			};
		}
	}

	//半圆轮廓
	function outlineCircle() {
		var g = svg.append("g");
		g.append("svg:path")
			.data(pie(number))
			.attr("class", "cls-2")
			.attr("d", (d3.arc()
				.outerRadius(270)
				.innerRadius(0)
				.startAngle(-0.01 * Math.PI)
				.endAngle(Math.PI + 0.01 * Math.PI)))
			.attr("d", "M-8.480904951094635,-269.86677129874755A270,270,0,1,1,-8.480904951094574,269.86677129874755Z")
			.attr("transform", function() { //移动
				return "translate(" + 300 + ", " + 300 + ") rotate(270)"
			})
	}

	//半圆轮廓细线
	function outlineCircleWeak() {
		var g = svg.append("g");
		g.append("svg:path")
			.data(pie(number))
			.attr("class", "cls-1")
			.attr("d", (d3.arc()
				.outerRadius(260)
				.innerRadius(0)
				.startAngle(-0.004 * Math.PI)
				.endAngle(Math.PI + 0.004 * Math.PI)))
			.attr("d", "M-3.26717036967169,-259.97947149299216A260,260,0,1,1,-3.26717036967169,259.97947149299216Z")
			.attr("transform", function() { //移动
				return "translate(" + 300 + ", " + 300 + ") rotate(270)"
			})
	}

	//内圈圆渐变颜色
	function arcsInnerGradient() {
		var g = svg.append("g");
		g.append("svg:path")
			.data(pie(number))
			.attr("fill", "#0b2d63")
			.attr("d", (d3.arc()
				.outerRadius(240)
				.innerRadius(0)
				.startAngle(0)
				.endAngle(3.14)));
		g.append("svg:path")
			.data(pie(number))
			.attr("d", (d3.arc()
				.outerRadius(240)
				.innerRadius(0)
				.startAngle(0.25 * Math.PI)
				.endAngle(0.68 * Math.PI)))
			.attr("fill", "url('#myGradient')");
		g.attr("transform", function() { //移动
			return "translate(" + 300 + ", " + 300 + ") rotate(270)"
		})
	}

	//内圈圆
	function arcsInner() {
		var g = svg.append("g");
		g.append("svg:path")
			.data(pie(number))
			.attr("stroke", "url('#myGradient')")
			.attr("stroke-width", "2")
			.attr("fill", "#061b42")
			.attr("d",
				(d3.arc()
					.outerRadius(120)
					.innerRadius(0)
					.startAngle(0 * Math.PI)
					.endAngle(Math.PI)))
			.attr("transform", function() { //移动
				return "translate(" + 300 + ", " + 300 + ") rotate(270)"
			})
	}

	//text文本内部
	function drawText() {
		var x = 300,
			y = 270;
		var g = svg.append('g');
		g.append('text')
			.attr("class", "text")
			.attr("x", x)
			.attr("y", y)
			.append('tspan')
			.attr("fill", "#fff");
	}

	function mark() {
		var g = svg.append("svg:g");
		for (var i = 0; i <= 100; i += majorDelta) {
			//循环每个大刻度
			var minorDelta = majorDelta / minorTicks; //小刻度之间的距离
			for (var j = i + minorDelta; j < Math.min(i + majorDelta, 100); j += minorDelta) { //循环每个小刻度
				var point1 = valueToPoint(j, 0.82);
				var point2 = valueToPoint(j, 0.85);
				//获取小刻度线的（x1,y1）(x2,y2)位置
				//添加小刻度线
				g.append("svg:line")
					.attr("x1", point1.x) //小刻度线的两点坐标
					.attr("y1", point1.y)
					.attr("x2", point2.x)
					.attr("y2", point2.y)
					.style("stroke", "#fff") //小刻度线颜色
					.style("stroke-width", "1px"); //小刻度的宽度
			}
			//获取大刻度线的（x1,y1）(x2,y2)位置
			var point3 = valueToPoint(i, 0.8);
			var point4 = valueToPoint(i, 0.85);
			//添加大刻度线
			g.append("svg:line")
				.attr("x1", point3.x)
				.attr("y1", point3.y)
				.attr("x2", point4.x)
				.attr("y2", point4.y)
				.style("stroke", "#fff")
				.style("stroke-width", "4px");
			// 增加刻度值
			var point = valueToPoint(i, 0.7);
			g.append("svg:text")
				.attr("x", point.x)
				.attr("y", point.y)
				.attr("dy", -1)
				.attr("text-anchor", "middle")
				.text(i)
				.style("font-size", 20 + "px")
				.style("fill", "#fff")
				.style("stroke-width", "0px")
		}
	}

	function valueToPoint(value, factor) {
		return {
			x: 300 - 300 * factor * Math.cos(valueToRadians(value)),
			y: 300 - 300 * factor * Math.sin(valueToRadians(value))
		}
	}

	function valueToDegrees(value) {
		return value / 100 * 180;
	}

	function valueToRadians(value) {
		return valueToDegrees(value) * Math.PI / 180;
	}

	//指针
	function pointer() {
		var pointerContainer = svg.append("svg:g").attr("class", "pointerContainer");
		//指针的点轨迹
		var pointerPath = buildPointerPath(0);
		var currentPoint = (0);
		var currentPoint1 = (0);

		//小球轨迹
		{
			//                pointerContainer.append('circle')
			//                    .attr('cx', pointerPath[0].x)
			//                    .attr('cy', pointerPath[0].y)
			//                    .attr('r', 4)
			//                    .attr('fill', '#fff')
			//                    .transition()
			//                    .duration(2000)//持续时间
			//                    .attrTween("transform", function () {
			//                        //判断超出量程的问题
			//                        var targetRotation = (valueToDegrees(value));
			//                        //现在的角度
			//                        var currentRotation = currentPoint1;
			//                        currentPoint1 = targetRotation;
			//                        return function (step) {
			//                            var rotation = currentRotation + (targetRotation - currentRotation) * step;
			//                            return " rotate(" + rotation + ", " + 300 + ", " + 300 + ")";   //定义旋转
			//                        }
			//                    });
		}

		var pointerLine = d3.line()
			.x(function(d) {
				return d.x
			})
			.y(function(d) {
				return d.y
			})
		//画指针
		{
			pointerContainer.selectAll("path")
				.data([pointerPath])
				.enter()
				.append("svg:path")
				.attr("d", pointerLine)
				.attr("class", "pointerShadow")
				.transition()
				.duration(2000) //持续时间
				.attrTween("transform", function() {
					//判断超出量程的问题
					var targetRotation = (valueToDegrees(value));
					//现在的角度
					var currentRotation = currentPoint;
					currentPoint = targetRotation;
					return function(step) {
						var rotation = currentRotation + (targetRotation - currentRotation) * step;
						var textValue = (oldValue2 || 0) - ((oldValue2 || 0) - value) * step;
						textValue = Math.round(textValue * 100) / 100 + "%"; //处理文本小数
						svg.select(".text tspan").text(textValue);
						return " rotate(" + rotation + ", " + 300 + ", " + 300 + ")"; //定义旋转
					}
				})
		}
	}

	function buildPointerPath(value) {
		var head = valueToPoint(value, 0.85),
			tail = calcCross(head),
			tail1 = {
				x: tail.x - 9,
				y: tail.y - 1
			},
			tail2 = {
				x: tail.x - 11,
				y: tail.y - 7
			},
			tail3 = {
				x: tail.x - 13,
				y: tail.y - 1
			},
			tail4 = {
				x: tail.x - 9,
				y: tail.y + 1
			},
			tail5 = {
				x: tail.x - 11,
				y: tail.y + 7
			},
			tail6 = {
				x: tail.x - 13,
				y: tail.y + 1
			};
		return [tail, tail1, tail2, tail3, head, tail4, tail5, tail6, tail];
	}

	function calcCross(p) {
		var l = parseInt(Math.sqrt((p.y - 300) * (p.y - 300) + (p.x - 300) * (p.x - 300))),
			cross = {
				x: parseInt(300 + (p.x - 300) * 110 / l),
				y: parseInt(300 + (p.y - 300) * 110 / l)
			};
		return cross;
	}

	outlineCircle();
	outlineCircleWeak();
	arcsInnerGradient();
	mark();
	arcsInner();
	outerCircleVar(value);
	drawText();
	pointer();
}
