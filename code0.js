gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDsendObjects1_1final = [];

gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDtext_95entryObjects1= [];
gdjs.NewSceneCode.GDtext_95entryObjects2= [];
gdjs.NewSceneCode.GDnameObjects1= [];
gdjs.NewSceneCode.GDnameObjects2= [];
gdjs.NewSceneCode.GDdataObjects1= [];
gdjs.NewSceneCode.GDdataObjects2= [];
gdjs.NewSceneCode.GDresetObjects1= [];
gdjs.NewSceneCode.GDresetObjects2= [];
gdjs.NewSceneCode.GDsendObjects1= [];
gdjs.NewSceneCode.GDsendObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_1 = {val:false};
gdjs.NewSceneCode.conditionTrue_2 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_2 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_2 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_2 = {val:false};
gdjs.NewSceneCode.condition3IsTrue_2 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDresetObjects1Objects = Hashtable.newFrom({"reset": gdjs.NewSceneCode.GDresetObjects1});gdjs.NewSceneCode.userFunc0x6dad50 = function(runtimeScene) {
"use strict";

window.loadscript = function (url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    if (url !== String) {
        console.debug("file is not loaded correctly");
    }

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)

};

//Set here path of you lib player.io
///For dev : 
window.PlayerIO = loadscript('/Users/farhan/Downloads/AssetMultiplayer/GDevelop_stuff-master/Proof_of_concept/Player.io/SDK/Javascript/PlayerIOClient.minified.js');
//File is forced in ressources list for keep file when we export game.
//For exported game uncomment line below and comment line for dev  
//window.PlayerIO = loadscript('PlayerIOClient.minified.js');
};
gdjs.NewSceneCode.eventsList0x6cc10c = function(runtimeScene) {

{


gdjs.NewSceneCode.userFunc0x6dad50(runtimeScene);

}


}; //End of gdjs.NewSceneCode.eventsList0x6cc10c
gdjs.NewSceneCode.userFunc0x6da408 = function(runtimeScene) {
"use strict";

//recupere les objets texte
var name = runtimeScene.getObjects("name")[0];
var data = runtimeScene.getObjects("data")[0];

//on la fait global pour y avoir accès partout.
window.senddata = function (name) {
    connection.send('name_receive', name, window.client.connectUserId);
};

//connection a PlayerIO
window.PlayerIO.authenticate(
    'multiplayersimple-f3jl5xdhwucqne79wmdhsw',    //Game id
    'public',                       //Connection id
    { userId: name.getString() },           //On passe en ID la valeur d'un des texte de la scene.
    {},            //Optional PlayerInsight segments
    function (client) {
        //Success connected !
        client.multiplayer.createJoinRoom(
            'my-room-id',           //Room id
            'bounce',               //Room type
            true,                   //Visible
            { mode: 'team' },       //Room data
            { team: 'awesome' },    //Join data
            function (connection) {
                window.client = client;
                window.connection = connection;
                //Success!
                //Setup a message handler to listen to messages of all types:
                connection.addMessageCallback("*", function (message) {

                    if (message.type == "name_receive") {
                        //if (message.getString(1) != client.connectUserId) {
                            data.setString(message.getString(0) + "\n" + data.getString());
                        //}
                    }
                    //When we receive a message, log it to the console:
                    //console.log(message);
                    //Send back a message to the room:
                    //connection.send('name_receive', name.getString(), client.connectUserId);


                    //Disconnect from the room:
                    //connection.disconnect();
                });
                //Setup a disconnect handler:
                connection.addDisconnectCallback(function () {
                    console.log("disconnected from room");
                });
            },
            function (error) {
                console.log(error);
            }
        );

        //You can now use the client object to make API calls.

    },
    function (error) {
        if (error.code == PlayerIOErrorCode.UnknownGame) {
            //Unknown game id used
        } else {
            //Another error
        }
    }
);

};
gdjs.NewSceneCode.eventsList0x69c38c = function(runtimeScene) {

{


gdjs.NewSceneCode.userFunc0x6da408(runtimeScene);

}


}; //End of gdjs.NewSceneCode.eventsList0x69c38c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDsendObjects2Objects = Hashtable.newFrom({"send": gdjs.NewSceneCode.GDsendObjects2});gdjs.NewSceneCode.userFunc0x69bc78 = function(runtimeScene) {
"use strict";

