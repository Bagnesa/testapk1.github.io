(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Aplikasi Kisah I Gede Mecaling1_atlas_", frames: [[1542,0,447,558],[1028,514,512,512],[1542,560,249,83],[0,1028,1584,138],[0,1168,578,138],[0,514,512,512],[514,514,512,512],[0,0,512,512],[514,0,512,512],[1028,0,512,512]]}
];


// symbols:



(lib.Image = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.animasi = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Asset18 = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.initialize(img.Asset2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2279,765);


(lib.Asset3 = function() {
	this.initialize(img.Asset3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2421,1104);


(lib.CachedTexturedBitmap_51 = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_52 = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.exit = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.help = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.KARAKTER = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.on = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tbprofil = function() {
	this.initialize(ss["Aplikasi Kisah I Gede Mecaling1_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tbprofil_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tbprofil();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150,0.5859,0.5859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6445,scaleY:0.6445,x:-166,y:-165},0).wait(1).to({scaleX:0.5274,scaleY:0.5274,x:-136,y:-137},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-165,330,330);


(lib.tbmulai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset18();
	this.instance.parent = this;
	this.instance.setTransform(-124.5,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0968,scaleY:1.0968,x:-137,y:-46},0).wait(1).to({scaleX:0.9273,scaleY:0.9273,x:-115,y:-38},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-46,273.1,91.1);


(lib.tbkarakter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.KARAKTER();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150,0.5859,0.5859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6445,scaleY:0.6445,x:-165,y:-166},0).wait(1).to({scaleX:0.5273,scaleY:0.5273,x:-135,y:-136},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-166,330,330);


(lib.tbbantuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.help();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40,0.1563,0.1563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1758,scaleY:0.1758,x:-45,y:-45},0).wait(1).to({scaleX:0.1465,scaleY:0.1465,x:-39,y:-39},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-45,90,90);


(lib.tbanimasi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.animasi();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150,0.5859,0.5859);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6445,scaleY:0.6445,x:-167,y:-167},0).wait(1).to({scaleX:0.5273,scaleY:0.5273,x:-135,y:-136},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-167,330,330);


(lib.suara_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.on();
	this.instance.parent = this;
	this.instance.setTransform(-40,-40,0.1563,0.1563);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_tombol_keluar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tombol_keluar
	this.instance = new lib.exit();
	this.instance.parent = this;
	this.instance.setTransform(1767,50,0.1563,0.1563);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.halaman_menu_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset3();
	this.instance.parent = this;
	this.instance.setTransform(-1211,-552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.halaman_menu_Layer_1, null, null);


(lib.halaman_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset2();
	this.instance.parent = this;
	this.instance.setTransform(-1140,-383);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();


(lib.Clip_Group_0_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3981,0.3981);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_0_Layer_3, null, null);


(lib.Clip_Group_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedTexturedBitmap_52();
	this.instance.parent = this;
	this.instance.setTransform(252.2,59.5,0.5,0.5);

	this.instance_1 = new lib.CachedTexturedBitmap_51();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-3.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3, null, null);


(lib.suara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.suara_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,80,80);


(lib.Scene_1_tombol_suara = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tombol_suara
	this.instance = new lib.suara();
	this.instance.parent = this;
	this.instance.setTransform(1706,90);

	this.instance_1 = new lib.on();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1666,50,0.1563,0.1563);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.halaman_menu_profil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// profil
	this.tblprofil = new lib.tbprofil_1();
	this.tblprofil.name = "tblprofil";
	this.tblprofil.parent = this;
	this.tblprofil.setTransform(527,-310);
	new cjs.ButtonHelper(this.tblprofil, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.tblprofil).wait(1));

}).prototype = getMCSymbolPrototype(lib.halaman_menu_profil, null, null);


(lib.halaman_menu_karakter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// karakter
	this.tblkarakter = new lib.tbkarakter();
	this.tblkarakter.name = "tblkarakter";
	this.tblkarakter.parent = this;
	this.tblkarakter.setTransform(0,-310);
	new cjs.ButtonHelper(this.tblkarakter, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.tblkarakter).wait(1));

}).prototype = getMCSymbolPrototype(lib.halaman_menu_karakter, null, null);


(lib.halaman_menu_bantuan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bantuan
	this.tblbantuan = new lib.tbbantuan();
	this.tblbantuan.name = "tblbantuan";
	this.tblbantuan.parent = this;
	this.tblbantuan.setTransform(637,-606);
	new cjs.ButtonHelper(this.tblbantuan, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.tblbantuan).wait(1));

}).prototype = getMCSymbolPrototype(lib.halaman_menu_bantuan, null, null);


