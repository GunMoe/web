<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
  <head>
    <%-- <base href="<%=basePath%>"> --%>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nait Photo Album</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" type="text/css" href="subpage/css/htmleaf-demo.css"><!--演示页面样式，使用时可以不引用-->
	<link rel="stylesheet" href="subpage/css/main.css">
	  <link href="https://fonts.googleapis.com/css?family=Hind:400,600|Open+Sans:300,600" rel="stylesheet">
	  <link rel="stylesheet" href="subpage/dist/sortable.min.css">
	  <script type="text/javascript" src="subpage/dist/sortable.min.js"></script>
  
  		<!-- jquery cdn -->
		<script src="https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
		
		
  </head>
<body>

	<div class="htmleaf-container">
		<header class="htmleaf-header">
			<h1>Nait Photo Album <span>拖动查看原图</span></h1>
			<div class="htmleaf-links">
				<a class="htmleaf-icon icon-htmleaf-home-outline" href="//v.dounait.cn/" title="首页" ><span> 首页</span></a>
				<a class="htmleaf-icon icon-htmleaf-arrow-forward-outline" href="//www.google.com/" title="谷歌" target="_blank"><span> 谷歌</span></a>
			</div>
		</header>
		  <main class="sortable">
		    <div class="container">
		      <div class="wrapper">
		        <ul class="sortable__nav nav">
		          <li>
		            <a data-sjslink="all" class="nav__link">
		              All
		            </a>
		          </li>
		          <li>
		            <a data-sjslink="flatty" class="nav__link">
		              Flatty
		            </a>
		          </li>
		          <li>
		            <a data-sjslink="funny" class="nav__link">
		              Funny
		            </a>
		          </li>
		           <li>
		            <a data-sjslink="sexy" class="nav__link">
		              Sexy
		            </a>
		          </li>
		        </ul>
		        <div id="sortable" class="sjs-default">
		        	
		        	<!--文字说明栏-->
		        <!--1<p class="card__text">
		                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, eius, asperiores. Incidunt sapiente est quae iure...
		            </p>-->
		        	
		        <!--图片区 -->
		         
		          <c:forEach var="p" items="${lp}">
			          <div data-sjsel="${p.classify }">
			            <div class="card">
			              <img class="card__picture" src="//file.dounait.cn/../../file${p.path }" alt="">
			              <div class="card-infos">
			                <h2 class="card__title">${p.oldname }</h2>
			                <!--<p class="card__text">
			                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur adipisci voluptatum laborum officiis...
			                </p>-->
			              </div>
			            </div>
			          </div>
		          </c:forEach>
		          
		          <!--图片区 end-->
		       
		        </div>
		      </div>
		    </div>
		  </main>
		  
	</div>
	
	<script type="text/javascript">
	    document.querySelector('#sortable').sortablejs()
	  </script>
</body>
</html>
