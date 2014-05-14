var mainContentWin = Ti.UI.createWindow({
	backgroundColor: '#787878',
	title: 'Jessica'
});

var mainNavWin = Ti.UI.iOS.createNavigationWindow({
	backgroundColor: '#787878',
	window : mainContentWin
});

var viewBody = Ti.UI.createView({
	backgroundColor: 'transparent'
});

var upperView = Ti.UI.createView({
	backgroundColor: '#f8f9fa',
	height: 246,
	top: 0
});

var chatMock  = Ti.UI.createImageView({
	image: 'chatapp_03.png',
	top:0,
	width: '100%',
	height: '202.5'
});

upperView.add(chatMock);

/*
var chatSections = [];

var chatFooter = Ti.UI.createView({
    height : 1,
    backgroundColor: 'transparent'
	});

var chatTemplate = {
    properties: {
    	height: 'auto',
    	selectedBackgroundColor: '#fff',
    	backgroundColor: '#fff',
    	selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE
    },
    childTemplates: [
        {                          
            type: 'Ti.UI.View',     
            bindId: 'chat_bubble',          
            properties: {            
                backgroundImage: 'chatbubble_green.png',
                backgroundLeftCap: 15,
                backgroundRightCap: 25,
                backgroundTopCap: 10,
                backgroundBottomCap: 10,
                //backgroundPaddingLeft: 20,
                //backgroundPaddingRight: 20,
                //backgroundPaddingTop: 20,
                //backgroundPaddingBottom: 20,
                right: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE
            }
        },
        {                          
            type: 'Ti.UI.Label',     
            bindId: 'chat_text',          
            properties: {            
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                backgroundColor: '#000',
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
                color:'#fff',
                font: {fontSize:14,fontFamily:'HelveticaNeue-Light'},
                textAlign:'right'
            }
        }
    ]
};

var chatList = Ti.UI.createListView({
	templates: { 'template': chatTemplate},
    defaultItemTemplate: 'template',
	backgroundColor: '#787878',
});

var chatSection = Ti.UI.createListSection({});
var chatItems = [
    { chat_text: {text: 'Hey there!'}}
];
chatSection.setItems(chatItems);
chatSections.push(chatSection);

chatList.separatorInsets = {left:0,right:0};
chatList.setSeparatorColor('#transparent');

chatList.footerView = chatFooter
chatList.setSections(chatSections);
upperView.add(chatList);
*/
var textBar = Ti.UI.createView({
	backgroundColor: '#fff',
	height: 43,
	bottom: 0
});

upperView.add(textBar);

var sendButton = Ti.UI.createButton({
	title: 'Send',
	width: 67.5,
	right: 0,
	backgroundColor: '#e9e9e9'
});

var inputText = Ti.UI.createTextField({
	width: 237,
	left: 16.5,
	height: '100%'
});

textBar.add(sendButton);
textBar.add(inputText);

var separator = Ti.UI.createView({
	backgroundColor: '#e8e8e8',
	height: 49,
	top: 246
});

//settings btn
var settingsBtn = Ti.UI.createButton({
	width: 90,
	height: 49,
	top: 0,
	left: 0
});

var settingsBtnIcon = Ti.UI.createImageView({
	image: 'gear_inactive.png',
	width: 25,
	height: 25,
	left: 32.5,
	top: 12,
	touchEnabled: false
});

//suggest btn
var suggestBtn = Ti.UI.createButton({
	width: 90,
	height: 49,
	top: 0,
	left: 90
});

var suggestBtnIcon = Ti.UI.createImageView({
	image: 'chat_active.png',
	width: 25,
	height: 25,
	left: 122.5,
	top: 12,
	touchEnabled: false
});

//contrib btn
var contributorBtn = Ti.UI.createButton({
	width: 90,
	height: 49,
	top: 0,
	left: 180
});