(lib.halaman_menu_animasi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animasi
	this.tblanimasi = new lib.tbanimasi();
	this.tblanimasi.name = "tblanimasi";
	this.tblanimasi.parent = this;
	this.tblanimasi.setTransform(-535,-310);
	new cjs.ButtonHelper(this.tblanimasi, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.tblanimasi).wait(1));

}).prototype = getMCSymbolPrototype(lib.halaman_menu_animasi, null, null);


(lib.halaman_1_tbmulai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tbmulai
	this.tblmulai = new lib.tbmulai();
	this.tblmulai.name = "tblmulai";
	this.tblmulai.parent = this;
	this.tblmulai.setTransform(-0.5,254.65);
	this.tblmulai.alpha = 0.1484;
	new cjs.ButtonHelper(this.tblmulai, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.tblmulai).to({y:141.5,alpha:1},9,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At5RXMAAAgitIbzAAMAAAAitg");
	mask.setTransform(88.95,111.05);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_0_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(89,111,1,1,0,0,0,89,111);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,177.9,222.1), null);


(lib.Clip_Group_Layer_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance_2 = new lib.ClipGroup_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(89,111,1,1,0,0,0,89,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clip_Group_Layer_3_1, null, null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg95AJ5IAAzxMB7zAAAIAATxg");
	mask.setTransform(396.225,63.3);

	// Layer_3_obj_
	this.Layer_3 = new lib.Clip_Group_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(394,62.6,1,1,0,0,0,394,62.6);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,790,126.6), null);


(lib.halamanmenu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tblbantuan = this.bantuan.tblbantuan;
		this.tblprofil = this.profil.tblprofil;
		this.tblkarakter = this.karakter.tblkarakter;
		this.tblanimasi = this.animasi.tblanimasi;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bantuan_obj_
	this.bantuan = new lib.halaman_menu_bantuan();
	this.bantuan.name = "bantuan";
	this.bantuan.parent = this;
	this.bantuan.setTransform(637,-606,1,1,0,0,0,637,-606);
	this.bantuan.depth = 0;
	this.bantuan.isAttachedToCamera = 0
	this.bantuan.isAttachedToMask = 0
	this.bantuan.layerDepth = 0
	this.bantuan.layerIndex = 0
	this.bantuan.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bantuan).wait(1));

	// profil_obj_
	this.profil = new lib.halaman_menu_profil();
	this.profil.name = "profil";
	this.profil.parent = this;
	this.profil.setTransform(526,-310,1,1,0,0,0,526,-310);
	this.profil.depth = 0;
	this.profil.isAttachedToCamera = 0
	this.profil.isAttachedToMask = 0
	this.profil.layerDepth = 0
	this.profil.layerIndex = 1
	this.profil.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.profil).wait(1));

	// karakter_obj_
	this.karakter = new lib.halaman_menu_karakter();
	this.karakter.name = "karakter";
	this.karakter.parent = this;
	this.karakter.setTransform(0,-311,1,1,0,0,0,0,-311);
	this.karakter.depth = 0;
	this.karakter.isAttachedToCamera = 0
	this.karakter.isAttachedToMask = 0
	this.karakter.layerDepth = 0
	this.karakter.layerIndex = 2
	this.karakter.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.karakter).wait(1));

	// animasi_obj_
	this.animasi = new lib.halaman_menu_animasi();
	this.animasi.name = "animasi";
	this.animasi.parent = this;
	this.animasi.setTransform(-537,-312,1,1,0,0,0,-537,-312);
	this.animasi.depth = 0;
	this.animasi.isAttachedToCamera = 0
	this.animasi.isAttachedToMask = 0
	this.animasi.layerDepth = 0
	this.animasi.layerIndex = 3
	this.animasi.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.animasi).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.halaman_menu_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-0.5,0,1,1,0,0,0,-0.5,0);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 4
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.halamanmenu, new cjs.Rectangle(-1211,-651,2421,1203), null);


(lib.halaman_1_judul = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// judul
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.1,134.8,1,1,0,0,0,395.2,62.6);
	this.instance.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:21.65,alpha:1},9,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("At5RXMAAAgitIbzAAMAAAAitg");
	mask_1.setTransform(88.95,111.05);

	// Layer_3_obj_
	this.Layer_3_1 = new lib.Clip_Group_Layer_3_1();
	this.Layer_3_1.name = "Layer_3_1";
	this.Layer_3_1.parent = this;
	this.Layer_3_1.setTransform(89,111,1,1,0,0,0,89,111);
	this.Layer_3_1.depth = 0;
	this.Layer_3_1.isAttachedToCamera = 0
	this.Layer_3_1.isAttachedToMask = 0
	this.Layer_3_1.layerDepth = 0
	this.Layer_3_1.layerIndex = 0
	this.Layer_3_1.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_3_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_3_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,177.9,222.1), null);


