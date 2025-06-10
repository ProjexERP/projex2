import { isPlatformBrowser } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-planandpricing',
  imports: [],
  templateUrl: './planandpricing.component.html',
  styleUrls: ['./planandpricing.component.css', '../../../../css/style.css' , '../../../../css/animate.css']
})
export class PlanandpricingComponent implements AfterViewInit{
     isBrowser = false;
  constructor(@Inject(PLATFORM_ID) private platformId: any, 
    private meta: Meta,
    private title: Title) {}
  
 

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);


    this.title.setTitle('Products & Packages');
    this.meta.updateTag({
      name: 'description',
      content: 'Sample product description.'
    });

  }

  ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
            var params = new URLSearchParams(window.location.search);
            var myParam = params.get('type');
            var planType = params.get('planstype');
            // show hide plans by planstype 'sub', 'onetime','online'
            if (myParam) {
                $("#onlinePlans").hide();
               
                if (myParam == "sub") {
                    $("#basicPlan").hide();
                    $("#ProPlan").hide();
                    $("#AdvancePlan").hide();
                    $(".onetime-div").hide();
                }
                if (myParam == "onetime") {
                    $("#basePlan").hide();
                    $("#premiumPlan").hide();
                    $("#emeraldPlan").hide();
                    $(".onetime-div").show();
                }
                if (myParam == "online") {
                    $("#offlinePlans").hide();
                    $("#onlinePlans").show();
                    $(".onetime-div").hide();
                }
            }
            // show hide plans by plantype 'online', offline
            if (planType) {
                if (planType == "offline") {
                    $("#offlinePlans").show();
                    $("#onlinePlans").hide();
                    $(".onetime-div").show();
                } else {
                    $("#offlinePlans").hide();
                    $("#onlinePlans").show();
                    $(".onetime-div").hide();
                }
            }
            // show hide plans(offline) for the users selection, check which is selected
            $('.tabs1 input[type=radio]:checked').each(function (this:HTMLElement) {
                $(this).siblings().addClass("active");
                var slide = $(".tabs1 .slide-bg1")
                var id = $(this).attr("id");
                $(".multi-user").addClass("hidden");
                $(".dual-user").addClass("hidden");
                $(".single-user").addClass("hidden")
                if (id === "user_0") {
                    slide.removeClass("bg1 bg2");
                    $(".single-user").removeClass("hidden");
                } else if (id === "user_1") {
                    slide.removeClass("bg2").addClass("bg1");
                    $(".dual-user").removeClass("hidden");
                } else {
                    slide.removeClass("bg1").addClass("bg2");
                    $(".multi-user").removeClass("hidden");
                }
            });
            // show hide plans(online) for the years
            $('.tabs input[type=radio]:checked').each(function (this:HTMLElement) {
                $(this).siblings().addClass("active");
                var slide = $(".tabs .slide-bg")
                var id = $(this).attr("id");
                $("#oneYear1").addClass("hidden");
                $("#oneYear2").addClass("hidden");
                $("#oneYear3").addClass("hidden");
                $("#threeYear1").addClass("hidden")
                $("#threeYear2").addClass("hidden")
                $("#threeYear3").addClass("hidden")
                $("#fiveYear1").addClass("hidden")
                $("#fiveYear2").addClass("hidden")
                $("#fiveYear3").addClass("hidden")
                if (id === "year_0") {
                    slide.removeClass("bg1 bg2");
                    $("#oneYear1").removeClass("hidden");
                    $("#oneYear2").removeClass("hidden");
                    $("#oneYear3").removeClass("hidden");
                } else if (id === "year_1") {
                    slide.removeClass("bg2").addClass("bg1");
                    $("#threeYear1").removeClass("hidden")
                    $("#threeYear2").removeClass("hidden");
                    $("#threeYear3").removeClass("hidden");
                } else {
                    slide.removeClass("bg1").addClass("bg2");
                    $("#fiveYear1").removeClass("hidden")
                    $("#fiveYear2").removeClass("hidden");
                    $("#fiveYear3").removeClass("hidden");
                }
            });
            // show hide plans(offline) for the users selection
            $(".tabs1 input[type=radio]").click(function (this:HTMLElement) {
                var slide = $(".tabs1 .slide-bg1");
                var labels = $(".tabs1 label");
                labels.removeClass("active");
                $(this).siblings().toggleClass("active");
                $(".multi-user").addClass("hidden");
                $(".dual-user").addClass("hidden");
                $(".single-user").addClass("hidden")
                if ($(this).attr("id") == "user_0") {
                    $(".single-user").removeClass("hidden")
                    slide.removeClass("bg1");
                    slide.removeClass("bg2");
                } 
                if ($(this).attr("id") == "user_1") {
                    $(".dual-user").removeClass("hidden");
                    slide.removeClass("bg2")
                    slide.addClass("bg1")
                } 
                if ($(this).attr("id") == "user_2") {
                    $(".multi-user").removeClass("hidden");
                    slide.removeClass("bg1")
                    slide.addClass("bg2")
                } 
            });
            // show hide plans(online) for the year selection , change on tab change
            $(".tabs input[type=radio]").click(function (this:HTMLElement) {
                var slide = $(".tabs .slide-bg");
                var labels = $(".tabs label");
                labels.removeClass("active");
                $(this).siblings().toggleClass("active");
                if ($(this).attr("id") == "year_0") {
                    $("#oneYear1").removeClass("hidden");
                    $("#oneYear2").removeClass("hidden");
                    $("#oneYear3").removeClass("hidden");
                    slide.removeClass("bg1");
                    slide.removeClass("bg2");
                } else {
                    $("#oneYear1").addClass("hidden")
                    $("#oneYear2").addClass("hidden")
                    $("#oneYear3").addClass("hidden")
                }
                if ($(this).attr("id") == "year_1") {
                    $("#threeYear1").removeClass("hidden")
                    $("#threeYear2").removeClass("hidden");
                    $("#threeYear3").removeClass("hidden");
                    slide.removeClass("bg2")
                    slide.addClass("bg1")
                } else {
                    $("#threeYear1").addClass("hidden")
                    $("#threeYear2").addClass("hidden")
                    $("#threeYear3").addClass("hidden")
                }
                if ($(this).attr("id") == "year_2") {
                    $("#fiveYear1").removeClass("hidden")
                    $("#fiveYear2").removeClass("hidden");
                    $("#fiveYear3").removeClass("hidden");
                    slide.removeClass("bg1")
                    slide.addClass("bg2")
                } else {
                    $("#fiveYear1").addClass("hidden")
                    $("#fiveYear2").addClass("hidden")
                    $("#fiveYear3").addClass("hidden")
                }
            });
           // click on free demo button
            $(".btn.btn-lg.btn-block.btn-success").click(function () {
                var currentDomain = window.location.pathname;
                var targetUrl = currentDomain.replace("/angular/product/Planandpricing", "") + "/contactUs.aspx"
                window.location.href = targetUrl;
            });

          }
  }

}