var contributorBtnIcon = Ti.UI.createImageView({
	image: 'user_inactive.png',
	width: 25,
	height: 25,
	left: 212.5,
	top: 12,
	touchEnabled: false
});

//slider btn
var sliderButton = Ti.UI.createButton({
	backgroundColor: '#bdbdbd',
	width: 50,
	height: 49,
	right: 0
});

var upDownBtn = Ti.UI.createImageView({
	image: 'up_down.png',
	width: 15,
	height: 25,
	right: 17.5,
	top: 12,
	touchEnabled: false
});

var bottomView = Ti.UI.createView({
	backgroundColor: '#787878',
	height: 209,
	bottom: 0
});

var settingsView = Ti.UI.createView({
	shown: false
});

var settingsSections = [];

var settingsFooter = Ti.UI.createView({
    height : 1,
    backgroundColor: 'transparent'
	});

var settingsTemplateSwitch = {
    properties: {
    	height: '60',
    	selectedBackgroundColor: '#fff',
    	backgroundColor: '#fff',
    	selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE
    },
    childTemplates: [
        {                          
            type: 'Ti.UI.Label',     
            bindId: 'info',          
            properties: {            
                color: '#606366',
                font: { fontFamily:'HelveticaNeue', fontSize: '16'},
                left: '24', top: 12.5,
            }
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'es_info',       
            properties: {            
                color: '#898e91',
                font: { fontFamily:'HelveticaNeue-Light', fontSize: '11' },
                left: '24', top: '32',
            }
        }//,
        //{                            
            //type: 'Ti.UI.Switch',     
            //bindId: 'switch',       
            //properties: {            
                //value:true,
                //right: '18', 
                //top: '16',
            //}
        //}
    ]
};

var settingsTemplateNumber = {
	properties: {
		height: '60',
		selectedBackgroundColor: '#fff',
		backgroundColor: '#fff',
		selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE
	},
    childTemplates: [
        {                          
            type: 'Ti.UI.Label',     
            bindId: 'info',          
            properties: {            
                color: '#606366',
                font: { fontFamily:'HelveticaNeue', fontSize: '16'},
                left: '24', 
                top: 12.5
            }
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'es_info',       
            properties: {            
                color: '#898e91',
                font: { fontFamily:'HelveticaNeue-Light', fontSize: '11' },
                left: '24', 
                top: '32'
            }
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'msg_num',       
            properties: {            
                color: '#4bc1d2',
                font: { fontFamily:'HelveticaNeue', fontSize: '25' },
                left: '24', 
                top: '32'
            }
        }
    ]
};

var settingsPageList = Ti.UI.createListView({
	templates: { 'templateSwitch': settingsTemplateSwitch, 'templateNumber': settingsTemplateNumber },
    defaultItemTemplate: 'templateSwitch',
	backgroundColor: '#787878',
	//touchEnabled: false
});

var settingsSectionSwitch = Ti.UI.createListSection({});
var settingsSwitchItems = [
    { info: {text: 'Current State: Private'}, es_info: {text: 'Only invited contributors can see msg chain'}}
];
settingsSectionSwitch.setItems(settingsSwitchItems);
settingsSections.push(settingsSectionSwitch);

var settingsSectionNumber = Ti.UI.createListSection();
var settingsNumberItems = [
    { info: {text: 'Message History'}, es_info: {text: 'Number of past msgs contributors can see'}}
];
settingsSectionNumber.setItems(settingsNumberItems);
settingsSections.push(settingsSectionNumber);

settingsPageList.separatorInsets = {left:0,right:0};
settingsPageList.setSeparatorColor('#ececec');2

settingsPageList.footerView = settingsFooter
settingsPageList.setSections(settingsSections);
settingsView.hide();
settingsView.add(settingsPageList);
bottomView.add(settingsView);



var contributorView = Ti.UI.createView({
	shown: false
});

var contributorSections = [];

