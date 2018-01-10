exports.ResultOfSearchFestival = function (data) {
    var resultSearch = "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "\n" +
        "<head>\n" +
        "    <meta charset=\"utf-8\">\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
        "    <meta name=\"description\" content=\"\">\n" +
        "    <meta name=\"author\" content=\"Thuận\">\n" +
        "\n" +
        "    <title>Du lịch 3 miền</title>\n" +
        "\n" +
        "    <!-- Bootstrap Core CSS -->\n" +
        "    <link href=\"../assert/bootstrap/dist/css/bootstrap.min.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
        "\n" +
        "    <!-- Fonts -->\n" +
        "    <link href=\"../assert/font-awesome/css/font-awesome.min.css\" rel=\"stylesheet\" type=\"text/css\">\n" +
        "    <link href=\"../css/animate.css\" rel=\"stylesheet\"/>\n" +
        "    <!-- Squad theme CSS -->\n" +
        "    <link href=\"../css/mainstyle.css\" rel=\"stylesheet\">\n" +
        "    <link href=\"../css/default.css\" rel=\"stylesheet\">\n" +
        "    <!--<link href=\"css/layout.css\" rel=\"stylesheet\">-->\n" +
        "\n" +
        "</head>\n" +
        "\n" +
        "<body id=\"page-top\" data-spy=\"scroll\" data-target=\".navbar-custom\">\n" +
        "<!-- Preloader -->\n" +
        "<div id=\"preloader\">\n" +
        "    <div id=\"load\"></div>\n" +
        "</div>\n" +
        "<!-- nav -->\n" +
        "<nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\" style=\"background:#67b0d1;\">\n" +
        "    <div class=\"container row\">\n" +
        "        <div class=\"navbar-header page-scroll col-lg-3\">\n" +
        "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">\n" +
        "                <i class=\"fa fa-bars\"></i>\n" +
        "            </button>\n" +
        "            <a class=\"navbar-brand\" href=\"/\">\n" +
        "                <h1>Du lịch 3 miền</h1>\n" +
        "            </a>\n" +
        "        </div>\n" +
        "        <div class=\"col-lg-4\">\n" +
        "            <form method=\"get\" action=\"search\" role=\"search\" id=\"formSearch\" onsubmit=\"return validate()\">\n" +
        "                <div class=\"input-group row\">\n" +
        "                    <input type=\"text\" class=\"form-control\" placeholder=\"Tìm kiếm\" name=\"infoSearch\" id=\"infoSearch\">\n" +
        "                    <span class=\"input-group-btn\">\n" +
        "                        <button type=\"submit\" class=\"btn\" id=\"btnSearch\">\n" +
        "                            <span class=\"glyphicon glyphicon-search\"></span>\n" +
        "                        </button>\n" +
        "                    </span>\n" +
        "                </div>\n" +
        "            </form>\n" +
        "            <div>\n" +
        "                <button class=\"optionSearch\" id=\"btnAll\"\n" +
        "                        style=\"background-color: rgba(255, 255, 255, 0); border: none; font-family: inherit; color: #fff;\">\n" +
        "                    Tất cả\n" +
        "                </button>\n" +
        "                <button class=\"optionSearch\" id=\"btnArea\"\n" +
        "                        style=\"background-color: rgba(255, 255, 255, 0); border: none; font-family: inherit; color: #fff;\">\n" +
        "                    Địa điểm\n" +
        "                </button>\n" +
        "                <button class=\"optionSearch\" id=\"btnFestival\"\n" +
        "                        style=\"background-color: rgba(255, 255, 255, 0); border: none; font-family: inherit; color: #fff;\">\n" +
        "                    Lễ hội\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <!-- Collect the nav links, forms, and other content for toggling -->\n" +
        "        <!--<div class=\"collapse navbar-collapse navbar-right navbar-main-collapse col-lg-6\">-->\n" +
        "            <!--&lt;!&ndash;<ul class=\"nav navbar-nav\">&ndash;&gt;-->\n" +
        "                <!--&lt;!&ndash;<li class=\"active\"><a href=\"#intro\">Trang chủ</a></li>&ndash;&gt;-->\n" +
        "                <!--&lt;!&ndash;<li><a href=\"#area\">Địa điểm</a></li>&ndash;&gt;-->\n" +
        "                <!--&lt;!&ndash;<li><a href=\"#festival\">Lễ hội</a></li>&ndash;&gt;-->\n" +
        "            <!--&lt;!&ndash;</ul>&ndash;&gt;-->\n" +
        "        <!--</div>-->\n" +
        "        <!-- /.navbar-collapse -->\n" +
        "    </div>\n" +
        "    <!-- /.container -->\n" +
        "</nav>\n" +
        "<div style=\"clear: both;\"></div>\n" +
        "\n" +
        "<section id=\"#\" class=\"home-section text-center\" style=\"margin: 100px 0 0 0; padding: 10px;\">\n" +
        "    <div class=\"content-list-result\" style=\"text-align: left;\">" +
        "<div class=\"total-result\" style=\"height: 20px; margin-left: 80px;\">\n" +
        "        </div>" +
        "<div class=\"list-item\" id =\"ContentList\">";
    if (data != "") {
        data.forEach(function (item) {
            resultSearch += "<div class=\"item-result\">\n" +
                "                <a href=\"http://localhost:8084/lehoi/thongtin?name=" + item.FestivalName + "&timestmap=" + item.Timestmap + "\"><h5>" + item.FestivalName + " " + item.StartDate + " - " + item.EndDate + "</h5></a>\n" +
                "                <div class='linkItem'>http://localhost:8084/" + item.FestivalName + "-" + item.Address + "-" + item.StartDate + "-" + item.EndDate + "</div>\n" +
                "                <div class=\"descript\">\n" +
                item.Descript +
                "                </div>\n" +
                "            </div>";
        });
    }
    else {
        resultSearch += "<h3>Không tìm thấy kết quả nào.</h3>";
    }
  
    resultSearch += "</div>\n" +
        "    </div>\n" +
        "</section>\n" +
        "<div style=\"clear: both;\"></div>\n" +
        "<!-- Core JavaScript Files -->\n" +
        "<script src=\"../js/jquery.min.js\"></script>\n" +
        "<script src=\"../assert/bootstrap/dist/js/bootstrap.min.js\"></script>\n" +
        "<!-- <script src=\"js/jquery.easing.min.js\"></script>\t -->\n" +
        "<!-- <script src=\"js/jquery.scrollTo.js\"></script> -->\n" +
        "<script src=\"../js/wow.min.js\"></script>\n" +
        "<!-- Custom Theme JavaScript -->\n" +
        "<script src=\"../js/custom.js\"></script>\n" +
        "<script>\n" +
        "$(document).ready(function () {\n" +
        "        //change option search\n" +
        "        $('.optionSearch').click(function () {\n" +
        "            var id = $(this).attr('id');\n" +
        "            if (id == 'btnAll') {\n" +
        "                $('#formSearch').attr('active', 'all');\n" +
        "                $('#formSearch').attr('action', 'http://localhost:8084/search');\n" +
        "                $('#infoSearch').attr('placeholder', 'Tìm kiếm');\n" +
        "                return 0;\n" +
        "            }\n" +
        "            else if (id == 'btnFestival') {\n" +
        "                $('#formSearch').attr('active', 'festival');\n" +
        "                $('#formSearch').attr('action', 'http://localhost:8084/festival/search');\n" +
        "                $('#infoSearch').attr('placeholder', 'Tìm kiếm lễ hội');\n" +
        "                return 0;\n" +
        "            }\n" +
        "            else if (id == 'btnArea') {\n" +
        "                $('#formSearch').attr('active', 'area');\n" +
        "                $('#formSearch').attr('action', 'http://localhost:8084/area/search');\n" +
        "                $('#infoSearch').attr('placeholder', 'Tìm kiếm địa danh');\n" +
        "                return 0;\n" +
        "            }\n" +
        "        });\n" +
        "    });\n" +
        "  function validate() {" +
        "    var info = document.getElementById(\"infoSearch\");" +
        "    if (info.value.trim() != \"\") {" +
        "      return true;" +
        "   }" +
        "   return false;" +
        "}" +
        "</script >";
    resultSearch += "\n" +
        "</body>\n" +
        "\n" +
        "</html>\n";
    return resultSearch;
}
