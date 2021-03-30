gdjs.Game_95video_95StartCode = {};
gdjs.Game_95video_95StartCode.GDvideo_95travelObjects1= [];
gdjs.Game_95video_95StartCode.GDvideo_95travelObjects2= [];

gdjs.Game_95video_95StartCode.conditionTrue_0 = {val:false};
gdjs.Game_95video_95StartCode.condition0IsTrue_0 = {val:false};
gdjs.Game_95video_95StartCode.condition1IsTrue_0 = {val:false};


gdjs.Game_95video_95StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_95video_95StartCode.condition0IsTrue_0.val = false;
{
gdjs.Game_95video_95StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12, "P0-02_timer");
}if (gdjs.Game_95video_95StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_Start_01", false);
}}

}


};

gdjs.Game_95video_95StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95video_95StartCode.GDvideo_95travelObjects1.length = 0;
gdjs.Game_95video_95StartCode.GDvideo_95travelObjects2.length = 0;

gdjs.Game_95video_95StartCode.eventsList0(runtimeScene);
return;

}

gdjs['Game_95video_95StartCode'] = gdjs.Game_95video_95StartCode;
