gdjs.Video_95travel2Code = {};
gdjs.Video_95travel2Code.GDvideo_95travelObjects1= [];
gdjs.Video_95travel2Code.GDvideo_95travelObjects2= [];

gdjs.Video_95travel2Code.conditionTrue_0 = {val:false};
gdjs.Video_95travel2Code.condition0IsTrue_0 = {val:false};
gdjs.Video_95travel2Code.condition1IsTrue_0 = {val:false};


gdjs.Video_95travel2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("video_travel"), gdjs.Video_95travel2Code.GDvideo_95travelObjects1);

gdjs.Video_95travel2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Video_95travel2Code.GDvideo_95travelObjects1.length;i<l;++i) {
    if ( gdjs.Video_95travel2Code.GDvideo_95travelObjects1[i].isEnded() ) {
        gdjs.Video_95travel2Code.condition0IsTrue_0.val = true;
        gdjs.Video_95travel2Code.GDvideo_95travelObjects1[k] = gdjs.Video_95travel2Code.GDvideo_95travelObjects1[i];
        ++k;
    }
}
gdjs.Video_95travel2Code.GDvideo_95travelObjects1.length = k;}if (gdjs.Video_95travel2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "P2_scene", true);
}}

}


};

gdjs.Video_95travel2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Video_95travel2Code.GDvideo_95travelObjects1.length = 0;
gdjs.Video_95travel2Code.GDvideo_95travelObjects2.length = 0;

gdjs.Video_95travel2Code.eventsList0(runtimeScene);
return;

}

gdjs['Video_95travel2Code'] = gdjs.Video_95travel2Code;
