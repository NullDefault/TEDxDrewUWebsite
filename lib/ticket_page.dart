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
  var boxWidth = 60;
  var textSizeSmall = 1.6;
  var textSize = 2.8;
  var textSizeCapital = 3.6;
  var buttonHeight = 5;
  var buttonWidth = 10;

  Widget buildTicketBox() {
    return Center(
      child: Container(
        decoration: ticketBGdecoration,
        child: Padding(
          padding: const EdgeInsets.all(15),
          child: Text(
            "Tickets",
            style: TextStyle(
                fontSize: textSizeCapital * screenData.blockSizeVertical,
                color: Colors.white),
          ),
        ),
      ),
    );
  }

  Container buildLeftBox() {
    var smallSize = textSizeSmall * screenData.blockSizeVertical;
    var midSize = textSize * screenData.blockSizeVertical;

    return Container(
      decoration: ticketBGdecoration,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "General Admission",
              style: TextStyle(fontSize: midSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              '\u{0024} 20 (Early Bird Price)',
              style: TextStyle(fontSize: midSize, color: Colors.white),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Full access to the event and all related activities.',
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Includes refreshments and gift packages.',
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "Available to all members of the general public.",
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "Transactions on Eventbrite are subject to additional taxes and fees.",
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 14.0, right: 14.0, top: 30, bottom: 30),
            child: Container(
              height: buttonHeight * screenData.blockSizeVertical,
              width: buttonWidth * screenData.blockSize,
              child: GFButton(
                onPressed: () =>
                    launch('https://www.eventbrite.com/e/93687908055'),
                color: Colors.redAccent,
                hoverColor: Colors.red,
                text: "Purchase",
                icon: Icon(Icons.local_play, size: smallSize),
                textStyle: TextStyle(color: Colors.black),
              ),
            ),
          )
        ],
      ),
    );
  }

  Container buildRightBox() {
    var smallSize = textSizeSmall * screenData.blockSizeVertical;
    var midSize = textSize * screenData.blockSizeVertical;

    return Container(
      decoration: ticketBGdecoration,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "Student",
              style: TextStyle(fontSize: midSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              '\u{0024} 5 (Early Bird Price)',
              style: TextStyle(fontSize: midSize, color: Colors.white),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Full access to the event and all related activities.',
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Includes refreshments and gift packages.',
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "Available to all college and high school students with valid ID",
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "Transactions on Eventbrite are subject to additional taxes and fees.",
              style: TextStyle(fontSize: smallSize),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 14.0, right: 14.0, top: 30, bottom: 30),
            child: Container(
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
            ),
          )
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    this.screenData.rebuildUpdate(context);
    return Scaffold(
        backgroundColor: Colors.black,
        body: OrientationBuilder(
          builder: (context, orientation) {
            return orientation == Orientation.portrait
                ? _buildVerticalLayout()
                : _buildHorizontalLayout();
          },
        ));
  }

  // TODO: IMPLEMENT VERTICAL LAYOUT
  Widget _buildVerticalLayout() {
    return Center(
      child: Text(
        "Mobile Version Coming Soon",
        style: TextStyle(color: Colors.red),
      ),
    );
  }

  Widget _buildHorizontalLayout(){

    return AnimatedBackground(
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
                      children: <Widget>[
                        buildTicketBox()
                      ],
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
    );
  }
}
