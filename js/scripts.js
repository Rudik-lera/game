var player = true; //true -крестик , false нолик

var win1Comb = new Map([
  ['123', 0],
  ['456', 0],
  ['789', 0],
  ['147', 0],
  ['258', 0],
  ['369', 0],
  ['159', 0],
  ['357', 0],
]); 

var win2Comb = new Map([
  ['123', 0],
  ['456', 0],
  ['789', 0],
  ['147', 0],
  ['258', 0],
  ['369', 0],
  ['159', 0],
  ['357', 0],
]); 

var number =0;



$(document).ready(function () { //Когда страница прогружена

	

    $('td').on('click',function () { //Вешаем событие клиека на каждую ячейку таблицы с цветами
    	if(!$(this).children("img").length)
    	{
    		if(player)
	        {
	        	$(this).append('<img src="крестик.png" width="200px">');

	        	for (let key of win1Comb.keys()) {

	    			if(key.indexOf($(this).data("number"))!=-1)
	    			{
	    				let kol = Number(win1Comb.get(key))+1;
						win1Comb.set(key,kol);

	    				if(kol==3)
	    				{
	    					alert("Player 1 WIN");
	    					$(".1player").html(Number($(".1player").html())+1);

	    					number = 0;
    		
    						$('img').remove();

    						 win1Comb = new Map([
							  ['123', 0],
							  ['456', 0],
							  ['789', 0],
							  ['147', 0],
							  ['258', 0],
							  ['369', 0],
							  ['159', 0],
							  ['357', 0],
							]); 

							 win2Comb = new Map([
							  ['123', 0],
							  ['456', 0],
							  ['789', 0],
							  ['147', 0],
							  ['258', 0],
							  ['369', 0],
							  ['159', 0],
							  ['357', 0],
							]); 
	    				}
	    				
	    			}
				}
	        }
	        else
	        {
	        	$(this).append('<img src="нолик.png" width="200px">');

	        	for (let key of win2Comb.keys()) {
	    			if(key.indexOf($(this).data("number"))!=-1)
	    			{

	    				let kol = Number(win2Comb.get(key))+1;

						win2Comb.set(key,kol);

	    				if(kol==3)
	    				{
	    					alert("Player 2 WIN");
	    					$(".2player").html(Number($(".2player").html())+1);

	    					number = 0;
    		
    						$('img').remove();

    						 win1Comb = new Map([
							  ['123', 0],
							  ['456', 0],
							  ['789', 0],
							  ['147', 0],
							  ['258', 0],
							  ['369', 0],
							  ['159', 0],
							  ['357', 0],
							]); 

							 win2Comb = new Map([
							  ['123', 0],
							  ['456', 0],
							  ['789', 0],
							  ['147', 0],
							  ['258', 0],
							  ['369', 0],
							  ['159', 0],
							  ['357', 0],
							]); 
	    				}
	    				
	    			}
				}
	        }
	        player = !player;

	        if(++number == 9)
    		{
    		number = 0;

    		$('img').remove();

    			win1Comb = new Map([
				  ['123', 0],
				  ['456', 0],
				  ['789', 0],
				  ['147', 0],
				  ['258', 0],
				  ['369', 0],
				  ['159', 0],
				  ['357', 0],
				]); 

				win2Comb = new Map([
				  ['123', 0],
				  ['456', 0],
				  ['789', 0],
				  ['147', 0],
				  ['258', 0],
				  ['369', 0],
				  ['159', 0],
				  ['357', 0],
				]); 
    		}
    	}
    });

});