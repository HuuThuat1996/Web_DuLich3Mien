exports.InfoFestival = function (dataFestival) {
    var header = "<!DOCTYPE html>\n" +
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
        "<!-- nav -->\n" +
        "<nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\" style=\"background: #67b0d1;\">\n" +
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
        "            <form method=\"get\" action=\"http://localhost:8084/search\" role=\"search\" id=\"formSearch\">\n" +
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
        "        <div class=\"collapse navbar-collapse navbar-right navbar-main-collapse col-lg-6\">\n" +
        "            <ul class=\"nav navbar-nav\">\n" +
        "                <li class=\"active\"><a href=\"/\">Trang chủ</a></li>\n" +
        "                <li><a href=\"#images\">Hình ảnh</a></li>\n" +
        "                <li><a href=\"#details\">Chi tiết</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <!-- /.navbar-collapse -->\n" +
        "    </div>\n" +
        "    <!-- /.container -->\n" +
        "</nav>\n" +
        "<section id=\"images\" class=\"home-section text-center\" style=\"margin: 100px 0 0 0; padding: 10px;\">";
    //slide image
    var slides = "<h1>" + dataFestival.FestivalName + "</h1><div class=\"container\">\n" +
        "    <!-- Jssor Slider Begin -->\n" +
        "\n" +
        "    <style>\n" +
        "        /* jssor slider loading skin spin css */\n" +
        "        .jssorl-009-spin img {\n" +
        "            animation-name: jssorl-009-spin;\n" +
        "            animation-duration: 1.6s;\n" +
        "            animation-iteration-count: infinite;\n" +
        "            animation-timing-function: linear;\n" +
        "        }\n" +
        "\n" +
        "        @keyframes jssorl-009-spin {\n" +
        "            from {\n" +
        "                transform: rotate(0deg);\n" +
        "            }\n" +
        "\n" +
        "            to {\n" +
        "                transform: rotate(360deg);\n" +
        "            }\n" +
        "        }\n" +
        "    </style>\n" +
        "\n" +
        "    <div id=\"slider1_container\" style=\"visibility: hidden; position: relative; margin: 0 auto; width: 1140px; height: 500px; overflow: hidden;\">";
    slides += "<div u=\"slides\" style=\"position: absolute; left: 0px; top: 0px; width: 1140px; height: 500px;\n" +
        "            overflow: hidden;\">";
    var itemSlides = "<div>\n" +
        "                    <img data-u=\"image\" src=\"" + dataFestival.ImageTitle.url + "\" />\n" +
        "                </div>";


    dataFestival.Images.forEach(function (item) {
        itemSlides += "<div>\n" +
            "                    <img data-u=\"image\" src=\"" + item.url + "\" />\n" +
            "                </div>";
    });
    slides += itemSlides;
    slides += " </div>";
    slides += "<style>\n" +
        "    .jssorb031 {position:absolute;}\n" +
        "    .jssorb031 .i {position:absolute;cursor:pointer;}\n" +
        "    .jssorb031 .i .b {fill:#000;fill-opacity:0.5;stroke:#fff;stroke-width:1200;stroke-miterlimit:10;stroke-opacity:0.3;}\n" +
        "    .jssorb031 .i:hover .b {fill:#fff;fill-opacity:.7;stroke:#000;stroke-opacity:.5;}\n" +
        "    .jssorb031 .iav .b {fill:#fff;stroke:#000;fill-opacity:1;}\n" +
        "    .jssorb031 .i.idn {opacity:.3;}\n" +
        "</style>\n" +
        "<div data-u=\"navigator\" class=\"jssorb031\" style=\"position:absolute;bottom:12px;right:12px;\" data-autocenter=\"1\" data-scale=\"0.5\" data-scale-bottom=\"0.75\">\n" +
        "    <div data-u=\"prototype\" class=\"i\" style=\"width:16px;height:16px;\">\n" +
        "        <svg viewBox=\"0 0 16000 16000\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\">\n" +
        "            <circle class=\"b\" cx=\"8000\" cy=\"8000\" r=\"5800\"></circle>\n" +
        "        </svg>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<!--#endregion Bullet Navigator Skin End -->\n" +
        "\n" +
        "<!--#region Arrow Navigator Skin Begin -->\n" +
        "<!-- Help: https://www.jssor.com/development/slider-with-arrow-navigator.html -->\n" +
        "<style>\n" +
        "    .jssora051 {display:block;position:absolute;cursor:pointer;}\n" +
        "    .jssora051 .a {fill:none;stroke:#fff;stroke-width:360;stroke-miterlimit:10;}\n" +
        "    .jssora051:hover {opacity:.8;}\n" +
        "    .jssora051.jssora051dn {opacity:.5;}\n" +
        "    .jssora051.jssora051ds {opacity:.3;pointer-events:none;}\n" +
        "</style>\n" +
        "<!--#endregion Arrow Navigator Skin End -->\n" +
        "\n" +
        "</div>\n" +
        "<!-- Jssor Slider End -->\n" +
        "</div>\n" +
        "</section>";
    slides += " <div style=\"clear: both;\"></div>";

    //content
    var content = "<section id=\"details\" class=\"home-section text-center\" style=\"margin: 0px; padding: 10px;\">\n" +
        "    <h1>Thông tin chi tiết</h1>";
    content += "<p style='text-align: left;'>" + dataFestival.Descript + "</br>" + dataFestival.Content + "</p>";
    content += "</section>";
    content += " <div style=\"clear: both;\"></div>";

    var footer =
        "<!-- Core JavaScript Files -->\n" +
        "<script src=\"../js/jquery.min.js\"></script>\n" +
        "<script src=\"../assert/bootstrap/dist/js/bootstrap.min.js\"></script>\n" +
        "<!-- <script src=\"js/jquery.easing.min.js\"></script>\t -->\n" +
        "<!-- <script src=\"js/jquery.scrollTo.js\"></script> -->\n" +
        "<script src=\"../js/wow.min.js\"></script>\n" +
        "<!-- Custom Theme JavaScript -->\n" +
        "<script src=\"../js/custom.js\"></script>\n" +
        "<script src=\"../js/docs.min.js\"></script>\n" +
        "<script src=\"../js/ie10-viewport-bug-workaround.js\"></script>\n" +
        "<script src=\"../js/jssor.slider.min.js\"></script>\n" +
        "\n" +
        "<script>\n" +
        "    $(document).ready(function () {\n" +
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
        "</script>" +
        "\n" +
        "<script>\n" +
        "\n" +
        "    jQuery(document).ready(function ($) {\n" +
        "        var options = {\n" +
        "            $AutoPlay: 1,\n" +
        "            $AutoPlaySteps: 1,\n" +
        "            $Idle: 2000,\n" +
        "            $PauseOnHover: 1,\n" +
        "\n" +
        "            $ArrowKeyNavigation: 1,\n" +
        "            $SlideEasing: $Jease$.$OutQuint,\n" +
        "            $SlideDuration: 800,\n" +
        "            $MinDragOffsetToSlide: 20,\n" +
        "            $SlideSpacing: 0,\n" +
        "            $Cols: 1,\n" +
        "            $Align: 0,\n" +
        "            $UISearchMode: 1,\n" +
        "            $PlayOrientation: 1,\n" +
        "            $DragOrientation: 1,\n" +
        "            $ArrowNavigatorOptions: {\n" +
        "                $Class: $JssorArrowNavigator$,\n" +
        "                $ChanceToShow: 2,\n" +
        "                $Steps: 1\n" +
        "            },\n" +
        "\n" +
        "            $BulletNavigatorOptions: {\n" +
        "                $Class: $JssorBulletNavigator$,\n" +
        "                $ChanceToShow: 2,\n" +
        "                $Steps: 1,\n" +
        "                $Rows: 1,\n" +
        "                $SpacingX: 12,\n" +
        "                $SpacingY: 4,\n" +
        "                $Orientation: 1\n" +
        "            }\n" +
        "        };\n" +
        "\n" +
        "        var jssor_slider1 = new $JssorSlider$(\"slider1_container\", options);\n" +
        "\n" +
        "        function ScaleSlider() {\n" +
        "            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;\n" +
        "            if (parentWidth) {\n" +
        "                jssor_slider1.$ScaleWidth(parentWidth - 30);\n" +
        "            }\n" +
        "            else\n" +
        "                window.setTimeout(ScaleSlider, 30);\n" +
        "        }\n" +
        "        ScaleSlider();\n" +
        "\n" +
        "        $(window).bind(\"load\", ScaleSlider);\n" +
        "        $(window).bind(\"resize\", ScaleSlider);\n" +
        "        $(window).bind(\"orientationchange\", ScaleSlider);\n" +
        "    });\n" +
        "</script>\n" +
        "\n" +
        "</body>\n" +
        "\n" +
        "</html>\n";
    var pageinfo = header + slides + content + footer;
    return pageinfo;
}


