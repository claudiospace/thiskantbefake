gdjs.Game_95Start_9501Code = {};
gdjs.Game_95Start_9501Code.GDtext_95displayObjects1= [];
gdjs.Game_95Start_9501Code.GDtext_95displayObjects2= [];
gdjs.Game_95Start_9501Code.GDtext_95displayObjects3= [];
gdjs.Game_95Start_9501Code.GDtext_95displayObjects4= [];

gdjs.Game_95Start_9501Code.conditionTrue_0 = {val:false};
gdjs.Game_95Start_9501Code.condition0IsTrue_0 = {val:false};
gdjs.Game_95Start_9501Code.condition1IsTrue_0 = {val:false};
gdjs.Game_95Start_9501Code.condition2IsTrue_0 = {val:false};
gdjs.Game_95Start_9501Code.conditionTrue_1 = {val:false};
gdjs.Game_95Start_9501Code.condition0IsTrue_1 = {val:false};
gdjs.Game_95Start_9501Code.condition1IsTrue_1 = {val:false};
gdjs.Game_95Start_9501Code.condition2IsTrue_1 = {val:false};


gdjs.Game_95Start_9501Code.eventsList0 = function(runtimeScene) {

{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("id")) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("text").getChild("string").getChild("count")) + 1;
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("id").setNumber(1);
}}

}


};gdjs.Game_95Start_9501Code.eventsList1 = function(runtimeScene) {

{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("string").getChild("finished")) == 1;
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("automation").getChild("string").getChild("finished").setNumber(0);
}{runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("id").add(1);
}
{ //Subevents
gdjs.Game_95Start_9501Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("text").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("text").getChild("string").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("id")))));
}{runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("lenght").setNumber(gdjs.evtTools.string.strLen(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("text"))));
}}

}


{


{
{runtimeScene.getVariables().get("automation").getChild("current").getChild("character").getChild("id").add(1);
}}

}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("current").getChild("character").getChild("id")) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("lenght"));
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("automation").getChild("current").getChild("character").getChild("id").setNumber(0);
}{runtimeScene.getVariables().get("automation").getChild("string").getChild("finished").setNumber(1);
}{runtimeScene.getVariables().get("input").getChild("waiting").setNumber(1);
}}

}


{


{
{runtimeScene.getVariables().get("automation").getChild("current").getChild("portion").setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("automation").getChild("current").getChild("string").getChild("text")), 0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("current").getChild("character").getChild("id")) - 1));
}{gdjs.evtTools.sound.playSound(runtimeScene, "blip.wav", false, 15, 0.75);
}}

}


};gdjs.Game_95Start_9501Code.eventsList2 = function(runtimeScene) {

{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("prompt").getChild("state")) == 0;
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("automation").getChild("process_check").setNumber(1);
}{runtimeScene.getVariables().get("automation").getChild("prompt").getChild("state").setNumber(1);
}}

}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
gdjs.Game_95Start_9501Code.condition1IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("process_check")) == 0;
}if ( gdjs.Game_95Start_9501Code.condition0IsTrue_0.val ) {
{
gdjs.Game_95Start_9501Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("prompt").getChild("state")) == 1;
}}
if (gdjs.Game_95Start_9501Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("automation").getChild("prompt").getChild("state").setNumber(0);
}}

}


};gdjs.Game_95Start_9501Code.eventsList3 = function(runtimeScene) {

{



}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("text").getChild("string").getChild("1").setString(gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Planet Earth" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Year 2755" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "22°53'52.''S 43°10'36.6''W" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "South Western Confederation (Former Brasil)" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "New Rio" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Press any key to continue...");
}{runtimeScene.getVariables().get("text").getChild("string").getChild("count").setNumber(3);
}{runtimeScene.getVariables().get("text").getChild("typing_speed").setNumber(0.08);
}{runtimeScene.getVariables().get("text").getChild("prompt").getChild("blinking_delay").setNumber(0.4);
}{runtimeScene.getVariables().get("text").getChild("prompt").getChild("character").setString("_");
}{runtimeScene.getVariables().get("automation").getChild("string").getChild("finished").setNumber(1);
}{runtimeScene.getVariables().get("input").getChild("waiting").setNumber(0);
}}

}


{



}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
gdjs.Game_95Start_9501Code.condition1IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("input").getChild("waiting")) == 1;
}if ( gdjs.Game_95Start_9501Code.condition0IsTrue_0.val ) {
{
{gdjs.Game_95Start_9501Code.conditionTrue_1 = gdjs.Game_95Start_9501Code.condition1IsTrue_0;
gdjs.Game_95Start_9501Code.condition0IsTrue_1.val = false;
gdjs.Game_95Start_9501Code.condition1IsTrue_1.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.Game_95Start_9501Code.condition0IsTrue_1.val ) {
    gdjs.Game_95Start_9501Code.conditionTrue_1.val = true;
}
}
{
gdjs.Game_95Start_9501Code.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.Game_95Start_9501Code.condition1IsTrue_1.val ) {
    gdjs.Game_95Start_9501Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Game_95Start_9501Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("input").getChild("waiting").setNumber(0);
}{runtimeScene.getVariables().get("change").getChild("scene").add(1);
}}

}


{



}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
gdjs.Game_95Start_9501Code.condition1IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("input").getChild("waiting")) == 0;
}if ( gdjs.Game_95Start_9501Code.condition0IsTrue_0.val ) {
{
gdjs.Game_95Start_9501Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("text").getChild("typing_speed")), "automation.typing_speed");
}}
if (gdjs.Game_95Start_9501Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "automation.typing_speed");
}
{ //Subevents
gdjs.Game_95Start_9501Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
{runtimeScene.getVariables().get("automation").getChild("current").getChild("displayed_text").setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("automation").getChild("current").getChild("portion")));
}}

}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("text").getChild("prompt").getChild("blinking_delay")), "automation.prompt.blinking_delay");
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "automation.prompt.blinking_delay");
}{runtimeScene.getVariables().get("automation").getChild("process_check").setNumber(0);
}
{ //Subevents
gdjs.Game_95Start_9501Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("automation").getChild("prompt").getChild("state")) == 1;
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("automation").getChild("current").getChild("displayed_text").concatenate(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("text").getChild("prompt").getChild("character")));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("text_display"), gdjs.Game_95Start_9501Code.GDtext_95displayObjects1);
{for(var i = 0, len = gdjs.Game_95Start_9501Code.GDtext_95displayObjects1.length ;i < len;++i) {
    gdjs.Game_95Start_9501Code.GDtext_95displayObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("automation").getChild("current").getChild("displayed_text")));
}
}}

}


};gdjs.Game_95Start_9501Code.eventsList4 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.Game_95Start_9501Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = false;
{
gdjs.Game_95Start_9501Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("change").getChild("scene")) > 0;
}if (gdjs.Game_95Start_9501Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game_video_Start_01", false);
}}

}


};

gdjs.Game_95Start_9501Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_95Start_9501Code.GDtext_95displayObjects1.length = 0;
gdjs.Game_95Start_9501Code.GDtext_95displayObjects2.length = 0;
gdjs.Game_95Start_9501Code.GDtext_95displayObjects3.length = 0;
gdjs.Game_95Start_9501Code.GDtext_95displayObjects4.length = 0;

gdjs.Game_95Start_9501Code.eventsList4(runtimeScene);
return;

}

gdjs['Game_95Start_9501Code'] = gdjs.Game_95Start_9501Code;
