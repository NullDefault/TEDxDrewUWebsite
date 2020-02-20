import 'package:animated_background/animated_background.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:getflutter/getflutter.dart';
import 'package:tedx/size_config.dart';
import 'package:url_launcher/url_launcher.dart';

// ignore: must_be_immutable
class TicketPage extends StatefulWidget {
  SizeConfig sizeConfig;

  TicketPage(SizeConfig sizeConfig) {
    this.sizeConfig = sizeConfig;
  }

  @override
  TicketPageState createState() => TicketPageState(sizeConfig);
}

//----------------------------------------------------------------------------//
class TicketPageState extends State<TicketPage> with TickerProviderStateMixin {
  SizeConfig sizeConfig;

  TicketPageState(SizeConfig sizeConfig) {
    this.sizeConfig = sizeConfig;
  }

  @override
  Widget build(BuildContext context) {
    this.sizeConfig.rebuild(context);
    return Scaffold(
      backgroundColor: Color(0xFFFFF7e6),
      body: OrientationBuilder(
        builder: (context, orientation) {
          return orientation == Orientation.portrait
              ? _buildMobileLayout()
              : _buildDesktopLayout();
        },
      ),
    );
  }

  Widget _buildMobileLayout() {
    return AnimatedBackground(
        behaviour: RacingLinesBehaviour(), vsync: this, child: Container());
  }

  Widget _buildDesktopLayout() {
    Widget _footer = Container(
      color: Colors.black,
      width: sizeConfig.screenWidth,
      height: sizeConfig.blockSizeVertical * 8,
    );
    Widget _ticketText = Text(
      "Tickets",
      style: TextStyle(
        color: Colors.red,
        fontFamily: 'Raleway',
        fontSize: 66 * (sizeConfig.screenWidth / 1980),
        fontWeight: FontWeight.bold,
      ),
    );
    Widget _ticketBoxL = Container(
      color: Color(0xEEE62B1E),
      width: sizeConfig.screenWidth / 2.5,
      height: sizeConfig.screenHeight / 1.75,
      child: Stack(
        children: <Widget>[
          Positioned(
            bottom: 0,
            child: Container(
              width: sizeConfig.screenWidth / 2.5,
              height: sizeConfig.blockSizeVertical * 8,
              child: GFButton(
                onPressed: () =>
                    launch('https://www.eventbrite.com/e/93687908055'),
                text: "buy now",
                color: Color(0xBB071894),
                textStyle: TextStyle(
                    color: Color(0xFFFFF7e6),
                    fontFamily: 'Raleway',
                    fontSize: 40 * (sizeConfig.screenWidth / 1980),
                    fontWeight: FontWeight.bold),
              ),
            ),
          )
        ],
      ),
    );

    Widget _ticketBoxR = Container(
      color: Color(0xEEE62B1E),
      width: sizeConfig.screenWidth / 2.5,
      height: sizeConfig.screenHeight / 1.75,
      child: Stack(
        children: <Widget>[
          Positioned(
            bottom: 0,
            child: Container(
              width: sizeConfig.screenWidth / 2.5,
              height: sizeConfig.blockSizeVertical * 8,
              child: GFButton(
                onPressed: () =>
                    launch('https://www.eventbrite.com/e/93687908055'),
                text: "buy now",
                color: Color(0xBB071894),
                textStyle: TextStyle(
                    color: Color(0xFFFFF7e6),
                    fontFamily: 'Raleway',
                    fontSize: 40 * (sizeConfig.screenWidth / 1980),
                    fontWeight: FontWeight.bold),
              ),
            ),
          )
        ],
      ),
    );

    TextStyle _ticketInfoTextStyle = TextStyle(
      fontSize: 30,
      color: Colors.white,
    );

    return AnimatedBackground(
        behaviour: RacingLinesBehaviour(),
        vsync: this,
        child: Container(
          width: sizeConfig.screenWidth,
          height: sizeConfig.screenHeight,
          child: Stack(
            children: <Widget>[
              Positioned(top: 0, child: _footer),
              Positioned(
                top: 100 * (sizeConfig.screenWidth / 1980),
                left: 25 * (sizeConfig.screenWidth / 1980),
                child: Container(
                  height: 100 * (sizeConfig.screenWidth / 1980),
                  width: 100 * (sizeConfig.screenWidth / 1980),
                  child: IconButton(
                      onPressed: (){Navigator.pop(context);},
                      icon: Icon(
                        FontAwesomeIcons.arrowCircleLeft,
                        size: 50 * (sizeConfig.screenWidth / 1980),
                        color: Colors.red,
                      )),
                ),
              ),
              Positioned(
                  top: sizeConfig.screenHeight / 7,
                  left:
                      sizeConfig.screenWidth / 2 - sizeConfig.screenWidth / 18,
                  child: _ticketText),
              Positioned(
                  left: sizeConfig.screenWidth / 12,
                  top: sizeConfig.screenHeight / 4,
                  child: _ticketBoxL
              ),
              Positioned(
                  right: sizeConfig.screenWidth / 12,
                  top: sizeConfig.screenHeight / 4,
                  child: _ticketBoxR
              ),
              Positioned(bottom: 0, child: _footer)
            ],
          ),
        ));
  }
}