(lib.halaman_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(0.05,-49.4,1,1,0,0,0,89,111);
	this.instance.alpha = 0.1484;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-162.55,alpha:1},9,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.halaman1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tblmulai = this.tbmulai.tblmulai;
	}
	this.frame_9 = function() {
		this.tblmulai = undefined;this.tblmulai = this.tbmulai.tblmulai;
		this.___loopingOver___ = true;
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Stop
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and stops the movie.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		
		this.tblmulai.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			exportRoot.gotoAndStop("LB_Menu");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// tbmulai_obj_
	this.tbmulai = new lib.halaman_1_tbmulai();
	this.tbmulai.name = "tbmulai";
	this.tbmulai.parent = this;
	this.tbmulai.setTransform(-1,254.2,1,1,0,0,0,-1,254.2);
	this.tbmulai.depth = 0;
	this.tbmulai.isAttachedToCamera = 0
	this.tbmulai.isAttachedToMask = 0
	this.tbmulai.layerDepth = 0
	this.tbmulai.layerIndex = 0
	this.tbmulai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tbmulai).wait(10));

	// judul_obj_
	this.judul = new lib.halaman_1_judul();
	this.judul.name = "judul";
	this.judul.parent = this;
	this.judul.setTransform(0.1,134.8,1,1,0,0,0,0.1,134.8);
	this.judul.depth = 0;
	this.judul.isAttachedToCamera = 0
	this.judul.isAttachedToMask = 0
	this.judul.layerDepth = 0
	this.judul.layerIndex = 1
	this.judul.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.judul).wait(10));

	// logo_obj_
	this.logo = new lib.halaman_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(0,-49.4,1,1,0,0,0,0,-49.4);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 2
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(10));

	// Layer_1_obj_
	this.Layer_1 = new lib.halaman_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-0.5,-0.5,1,1,0,0,0,-0.5,-0.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 3
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1140,-383,2279,765);


(lib.Scene_1_halaman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// halaman
	this.instance = new lib.halaman1();
	this.instance.parent = this;
	this.instance.setTransform(960,457.25,1,1,0,0,0,-0.5,-0.5);

	this.instance_1 = new lib.halamanmenu();
	this.instance_1.parent = this;
	this.instance_1.setTransform(960,696.05,1,1,0,0,0,-0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[]},10).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.AplikasiKisahIGedeMecaling1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{LB_Menu:10});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_19 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_20 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1).call(this.frame_20).wait(1));

	// tombol_keluar_obj_
	this.tombol_keluar = new lib.Scene_1_tombol_keluar();
	this.tombol_keluar.name = "tombol_keluar";
	this.tombol_keluar.parent = this;
	this.tombol_keluar.depth = 0;
	this.tombol_keluar.isAttachedToCamera = 0
	this.tombol_keluar.isAttachedToMask = 0
	this.tombol_keluar.layerDepth = 0
	this.tombol_keluar.layerIndex = 0
	this.tombol_keluar.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tombol_keluar).wait(21));

	// tombol_suara_obj_
	this.tombol_suara = new lib.Scene_1_tombol_suara();
	this.tombol_suara.name = "tombol_suara";
	this.tombol_suara.parent = this;
	this.tombol_suara.depth = 0;
	this.tombol_suara.isAttachedToCamera = 0
	this.tombol_suara.isAttachedToMask = 0
	this.tombol_suara.layerDepth = 0
	this.tombol_suara.layerIndex = 1
	this.tombol_suara.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tombol_suara).wait(21));

	// halaman_obj_
	this.halaman = new lib.Scene_1_halaman();
	this.halaman.name = "halaman";
	this.halaman.parent = this;
	this.halaman.setTransform(960,457.2,1,1,0,0,0,960,457.2);
	this.halaman.depth = 0;
	this.halaman.isAttachedToCamera = 0
	this.halaman.isAttachedToMask = 0
	this.halaman.layerDepth = 0
	this.halaman.layerIndex = 2
	this.halaman.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.halaman).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(709.5,450,1461,798.0999999999999);
// library properties:
lib.properties = {
	id: '9502B40E80A4EE4EB584B2302ADC8A30',
	width: 1920,
	height: 800,
	fps: 24,
	color: "#E2E4F7",
	opacity: 1.00,
	manifest: [
		{src:"images/Asset2.png", id:"Asset2"},
		{src:"images/Asset3.png", id:"Asset3"},
		{src:"images/Aplikasi Kisah I Gede Mecaling1_atlas_.png", id:"Aplikasi Kisah I Gede Mecaling1_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9502B40E80A4EE4EB584B2302ADC8A30'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;