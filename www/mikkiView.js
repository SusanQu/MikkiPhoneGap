
// view
zog("hi from view.js");

var app = function(app) {
	
	
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		
		var logo = new zim.Rectangle(300, 80, "#ED8761");	
		logo.setBounds(0,0,300,100);
		p.main.addChild(logo);

		var petName = new createjs.Text("Mikki","35px Arial Rounded MT Bold", "#FFEAD0");
		petName.textBaseline = "alphabetic";
	    petName.alpha = 1;
	    petName.x = 100; 
	    petName.y = 50; 
	    logo.addChild(petName);
	    
		
		var content = p.main.content = new createjs.Container();
		content.setBounds(0,0,600,600);

		var mikkiImage = new createjs.Bitmap("images/mikkiCartoon.png");
		mikkiImage.scaleX = mikkiImage.scaleY = 0.4;
		mikkiImage.x = 35;
		mikkiImage.y = 30;
		content.addChild(mikkiImage);

		var thing = p.mainThing = new zim.Rectangle(350,80,"#F76F8E", null, null, 10);
		thing.x = 100;
		thing.y = 550;		
		content.addChild(thing);

		var petStoreB = new createjs.Text("Pet Store  >","35px Arial Rounded MT Bold", "#FFEAD0");
		petStoreB.textBaseline = "alphabetic";
	    petStoreB.alpha = 1;
	    petStoreB.x = 100; 
	    petStoreB.y = 50; 
	    thing.addChild(petStoreB);

		p.main.addChild(content);
			
		var related = new zim.Rectangle(600, 300, "#ED8761");	
		related.setBounds(0,0,600,300);
		p.main.addChild(related);

		var money = 100;

		var moneyStat = new createjs.Text("My Bank $" + money, "40px Arial Rounded MT Bold", "#FFEAD0");
		moneyStat.textBaseline = "alphabetic";
	    moneyStat.alpha = 1;
	    moneyStat.x = 0; 
	    moneyStat.y = 250; 
	    related.addChild(moneyStat);
	    

	    var buttonWork = new zim.Button(250, 80, "Work +$20", "lightblue", "#84BCDA", null, null, 10, "none", "none");
	    buttonWork.x = 350, buttonWork.y = 200;
	    related.addChild(buttonWork);

	      
	    buttonWork.on("click", function(){
	        money += 20;
	        console.log(money);
	        moneyStat.text = "My Bank $" + money;
	        moneyStat2.text = "My Bank $" + money;
	    });
		

		gridManager.add( new zim.Grid(content) );
		guideManager.add( new zim.Guide(content) );
		guideManager.add( new zim.Guide(content, false) );
		
		zog(layoutManager);
		
		var mainParts = [ 
	{object:logo, marginTop:5, maxWidth:80, minHeight:10, align:"center", valign:"top"},
	{object:content, marginTop:5, maxWidth:80, backgroundColor:"#FFEAD0"}, 
	{object:related, marginTop:5, maxWidth:80, height:20, backgroundColor:"#ED8761"} ];
		
		var mainLayout = new zim.Layout(p.main, mainParts, 5, "#FFEAD0", true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	

/*---------------------------------------------------- page 2 -----------------------------------------------------*/		
		p.info = new createjs.Container();		
		p.info.name = "info";		
		var infoBacking = new zim.Rectangle(stageW, stageH, "#F76F8E");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);

		var logo2 = new zim.Rectangle(300, 100, "#FFEAD0");	
		logo2.setBounds(0,0,300,100);
		p.info.addChild(logo2);

		var petStore = new createjs.Text("Pet Store","40px Arial Rounded MT Bold", "#F76F8E");
		petStore.textBaseline = "alphabetic";
	    petStore.alpha = 1;
	    petStore.x = 65; 
	    petStore.y = 60; 
	    logo2.addChild(petStore);

	    var content2 = p.info.content = new createjs.Container();
		content2.setBounds(0,0,600,600);
		p.info.addChild(content2);

		var storeBacking = new zim.Rectangle(600, 650, "pink", null, null, 20);	
		storeBacking.setBounds(0,0,600,650);
		content2.addChild(storeBacking);

		var catfoodImage = new createjs.Bitmap("images/CatFood.png");
		catfoodImage.scaleX = catfoodImage.scaleY = 0.8;
		catfoodImage.x = 180;
		catfoodImage.y = 20;
		content2.addChild(catfoodImage);

		var ffoodImage = new createjs.Bitmap("images/fish.png");
		ffoodImage.scaleX = ffoodImage.scaleY = 0.4;
		ffoodImage.x = 180;
		ffoodImage.y = 380;
		content2.addChild(ffoodImage);

		var buyFood = new zim.Button(300, 80, "Food $20", "#84BCDA", "lightblue", null, null, 10, "none", "none");
	    buyFood.x = 150, buyFood.y = 250;
	    content2.addChild(buyFood);
	      
	    buyFood.on("click", function(){
	        money -= 20;
	        console.log(money);
	        moneyStat.text = "My Bank $" + money;
	        moneyStat2.text = "My Bank $" + money;
	    });

	    var buyFFood = new zim.Button(300, 80, "Fancy Food $40", "#84BCDA", "lightblue", null, null, 10, "none", "none");
	    buyFFood.x = 150, buyFFood.y = 530;
	    content2.addChild(buyFFood);
	      
	    buyFFood.on("click", function(){
	        money -= 40;
	        console.log(money);
	        moneyStat.text = "My Bank $" + money;
	        moneyStat2.text = "My Bank $" + money;
	    });

		var related2 = new zim.Rectangle(700, 250, "#FFEAD0");	
		related2.setBounds(0,0,700,250);
		p.info.addChild(related2);

		var homeButton = p.mainThing2 = new zim.Rectangle(300,80,"#84BCDA", null, null, 10);
		homeButton.x = 200;
		homeButton.y = 60;		
		related2.addChild(homeButton);

		var moneyStat2 = new createjs.Text("My Bank $" + money, "40px Arial Rounded MT Bold", "#ED8761");
		moneyStat2.textBaseline = "alphabetic";
	    moneyStat2.alpha = 1;
	    moneyStat2.x = 200; 
	    moneyStat2.y = 200; 
	    related2.addChild(moneyStat2);

		var homeB = new createjs.Text("<   Home","35px Arial Rounded MT Bold", "#FFEAD0");
		homeB.textBaseline = "alphabetic";
	    homeB.alpha = 1;
	    homeB.x = 80; 
	    homeB.y = 50; 
	   	homeButton.addChild(homeB);

		var mainParts2 = [ 
			{object:logo2, marginTop:5, maxWidth:80, minHeight:10, align:"center", valign:"top"},
			{object:content2, marginTop:5, maxWidth:80, backgroundColor:"pink"}, 
			{object:related2, marginTop:5, maxWidth:80, height:20, backgroundColor:"white"} 
		];
		
		var mainLayout2 = new zim.Layout(p.info, mainParts2, 5, "#FFEAD0", true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout2);

		return p;
		
	}	


/*---------------------------------------------------- Swipe Functions -----------------------------------------------------*/		
	
	app.makeHotSpots = function(assets, pages) {

		zog("hotSpots");
		
		var hs = new zim.HotSpots([
			{page:assets.main, rect:assets.mainThing, call:function(){pages.go(assets.info, "right");} },
			{page:assets.info, rect:assets.mainThing2, call:function(){pages.go(assets.main, "left");} }
		]);	
			
	}	
	
	return app;
	
}(app || {});