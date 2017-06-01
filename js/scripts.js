$(document).ready(function(){

	$("#searchStart").click(function(){
		var searchKeyword = $("#searchKeyword").val();
 $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchKeyword+"&limit=10&namespace=0&format=json",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "jsonp",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
            
            // for(var i = 0 ;i < 5;i++)
            // {
            // 	var x = document.getElementById("profile");

            //      document.write("<div class='contain'>");
                 
            // 	for(var j = 1;j <= 3 ;j++)
            // 	{
            // 		console.log(data[j][i]);
            // 		if(j == 3)
            // 		{

            // 		 document.write("<a href="+data[j][i]+" target='_blank' >"+data[j][i]+"</a>");

            // 		}
            // 		else
            // 		{
            // 			document.write("<h3>"+data[j][i]+"</h3>")
            // 		}
            		
            // 	}
            // 	document.write("</div>");
            // 	console.log("-------");
            // }
   //          $(".contain").css("border","2px solid cadetblue");
   //               $(".contain").css("text-align","center");
   //               $(".contain").css("border-radius","10px");
   //               $(".contain").css("background","aliceblue");
   //               $(".contain").css("padding-bottom","10px");
   //               $(".contain").appendTo("#profile");
            
			$("#profile").append(`
				<div class="well" id="contentFilter"></div>
				`);
				for(var i = 0 ;i < 10;i++)
            {
            	$("#contentFilter").append(`<div class="row" id="row">`);
                 
            	for(var j = 1;j <= 3 ;j++)
            	{
            		console.log(data[j][i]);
            		
            		
            		if(j == 3)
            		{

            		 $("#contentFilter").append(`<a href="${data[j][i]}" target='_blank' >${data[j][i]}</a>`);

            		}
            		else
            		{
            			$("#contentFilter").append(`
				
					<h6>${data[j][i]}</h6>

					`);
            		}
            	}
            	$("#contentFilter").append(`</div>`);
            }
				
				
				
		

        },
        error: function (errorMessage) {
        }
    });

	});
});