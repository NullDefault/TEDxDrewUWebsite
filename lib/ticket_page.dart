import 'package:flutter/material.dart';
import 'package:animated_background/animated_background.dart';
import 'package:getflutter/getflutter.dart';
import 'package:tedx/app_config.dart';
import 'package:url_launcher/url_launcher.dart';

class TicketPage extends StatefulWidget {
  AppConfig screenData;

  TicketPage(AppConfig screenData) {
    this.screenData = screenData;
  }

  @override
  State<StatefulWidget> createState() {
    return TicketPageState(screenData);
  }
}

class TicketPageState extends State<TicketPage> with TickerProviderStateMixin {
  AppConfig screenData;

  TicketPageState(AppConfig screenData) {
    this.screenData = screenData;
  }

  BoxDecoration ticketBGdecoration = BoxDecoration(color: Colors.red);
  var boxHeight = 60;
  var boxWidth = 100;
  var textSizeSmall = 1.6;
  var textSize = 2.8;
  var textSizeCapital = 3.6;
  var buttonHeight = 5;
  var buttonWidth = 10;

  Widget buildTicketBox() {
    return Center(
      child: Container(
        decoration: ticketBGdecoration,
        child: Text(
          "Tickets",
          style: TextStyle(
              fontSize: textSizeCapital * screenData.blockSizeVertical,
              color: Colors.white),
        ),
      ),
    );
  }

  Column buildLeftBox() {
    var smallSize = textSizeSmall * screenData.blockSizeVertical;
    var midSize = textSize * screenData.blockSizeVertical;

    return Column(
      children: <Widget>[
        Container(
          decoration: ticketBGdecoration,
          child: Column(
            children: <Widget>[
              Text(
                "General Admission",
                style: TextStyle(
                    fontSize: midSize),
              ),
              Text(
                '\u{0024} 20 (Early Bird Price)',
                style: TextStyle(
                    fontSize: midSize,
                    color: Colors.white),
              ),
              Text(
                'Full access to the event and all related activities.',
                style: TextStyle(
                    fontSize: smallSize),
              ),
              Text(
                'Includes refreshments and gift packages.',
                style: TextStyle(
                    fontSize: smallSize),
              ),
              Text(
                "Available to all members of the general public.",
                style: TextStyle(
                    fontSize: smallSize),
              ),
              Text(
                "Transactions on Eventbrite are subject to additional taxes and fees.",
                style: TextStyle(
                    fontSize: smallSize),
              ),
              SizedBox(
                height: 5.1 * screenData.blockSizeVertical,
              ),
              Container(
                height: buttonHeight * screenData.blockSizeVertical,
                width: buttonWidth * screenData.blockSize,
                child: GFButton(
                  onPressed: () =>
                      launch('https://www.eventbrite.com/e/93687908055'),
                  color: Colors.redAccent,
                  hoverColor: Colors.red,
                  text: "Purchase",
                  icon: Icon(Icons.local_play,
                      size: smallSize),
                  textStyle: TextStyle(color: Colors.black),
                ),
              )
            ],
          ),
        )
      ],
    );
  }

  Column buildRightBox() {
    var smallSize = textSizeSmall * screenData.blockSizeVertical;
    var midSize = textSize * screenData.blockSizeVertical;

    return Column(
      children: <Widget>[
        Container(
          decoration: ticketBGdecoration,
          child: Column(
            children: <Widget>[
              Text(
                "Student",
                style: TextStyle(
                    fontSize: midSize),
              ),
              Text(
                '\u{0024} 5 (Early Bird Price)',
                style: TextStyle(
                    fontSize: midSize,
                    color: Colors.white),
              ),
              Text(
                'Full access to the event and all related activities.',
                style: TextStyle(
                    fontSize: smallSize),
              ),
              Text(
                'Includes refreshments and gift packages.',
                style: TextStyle(
                    fontSize: smallSize),
              ),
              Text(
                "Available to all college and high school students with valid ID",
                style: TextStyle(
                    fontSize: smallSize),
              ),
              Text(
                "Transactions on Eventbrite are subject to additional taxes and fees.",
                style: TextStyle(
                    fontSize: smallSize),
              ),
              SizedBox(
                height: 5 * screenData.blockSizeVertical,
              ),
              Container(
                height: buttonHeight * screenData.blockSizeVertical,
                width: buttonWidth * screenData.blockSize,
                child: GFButton(
                  onPressed: () =>
                      launch('https://www.eventbrite.com/e/93687908055'),
                  color: Colors.redAccent,
                  hoverColor: Colors.red,
                  text: "Purchase",
                  icon: Icon(Icons.local_play,
                      size: textSizeSmall * screenData.blockSizeVertical),
                  textStyle: TextStyle(color: Colors.black),
                ),
              )
            ],
          ),
        )
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    this.screenData.rebuildUpdate(context);
    return Scaffold(
      backgroundColor: Colors.black,
      body: AnimatedBackground(
        behaviour: RacingLinesBehaviour(),
        vsync: this,
        child: Container(
          child: Stack(
            children: <Widget>[
              Container(
                  color: Colors.redAccent,
                  height: boxHeight * screenData.blockSizeVertical,
                  width: boxWidth * screenData.blockSize,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[buildTicketBox()],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[buildLeftBox(), buildRightBox()],
                      ),
                      SizedBox(
                        height: 10 * screenData.blockSizeVertical,
                      )
                    ],
                  )),
              Positioned(
                  top: 1 * screenData.blockSizeVertical,
                  right: 1 * screenData.blockSize,
                  child: IconButton(
                    icon: Icon(Icons.cancel,
                        color: Colors.black,
                        size: 3 * screenData.blockSizeVertical),
                    onPressed: () {
                      Navigator.pop(context);
                    },
                  ))
            ],
          ),
          alignment: Alignment(0.0, 0.0),
        ),
      ),
    );
  }
}
