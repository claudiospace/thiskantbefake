gdjs.Video_95travelCode = {};
gdjs.Video_95travelCode.GDvideo_95travelObjects1= [];
gdjs.Video_95travelCode.GDvideo_95travelObjects2= [];

gdjs.Video_95travelCode.conditionTrue_0 = {val:false};
gdjs.Video_95travelCode.condition0IsTrue_0 = {val:false};
gdjs.Video_95travelCode.condition1IsTrue_0 = {val:false};


gdjs.Video_95travelCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("video_travel"), gdjs.Video_95travelCode.GDvideo_95travelObjects1);

gdjs.Video_95travelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Video_95travelCode.GDvideo_95travelObjects1.length;i<l;++i) {
    if ( gdjs.Video_95travelCode.GDvideo_95travelObjects1[i].isEnded() ) {
        gdjs.Video_95travelCode.condition0IsTrue_0.val = true;
        gdjs.Video_95travelCode.GDvideo_95travelObjects1[k] = gdjs.Video_95travelCode.GDvideo_95travelObjects1[i];
        ++k;
    }
}
gdjs.Video_95travelCode.GDvideo_95travelObjects1.length = k;}if (gdjs.Video_95travelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P1_scene", true);
}}

}


};

gdjs.Video_95travelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Video_95travelCode.GDvideo_95travelObjects1.length = 0;
gdjs.Video_95travelCode.GDvideo_95travelObjects2.length = 0;

gdjs.Video_95travelCode.eventsList0(runtimeScene);
return;

}

gdjs['Video_95travelCode'] = gdjs.Video_95travelCode;
