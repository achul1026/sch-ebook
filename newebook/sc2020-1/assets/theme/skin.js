
/** 스킨 옵션 정보
**/
var eBookSkin = {};
eBookSkin.options = {
	slideShowTimer	: 2,
	pageZoomMin			: 30,
	pageZoomMax			: 200,
	pageZoomDefault	: 30,
	loadingDelay		: 0,
};

eBookSkin.path = {
	image			: "images/",
	slideshow	: "images/slideshow/",
	sound			: "sounds/",
};

/** HTML 객체 생성 정보
**/
eBookSkin.objects = [

	{ type:"window"		, id:"background"	},

	{ type:"window"		, id:"top_window"				, 'class':"mainobjects", visible:"pc", children:[
		{ type:"home" 		, id:"top_home_btn"			, 'class':"topobjects togglewnd", src:"home.svg"			, title:"홈"	},
		{ type:"image"		, id:"top_search_btn"		, 'class':"topobjects togglewnd", src:"search.svg"		, title:"검색"			, click:"eFnc.wndToggle('#searchlist_window')"		},			
		{ type:"image"		, id:"top_menu_btn"		, 'class':"topobjects", src:"menu.svg"		, title:"메뉴"			, click:"eFnc.wndToggle('.togglewnd')"		},
		{ type:"image" 		, id:"top_fullscreen_btn"	, 'class':"topobjects"	, src:"fullscreen.svg"	, title:"전체화면",click:"eFnc.fullscreenToggle()&eFnc.wndHide('.togglewnd')"},
		{ type:"window"		, id:"menu_window"			, 'class':"mainobjects togglewnd"		, children:[
			{ type:"window"		, id:"arrow_up"			, 'class':"mainobjects" },
			{ type:"window"		, id:"menu_contents"			, 'class':"mainobjects"	, children:[
				{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"menuobjects", src:"menu/contents.svg"	, title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')&eFnc.wndHide('.togglewnd')"			},
				{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"menuobjects", src:"menu/bookmark.svg"	, title:"북마크"		, click:"eFnc.wndToggle('#bookmarklist_window')&eFnc.wndHide('.togglewnd')"	},
				{ type:"image"		, id:"menu_slide_btn"			, 'class':"menuobjects", src:"menu/slide.svg"			, title:"자동넘김"	, click:"eFnc.runSlideShow()&eFnc.wndHide('.togglewnd')" },
				{ type:"image"		, id:"menu_print_btn"			, 'class':"menuobjects", src:"menu/print.svg"			, title:"프린트"			, click:"eFnc.runPrint()", visible:"pc"	},
				{ type:"image"		, id:"menu_thumb_btn"			, 'class':"menuobjects", src:"menu/thumbnail.svg"	, title:"썸네일"	, click:"eFnc.wndToggle('#thumbnail_window')&eFnc.wndHide('.togglewnd')"	},
			]},
		]},
	]},
	
	{ type:"window"		, id:"top_window_m"	, 'class':"mainobjects", visible:"mobile", children:[
		{ type:"image"		, id:"top_search_btn_m"	, 'class':"topobjects_m", src:"search.svg"		, title:"검색"			, click:"eFnc.wndToggle('#searchlist_window')"		},			
		{ type:"logo"		, id:"top_logo_m"	, src:"logo.png"	, title:"로고"	},
		{ type:"image"		, id:"top_menu_btn_m"		, 'class':"topobjects_m", src:"menu.svg"		, title:"메뉴"			, click:"eFnc.wndToggle('.togglewnd')"		},
		
		{ type:"window"		, id:"menu_window_m"			, 'class':"mainobjects togglewnd"		, children:[
			{ type:"window"		, id:"arrow_up_m"			, 'class':"mainobjects" },
			{ type:"window"		, id:"menu_contents_m"			, 'class':"mainobjects"	, children:[
				{ type:"image"		, id:"menu_tablelist_btn"	, 'class':"menuobjects", src:"menu/contents.svg"	, title:"목차"			, click:"eFnc.wndToggle('#tablelist_window')&eFnc.wndHide('.togglewnd')"		},
				{ type:"image"		, id:"menu_bookmark_btn"	, 'class':"menuobjects", src:"menu/bookmark.svg"	, title:"북마크"		, click:"eFnc.wndToggle('#bookmarklist_window')&eFnc.wndHide('.togglewnd')"	},
				{ type:"image"		, id:"menu_slide_btn"			, 'class':"menuobjects", src:"menu/slide.svg"			, title:"자동넘김"	, click:"eFnc.runSlideShow()&eFnc.wndHide('.togglewnd')" },
				{ type:"image"		, id:"menu_thumb_btn"			, 'class':"menuobjects", src:"menu/thumbnail.svg"	, title:"썸네일"	, click:"eFnc.wndToggle('#thumbnail_window')&eFnc.wndHide('.togglewnd')"	},
			]},
		]},
	]},
	
	{ type:"image"		, id:"page_prev_btn"		, 'class':"mainobjects"		, src:"big_prev.svg", visible:"pc", title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},
	{ type:"image"		, id:"page_next_btn"		, 'class':"mainobjects"		, src:"big_next.svg", visible:"pc", title:"다음 페이지"	, click:"eFnc.gotoNext()"		},

	{ type:"pageview"	, id:"pageview", visible:"pc"	},
	{ type:"pageview"	, id:"pageview_m", visible:"mobile"	},
	
	// bottom for PC
	{ type:"window"		, id:"bottom_window"			, 'class':"mainobjects text_right togglewnd"	, visible:"pc", children:[
		{ type:"window"		, id:"sns_window"		, 'class':"mainobjects"	, children:[
			{ type:"image" 		, id:"sns_twitter"		, 'class':"snsobjects", src:"sns/twitter-W.svg"			, title:"트위터"			, click:"eFnc.sendSNS('twitter')"},
			{ type:"image" 		, id:"sns_facebook"		, 'class':"snsobjects", src:"sns/facebook-W.svg"		, title:"페이스북"		, click:"eFnc.sendSNS('facebook')"},
		]},
		
		{ type:"window"		, id:"quick_window"		, 'class':"mainobjects"	, children:[
			{ type:"image"		, id:"quick_first_btn"	, 'class':"quickobjects"		, src:"quick/first.svg"		, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
			{ type:"image"		, id:"quick_prev_btn"		, 'class':"quickobjects"		, src:"quick/prev.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},

			{ type:"text"			, id:"quick_pagenum_text"		, 'class':"quicktexts"	, text:"Page:"	, tabindex:-1		},
			{ type:"pagenum"	, id:"quick_pagenum_area"		},
			{ type:"text"			, id:"quick_pagenum_slash"	, 'class':"quicktexts"	, text:"/"	, tabindex:-1		},
			{ type:"pagetotal", id:"quick_pagetotal_area"	},

			{ type:"image"		, id:"quick_next_btn"		, 'class':"quickobjects"		, src:"quick/next.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
			{ type:"image"		, id:"quick_last_btn"		, 'class':"quickobjects"		, src:"quick/last.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
		]},
	]},
	
	// Bottom for Mobile
	{ type:"window"		, id:"bottom_window_m"			, 'class':"mainobjects"	, visible:"mobile"	, children:[
		{ type:"image"		, id:"quick_first_btn_m"	, 'class':"quickobjects_m", src:"quick_m/first.svg"	, title:"첫 페이지"		, click:"eFnc.gotoPage(1)"	},
		{ type:"image"		, id:"quick_prev_btn_m"		, 'class':"quickobjects_m", src:"quick_m/prev.svg"		, title:"이전 페이지"	, click:"eFnc.gotoPrev()"		},
		{ type:"text"			, id:"quick_pagenum_text_m"		, 'class':"quicktexts_m"	, text:"Page:"	, tabindex:-1		},
		{ type:"pagenum"	, id:"quick_pagenum_area_m"		},
		{ type:"text"			, id:"quick_pagenum_slash_m"	, 'class':"quicktexts_m"	, text:"/"	, tabindex:-1		},
		{ type:"pagetotal", id:"quick_pagetotal_area_m"	},
		{ type:"image"		, id:"quick_next_btn_m"		, 'class':"quickobjects_m", src:"quick_m/next.svg"		, title:"다음 페이지"	, click:"eFnc.gotoNext()"		},
		{ type:"image"		, id:"quick_last_btn_m"		, 'class':"quickobjects_m", src:"quick_m/last.svg"		, title:"끝 페이지"		, click:"eFnc.gotoPage(-1)"	},
	]},
	
	{ type:"image", id:"quick_menu_switch", 'class':"mainobjects", src:"link_menu.svg", title:"링크메뉴", visible:"mobile", click:"eFnc.wndToggle('#links_window_m')"},
	
	// Links Window for Mobile
	{ type:"window"		, id:"links_window_m", 'class':"mainobjects", visible:"mobile"	, children:[
		{ type:"booklist"	, id:"booklist_m"	, 'class':"mainobjects"	},
		{ type:"home" 		, id:"sns_home"				, 'class':"snsobjects_m", src:"sns/home.svg"				, title:"홈"	},
		{ type:"image" 		, id:"sns_kakaotalk"	, 'class':"snsobjects_m", src:"sns/kakaotalk.svg"		, title:"카카오톡"		, click:"eFnc.sendSNS('kakaotalk')"},
		{ type:"image" 		, id:"sns_twitter"		, 'class':"snsobjects_m", src:"sns/twitter.svg"			, title:"트위터"			, click:"eFnc.sendSNS('twitter')"},
		{ type:"image" 		, id:"sns_facebook"		, 'class':"snsobjects_m", src:"sns/facebook.svg"		, title:"페이스북"		, click:"eFnc.sendSNS('facebook')"},
	]},

	{ type:"tablelist"		, id:"tablelist_window"			,	draggable:true, resizable:true	},	// 목차창
	{ type:"bookmarklist"	, id:"bookmarklist_window"	,	draggable:true, resizable:true	},	// 책갈피창
	{ type:"searchlist"		, id:"searchlist_window"		,	draggable:true, resizable:true	},	// 검색창
	{ type:"thumblist"		, id:"thumbnail_window"	}, // 섬네일창
	
];

/** 로딩화면 생성
**/
eFnc.showLoading();