var contributorFooter = Ti.UI.createView({
    height : 1,
    backgroundColor: 'transparent'
	});

var contributorTemplate = {
    properties: {
    	height: '60',
    	selectedBackgroundColor: '#fff',
    	backgroundColor: '#fff',
    	selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE
    },
    childTemplates: [

    	{                          
    	    type: 'Ti.UI.ImageView',     
    	    bindId: 'user_icon',          
    	    properties: {            
    	        image: 'user_image.png',
    	        height: 41,
    	        width: 41,
    	        left: 14,
    	        top: 9
    	    }
    	},
        {                          
            type: 'Ti.UI.Label',     
            bindId: 'info',          
            properties: {            
                color: '#606366',
                font: { fontFamily:'HelveticaNeue', fontSize: '16'},
                left: '65', top: 12.5,
            }
        },
        {
        	type: 'Ti.UI.ImageView',
        	bindId: 'time_icon',
        	properties: {
        		left: 58,
        		top: 26,
        		height: 25,
        		width: 25,
        		image: 'clock.png'
        	}
        },
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'es_info',       
            properties: {            
                color: '#898e91',
                font: { fontFamily:'HelveticaNeue-Light', fontSize: '11' },
                left: '80', top: '32',
            }
        },
        {
        	type: 'Ti.UI.ImageView',
        	bindId: 'star_1',
        	properties: {
        		right: 99,
        		top: 18,
        		height: 16,
        		width: 16
        	}
        },
        {
        	type: 'Ti.UI.ImageView',
        	bindId: 'star_2',
        	properties: {
        		right: 81,
        		top: 18,
        		height: 16,
        		width: 16
        	}
        },
        {
        	type: 'Ti.UI.ImageView',
        	bindId: 'star_3',
        	properties: {
        		right: 63,
        		top: 18,
        		height: 16,
        		width: 16
        	}
        },
        {
        	type: 'Ti.UI.ImageView',
        	bindId: 'star_4',
        	properties: {
        		right: 45,
        		top: 18,
        		height: 16,
        		width: 16
        	}
        },
        {
        	type: 'Ti.UI.ImageView',
        	bindId: 'add_icon',
        	properties: {
        		right: 10,
        		top: 17,
        		height: 25,
        		width: 25,
        		image: 'plus.png'
        	}
        }
    ]
};

var contributorPageList = Ti.UI.createListView({
	templates: { 'template': contributorTemplate},
    defaultItemTemplate: 'template',
	backgroundColor: '#787878',
	//touchEnabled: false
});

var contributorSection = Ti.UI.createListSection({});
var contributorItems = [
    { 	info: {text: 'Steve the Player'}, es_info: {text: 'Last Active: 2 days ago'}, star_1: {image: 'star_full.png'}, star_2: {image: 'star_full.png'}, star_3: {image: 'star_full.png'}, star_4: {image: 'star_empty.png'}},
  	{	info: {text: 'Romantic Randy'}, es_info: {text: 'Last Active: 1 day ago'}, star_1: {image: 'star_full.png'}, star_2: {image: 'star_full.png'}, star_3: {image: 'star_half.png'}, star_4: {image: 'star_empty.png'}},
	{	info: {text: 'Jim'}, es_info: {text: 'Last Active: 3 hours ago'}, star_1: {image: 'star_full.png'}, star_2: {image: 'star_half.png'}, star_3: {image: 'star_empty.png'}, star_4: {image: 'star_empty.png'}},
	{	info: {text: 'Steve Jenkins'}, es_info: {text: 'Last Active: 1 week ago'}, star_1: {image: 'star_full.png'}, star_2: {image: 'star_full.png'}, star_3: {image: 'star_full.png'}, star_4: {image: 'star_full.png'}},
	{	info: {text: 'Bill Brasky'}, es_info: {text: 'Last Active: 1 minute ago'}, star_1: {image: 'star_full.png'}, star_2: {image: 'star_empty.png'}, star_3: {image: 'star_empty.png'}, star_4: {image: 'star_empty.png'}},
	{	info: {text: 'Lonely Dude'}, es_info: {text: 'Last Active: 2 minutes ago'}, star_1: {image: 'star_half.png'}, star_2: {image: 'star_empty.png'}, star_3: {image: 'star_empty.png'}, star_4: {image: 'star_empty.png'}},
];
contributorSection.setItems(contributorItems);
contributorSections.push(contributorSection);