var name = runtimeScene.getObjects("name")[0];

window.senddata(name.getString());

};
gdjs.NewSceneCode.eventsList0x6da4dc = function(runtimeScene) {

{


gdjs.NewSceneCode.userFunc0x69bc78(runtimeScene);

}


}; //End of gdjs.NewSceneCode.eventsList0x6da4dc
gdjs.NewSceneCode.eventsList0x5b7028 = function(runtimeScene) {

{

gdjs.NewSceneCode.GDresetObjects1.createFrom(runtimeScene.getObjects("reset"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDresetObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDtext_95entryObjects1.createFrom(runtimeScene.getObjects("text_entry"));
{for(var i = 0, len = gdjs.NewSceneCode.GDtext_95entryObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDtext_95entryObjects1[i].setString("");
}
}}

}


{


{
gdjs.NewSceneCode.GDnameObjects1.createFrom(runtimeScene.getObjects("name"));
gdjs.NewSceneCode.GDtext_95entryObjects1.createFrom(runtimeScene.getObjects("text_entry"));
{for(var i = 0, len = gdjs.NewSceneCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDnameObjects1[i].setString((( gdjs.NewSceneCode.GDtext_95entryObjects1.length === 0 ) ? "" :gdjs.NewSceneCode.GDtext_95entryObjects1[0].getString()));
}
}}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x6cc10c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "start");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7185364);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x69c38c(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDsendObjects1.length = 0;


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition0IsTrue_0;
gdjs.NewSceneCode.GDsendObjects1_1final.length = 0;gdjs.NewSceneCode.condition0IsTrue_1.val = false;
{
gdjs.NewSceneCode.GDsendObjects2.createFrom(runtimeScene.getObjects("send"));
{gdjs.NewSceneCode.conditionTrue_2 = gdjs.NewSceneCode.condition0IsTrue_1;
gdjs.NewSceneCode.condition0IsTrue_2.val = false;
gdjs.NewSceneCode.condition1IsTrue_2.val = false;
gdjs.NewSceneCode.condition2IsTrue_2.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_2.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "send");
}if ( gdjs.NewSceneCode.condition0IsTrue_2.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_2.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition1IsTrue_2.val ) {
{
gdjs.NewSceneCode.condition2IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDsendObjects2Objects, runtimeScene, true, false);
}}
}
gdjs.NewSceneCode.conditionTrue_2.val = true && gdjs.NewSceneCode.condition0IsTrue_2.val && gdjs.NewSceneCode.condition1IsTrue_2.val && gdjs.NewSceneCode.condition2IsTrue_2.val;
}
if( gdjs.NewSceneCode.condition0IsTrue_1.val ) {
    gdjs.NewSceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.NewSceneCode.GDsendObjects2.length;j<jLen;++j) {
        if ( gdjs.NewSceneCode.GDsendObjects1_1final.indexOf(gdjs.NewSceneCode.GDsendObjects2[j]) === -1 )
            gdjs.NewSceneCode.GDsendObjects1_1final.push(gdjs.NewSceneCode.GDsendObjects2[j]);
    }
}
}
{
gdjs.NewSceneCode.GDsendObjects1.createFrom(gdjs.NewSceneCode.GDsendObjects1_1final);
}
}
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "send");
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6da4dc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b7028


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDtext_95entryObjects1.length = 0;
gdjs.NewSceneCode.GDtext_95entryObjects2.length = 0;
gdjs.NewSceneCode.GDnameObjects1.length = 0;
gdjs.NewSceneCode.GDnameObjects2.length = 0;
gdjs.NewSceneCode.GDdataObjects1.length = 0;
gdjs.NewSceneCode.GDdataObjects2.length = 0;
gdjs.NewSceneCode.GDresetObjects1.length = 0;
gdjs.NewSceneCode.GDresetObjects2.length = 0;
gdjs.NewSceneCode.GDsendObjects1.length = 0;
gdjs.NewSceneCode.GDsendObjects2.length = 0;

gdjs.NewSceneCode.eventsList0x5b7028(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
