<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <link rel="shortcut icon" href="img/ppz.png" />


<!-- Google Chart -->
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript" src="js/scatter.js"></script>
  <script type="text/javascript" src="js/linechart.js"></script>
  <script type="text/javascript" src="js/combochart.js"></script>
  <script type="text/javascript" src="js/bubblechart.js"></script>
  <script type="text/javascript" src="js/piechart.js"></script>
  <script type="text/javascript" src="js/frequency.js"></script>

  
  <title>Pusat Pungutan Zakat</title>

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>



  <link 
  href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.1.0/nouislider.css" 
  type="text/css" rel="stylesheet" />

  <link href="css/custom.css" type="text/css" rel="stylesheet" />
</head>
<body>
  <nav>
    <div class="nav-wrapper white">
      <img class = "logo brand-logo left" src="img/ppz-logo.png"
           style = "margin: 0px 10px 0px 10px"
      >
<!--       <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul> -->
    </div>
  </nav>
  <div class ="container">
    <div class = "section">
      <div class= "row">
        <div class = "col s10">
          <form>
          <div id="year-slider" style="margin-top: 10px;"></div>
          </form>
        </div>
        <div class = "col s2">
          <div class= "waves-effect waves-ppz btn white light-blue-text darken-1"
               id ="choose_year"
               style = "margin-left: 10px;">
            Analyze
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- Analytics -->
    <div class="no-container">
    <div class="section">
      
      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12">
          
          <div class="graph-block z-depth-1" id ="combo_chart">
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col s12">
          <div class="graph-block z-depth-1" id ="linechart_material">
          </div>
        </div>
      </div>

    <div class ="row">
<!--       <div class ="col s12">
        <div class= "waves-effect waves-light btn white light-blue-text darken-1" id ="change-chart"></div>
        </div>
        <br><br> -->

        <div class="col s6">
          <div class="graph-block z-depth-1" id = "scatter">
            
          </div>
        </div>

        <div class="col s6">
          <div class="graph-block z-depth-1" id = "scatter1">
          </div>
        </div>
      
      </div>
      <div class="row">
        <div class="col s12">
          <div class="graph-block z-depth-1" id ="bubble_chart">
          </div>
        </div> 
      </div>

    <div class ="row">
      <div class ="col s12">

        <div class="col s7">
          <div class="graph-block z-depth-1" id = "geochart">
            
          </div>
        </div>

        <div class="col s5">
          <div class="graph-block z-depth-1" id = "right_geo">
            <div class = "row"><div class = "col s12">
              <div class = "" id = "piechart"></div>
            </div></div>
            <div class = "row"><div class = "col s12">
              <div class = "" id = "frequency"></div>
            </div></div>
          </div>
        </div>
      
      </div>
      <!-- section -->
    </div>
    <br><br>
    <!-- container -->
  </div>
  <!-- end Analytics -->


  <footer class="page-footer lime darken-3">
    <div class="footer-copyright lime darken-3">
      <div class="container">
      Made by <a class="amber-text text-lighten-3" href="https://www.robopreneur.com/">Robopreneur</a>
      </div>
    </div>
  </footer>


  <!--  Scripts-->
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <script src="js/wnumb-1.1.0/wNumb.js"></script>
   <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/11.1.0/nouislider.min.js">
    </script>
  

  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  <script src="js/body.js"></script>
  <!-- PAPA Parse -->
  <script type="text/javascript" src="js/PapaParse-4.5.0/papaparse.js"></script>

  <!-- Load data -->
  <script type="text/javascript" src="js/data-loader.js"></script>
 

  </body>
</html>