contributorPageList.separatorInsets = {left:0,right:0};
contributorPageList.setSeparatorColor('#ececec');2

contributorPageList.footerView = contributorFooter
contributorPageList.setSections(contributorSections);
contributorView.hide();
contributorView.add(contributorPageList);
bottomView.add(contributorView);

var suggestView = Ti.UI.createView({
	shown: true
});

var suggestSections = [];

var suggestFooter = Ti.UI.createView({
    height : 1,
    backgroundColor: 'transparent'
	});

var suggestTemplate = {
    properties: {
    	height: '60',
    	selectedBackgroundColor: '#fff',
    	backgroundColor: '#fff',
    	selectionStyle: Titanium.UI.iPhone.ListViewCellSelectionStyle.NONE
    },
    childTemplates: [
    	{                          
    	    type: 'Ti.UI.Label',     
    	    bindId: 'info',          
    	    properties: {            
    	        color: '#606366',
    	        font: { fontFamily:'HelveticaNeue', fontSize: '16'},
    	        left: '24', 
    	        top: 12.5,
    	        width: 200
    	    }
    	},
    	{                            
    	    type: 'Ti.UI.Label',     
    	    bindId: 'es_info',       
    	    properties: {            
    	        color: '#898e91',
    	        font: { fontFamily:'HelveticaNeue-Light', fontSize: '11' },
    	        left: '24', 
    	        top: '32'
    	    }
    	},
    	{
        	type: 'Ti.UI.ImageView',
        	bindId: 'delete_icon',
        	properties: {
        		right: 55,
        		top: 18,
        		height: 25,
        		width: 25,
        		image: 'delete.png'
        	},
        	events: {
        	  click: function(e) {
        	    downVote();
        		}
        	}
        },
        {
        	type: 'Ti.UI.ImageView',
        	bindId: 'use_icon',
        	properties: {
        		right: 15,
        		top: 18,
        		height: 25,
        		width: 25,
        		image: 'use.png'
        	},
        	events: {
        	  click: function(e) {
        	  	var item = e.section.getItemAt(e.itemIndex);
        	  	textFill(item.info.text);
        		}
        	}
        }
    ]
};

var suggestPageList = Ti.UI.createListView({
	templates: { 'template': suggestTemplate},
    defaultItemTemplate: 'template',
	backgroundColor: '#787878',
	//touchEnabled: false
});

var suggestSection = Ti.UI.createListSection({});
var suggestItems = [
    { 	info: {text: 'Let\'s go out later.'}, es_info: {text: 'Steve the Player'}},
  	{	info: {text: 'Do you want to meet up?'}, es_info: {text: 'Jim'}},
	{	info: {text: 'I like your eyes'}, es_info: {text: 'Romantic Randy'}},
	{	info: {text: 'I want to grab some coffee'}, es_info: {text: 'Roberto'}},
	{	info: {text: 'Love is like a river...'}, es_info: {text: 'Bil Brasky'}},
	{	info: {text: 'I like turtles'}, es_info: {text: 'Lonely Dude'}},
];
suggestSection.setItems(suggestItems);
suggestSections.push(suggestSection);

suggestPageList.separatorInsets = {left:0,right:0};
suggestPageList.setSeparatorColor('#ececec');2

suggestPageList.footerView = suggestFooter
suggestPageList.setSections(suggestSections);
suggestView.show();
suggestView.add(suggestPageList);
bottomView.add(suggestView);

