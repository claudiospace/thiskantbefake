gdjs.Game_95video_95Start_9501Code = {};
gdjs.Game_95video_95Start_9501Code.GDvideo_95travelObjects1= [];
gdjs.Game_95video_95Start_9501Code.GDvideo_95travelObjects2= [];

gdjs.Game_95video_95Start_9501Code.conditionTrue_0 = {val:false};
gdjs.Game_95video_95Start_9501Code.condition0IsTrue_0 = {val:false};
gdjs.Game_95video_95Start_9501Code.condition1IsTrue_0 = {val:false};


gdjs.Game_95video_95Start_9501Code.eventsList0 = function(runtimeScene) {

{


gdjs.Game_95video_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95video_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 29, "P0-02_timer");
}if (gdjs.Game_95video_95Start_9501Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P0_scene", false);
}}

}


};

gdjs.Game_95video_95Start_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95video_95Start_9501Code.GDvideo_95travelObjects1.length = 0;
gdjs.Game_95video_95Start_9501Code.GDvideo_95travelObjects2.length = 0;

gdjs.Game_95video_95Start_9501Code.eventsList0(runtimeScene);
return;

}

gdjs['Game_95video_95Start_9501Code'] = gdjs.Game_95video_95Start_9501Code;