exports.InfoArea = function (dataArea) {
    var header = "<!DOCTYPE html>\n" +
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
        "<!-- nav -->\n" +
        "<nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\" style=\"background: #67b0d1;\">\n" +
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
        "            <form method=\"get\" action=\"http://localhost:8084/search\" role=\"search\" id=\"formSearch\">\n" +
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
        "        <div class=\"collapse navbar-collapse navbar-right navbar-main-collapse col-lg-6\">\n" +
        "            <ul class=\"nav navbar-nav\">\n" +
        "                <li class=\"active\"><a href=\"/\">Trang chủ</a></li>\n" +
        "                <li><a href=\"#images\">Hình ảnh</a></li>\n" +
        "                <li><a href=\"#details\">Chi tiết</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <!-- /.navbar-collapse -->\n" +
        "    </div>\n" +
        "    <!-- /.container -->\n" +
        "</nav>\n" +
        "<section id=\"images\" class=\"home-section text-center\" style=\"margin: 100px 0 0 0; padding: 10px;\">";
    //slide image
    var slides = "<h1>" + dataArea.AreaName + "</h1><div class=\"container\">\n" +
        "    <!-- Jssor Slider Begin -->\n" +
        "\n" +
        "    <style>\n" +
        "        /* jssor slider loading skin spin css */\n" +
        "        .jssorl-009-spin img {\n" +
        "            animation-name: jssorl-009-spin;\n" +
        "            animation-duration: 1.6s;\n" +
        "            animation-iteration-count: infinite;\n" +
        "            animation-timing-function: linear;\n" +
        "        }\n" +
        "\n" +
        "        @keyframes jssorl-009-spin {\n" +
        "            from {\n" +
        "                transform: rotate(0deg);\n" +
        "            }\n" +
        "\n" +
        "            to {\n" +
        "                transform: rotate(360deg);\n" +
        "            }\n" +
        "        }\n" +
        "    </style>\n" +
        "\n" +
        "    <div id=\"slider1_container\" style=\"visibility: hidden; position: relative; margin: 0 auto; width: 1140px; height: 500px; overflow: hidden;\">";
    slides += "<div u=\"slides\" style=\"position: absolute; left: 0px; top: 0px; width: 1140px; height: 500px;\n" +
        "            overflow: hidden;\">";
    var itemSlides = "<div>\n" +
        "                    <img data-u=\"image\" src=\"" + dataArea.ImageTitle.url + "\" />\n" +
        "                </div>";


    dataArea.Images.forEach(function (item) {
        itemSlides += "<div>\n" +
            "                    <img data-u=\"image\" src=\"" + item.url + "\" />\n" +
            "                </div>";
    });
    slides += itemSlides;
    slides += " </div>";
    slides += "<style>\n" +
        "    .jssorb031 {position:absolute;}\n" +
        "    .jssorb031 .i {position:absolute;cursor:pointer;}\n" +
        "    .jssorb031 .i .b {fill:#000;fill-opacity:0.5;stroke:#fff;stroke-width:1200;stroke-miterlimit:10;stroke-opacity:0.3;}\n" +
        "    .jssorb031 .i:hover .b {fill:#fff;fill-opacity:.7;stroke:#000;stroke-opacity:.5;}\n" +
        "    .jssorb031 .iav .b {fill:#fff;stroke:#000;fill-opacity:1;}\n" +
        "    .jssorb031 .i.idn {opacity:.3;}\n" +
        "</style>\n" +
        "<div data-u=\"navigator\" class=\"jssorb031\" style=\"position:absolute;bottom:12px;right:12px;\" data-autocenter=\"1\" data-scale=\"0.5\" data-scale-bottom=\"0.75\">\n" +
        "    <div data-u=\"prototype\" class=\"i\" style=\"width:16px;height:16px;\">\n" +
        "        <svg viewBox=\"0 0 16000 16000\" style=\"position:absolute;top:0;left:0;width:100%;height:100%;\">\n" +
        "            <circle class=\"b\" cx=\"8000\" cy=\"8000\" r=\"5800\"></circle>\n" +
        "        </svg>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<!--#endregion Bullet Navigator Skin End -->\n" +
        "\n" +
        "<!--#region Arrow Navigator Skin Begin -->\n" +
        "<!-- Help: https://www.jssor.com/development/slider-with-arrow-navigator.html -->\n" +
        "<style>\n" +
        "    .jssora051 {display:block;position:absolute;cursor:pointer;}\n" +
        "    .jssora051 .a {fill:none;stroke:#fff;stroke-width:360;stroke-miterlimit:10;}\n" +
        "    .jssora051:hover {opacity:.8;}\n" +
        "    .jssora051.jssora051dn {opacity:.5;}\n" +
        "    .jssora051.jssora051ds {opacity:.3;pointer-events:none;}\n" +
        "</style>\n" +
        "<!--#endregion Arrow Navigator Skin End -->\n" +
        "\n" +
        "</div>\n" +
        "<!-- Jssor Slider End -->\n" +
        "</div>\n" +
        "</section>";
    slides += " <div style=\"clear: both;\"></div>";

    //content
    var content = "<section id=\"details\" class=\"home-section text-center\" style=\"margin: 0px; padding: 10px;\">\n" +
        "    <h1>Thông tin chi tiết</h1>";
    content += "<p style='text-align: left;'>" + dataArea.Descript + "</br>" + dataArea.Content + "</p>";
    content += "</section>";
    content += " <div style=\"clear: both;\"></div>";

    var footer =
        "<!-- Core JavaScript Files -->\n" +
        "<script src=\"../js/jquery.min.js\"></script>\n" +
        "<script src=\"../assert/bootstrap/dist/js/bootstrap.min.js\"></script>\n" +
        "<!-- <script src=\"js/jquery.easing.min.js\"></script>\t -->\n" +
        "<!-- <script src=\"js/jquery.scrollTo.js\"></script> -->\n" +
        "<script src=\"../js/wow.min.js\"></script>\n" +
        "<!-- Custom Theme JavaScript -->\n" +
        "<script src=\"../js/custom.js\"></script>\n" +
        "<script src=\"../js/docs.min.js\"></script>\n" +
        "<script src=\"../js/ie10-viewport-bug-workaround.js\"></script>\n" +
        "<script src=\"../js/jssor.slider.min.js\"></script>\n" +
        "\n" +
        "<script>\n" +
        "    $(document).ready(function () {\n" +
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
        "</script>" +
        "\n" +
        "<script>\n" +
        "\n" +
        "    jQuery(document).ready(function ($) {\n" +
        "        var options = {\n" +
        "            $AutoPlay: 1,\n" +
        "            $AutoPlaySteps: 1,\n" +
        "            $Idle: 2000,\n" +
        "            $PauseOnHover: 1,\n" +
        "\n" +
        "            $ArrowKeyNavigation: 1,\n" +
        "            $SlideEasing: $Jease$.$OutQuint,\n" +
        "            $SlideDuration: 800,\n" +
        "            $MinDragOffsetToSlide: 20,\n" +
        "            $SlideSpacing: 0,\n" +
        "            $Cols: 1,\n" +
        "            $Align: 0,\n" +
        "            $UISearchMode: 1,\n" +
        "            $PlayOrientation: 1,\n" +
        "            $DragOrientation: 1,\n" +
        "            $ArrowNavigatorOptions: {\n" +
        "                $Class: $JssorArrowNavigator$,\n" +
        "                $ChanceToShow: 2,\n" +
        "                $Steps: 1\n" +
        "            },\n" +
        "\n" +
        "            $BulletNavigatorOptions: {\n" +
        "                $Class: $JssorBulletNavigator$,\n" +
        "                $ChanceToShow: 2,\n" +
        "                $Steps: 1,\n" +
        "                $Rows: 1,\n" +
        "                $SpacingX: 12,\n" +
        "                $SpacingY: 4,\n" +
        "                $Orientation: 1\n" +
        "            }\n" +
        "        };\n" +
        "\n" +
        "        var jssor_slider1 = new $JssorSlider$(\"slider1_container\", options);\n" +
        "\n" +
        "        function ScaleSlider() {\n" +
        "            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;\n" +
        "            if (parentWidth) {\n" +
        "                jssor_slider1.$ScaleWidth(parentWidth - 30);\n" +
        "            }\n" +
        "            else\n" +
        "                window.setTimeout(ScaleSlider, 30);\n" +
        "        }\n" +
        "        ScaleSlider();\n" +
        "\n" +
        "        $(window).bind(\"load\", ScaleSlider);\n" +
        "        $(window).bind(\"resize\", ScaleSlider);\n" +
        "        $(window).bind(\"orientationchange\", ScaleSlider);\n" +
        "    });\n" +
        "</script>\n" +
        "\n" +
        "</body>\n" +
        "\n" +
        "</html>\n";
    var pageinfo = header + slides + content + footer;
    return pageinfo;
}