settingsBtn.addEventListener('click',function(){
	if (settingsView.shown == false){
		if (contributorView.shown == true) {
			contributorView.shown = false
			contributorView.hide();
			contributorBtnIcon.image = 'user_inactive.png';
		} else if (suggestView.shown == true){
			suggestView.shown = false
			suggestView.hide();
			suggestBtnIcon.image = 'chat_inactive.png';
		}
		settingsView.show();
		settingsBtnIcon.image = 'gear_active.png';
		settingsView.shown = true
	}
	
});

contributorBtn.addEventListener('click',function(){
	if (contributorView.shown == false){
		if (settingsView.shown == true) {
			settingsView.shown = false
			settingsView.hide();
			settingsBtnIcon.image = 'gear_inactive.png';
		} else if (suggestView.shown == true){
			suggestView.shown = false
			suggestView.hide();
			suggestBtnIcon.image = 'chat_inactive.png';
		}
		contributorView.show();
		contributorBtnIcon.image = 'user_active.png';
		contributorView.shown = true
	}
	
});

suggestBtn.addEventListener('click',function(){
	if (suggestView.shown == false){
		if (settingsView.shown == true) {
			settingsView.shown = false
			settingsView.hide();
			settingsBtnIcon.image = 'gear_inactive.png';
		} else if (contributorView.shown == true){
			contributorView.shown = false
			contributorView.hide();
			contributorBtnIcon.image = 'user_inactive.png';
		}
		suggestView.show();
		suggestBtnIcon.image = 'chat_active.png';
		suggestView.shown = true
	}
	
});

var touchStart = '';
var buttonStart = false;

sliderButton.addEventListener('touchstart', function(e){
	touchStart = e.y;
	buttonStart = true
	Ti.API.info('start ' + touchStart);
});

mainContentWin.addEventListener('touchmove', function(e){
	//Ti.API.info('current ' + e.y);
	var touchDif = touchStart - e.y;
	//Ti.API.info('touchDif ' + touchDif);
	//var oppTouchDif = touchDif *= -1;
	//Ti.API.info('oppTouchDif ' + oppTouchDif);
	if (buttonStart == true){
		moveStuff(touchDif);
	};
});

function moveStuff(touchDif){
	if (touchDif < 100 ){
	var oppTouchDif = touchDif * -1;
	separator.setTop(separator.top + oppTouchDif);
	upperView.setHeight(upperView.height + oppTouchDif);
	Ti.API.info('oppTouchDif ' + oppTouchDif);
	Ti.API.info('touchDif ' + touchDif);
	Ti.API.info('botheight ' + bottomView.height);
	bottomView.setHeight(bottomView.height + touchDif);
	}
};

mainContentWin.addEventListener('touchend', function(){
	buttonStart = false;
});

function textFill(fillText){
	inputText.value = fillText;
};

function downVote (){
	var downvoteAlert = Titanium.UI.createAlertDialog({ title: 'Downvote', message: 'Are you sure you want to remove this suggestion? This will have a negative effect on the contributor.', buttonNames: ['Nevermind', 'Downvote It!'], cancel: 0 });
	downvoteAlert.addEventListener('click', function(e) {
       if (e.cancel === e.index) {
          return;
       }

       switch (e.index) {
          case 0: 
          break;

          case 1: 
          alert('deleted!');
          break;
 
          default:
          break;
	 
	      }
	  });
	downvoteAlert.show();

};

viewBody.add(upperView);
viewBody.add(separator);
separator.add(settingsBtn);
separator.add(settingsBtnIcon);
separator.add(suggestBtn);
separator.add(suggestBtnIcon);
separator.add(contributorBtn);
separator.add(contributorBtnIcon);
separator.add(sliderButton);
separator.add(upDownBtn);
viewBody.add(bottomView);
mainContentWin.add(viewBody);
mainNavWin.open();