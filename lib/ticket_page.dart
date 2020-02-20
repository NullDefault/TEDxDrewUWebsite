import 'package:animated_background/animated_background.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:getflutter/getflutter.dart';
import 'package:tedx/components/logo_widgets.dart';
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
    TextStyle _mobileHeaderStyle = TextStyle(
        color: Color(0xFFFFF7e6),
        fontFamily: 'Raleway',
        fontWeight: FontWeight.bold,
        fontSize: sizeConfig.blockSizeVertical * 7);
    TextStyle _mobileSubHeaderStyle = TextStyle(
        color: Color(0xFFFFF7e6),
        fontFamily: 'Raleway',
        fontSize: sizeConfig.blockSizeVertical * 5);
    TextStyle _mobileMainParagraphStyle = TextStyle(
        color: Color(0xFFFFF7e6),
        fontFamily: 'Raleway',
        fontSize: sizeConfig.blockSizeVertical * 3);
    TextStyle _mobileButtonTextStyle = TextStyle(
        color: Color(0xFFFFF7e6),
        fontFamily: 'Raleway',
        fontSize: sizeConfig.blockSizeVertical * 6,
        fontWeight: FontWeight.bold);

    Widget _ticketBoxTop = Container(
      height: sizeConfig.screenHeight / 1.9,
      color: Color(0xEEE62B1E),
      child: Text.rich(
        TextSpan(
            text: '\n\u{0024}15\n\n',
            style: _mobileHeaderStyle,
            children: [
              TextSpan(
                  text: 'general admission\n',
                  style: _mobileSubHeaderStyle,
                  children: [
                    TextSpan(
                        text:
                            "- Early bird price valid until 2/29\n normal price \u{0024}20\n",
                        style: _mobileMainParagraphStyle),
                    TextSpan(
                        text:
                            "- Full access to the event\n and all related activities\n",
                        style: _mobileMainParagraphStyle),
                    TextSpan(
                        text: "- Includes refreshments and gift packages\n",
                        style: _mobileMainParagraphStyle),
                    TextSpan(
                        text:
                            "- Available to all members of the general public\n",
                        style: _mobileMainParagraphStyle),
                    TextSpan(
                        text:
                            "- Note: Transactions on Eventbrite are subject to additional taxes and fees\n\n",
                        style: _mobileMainParagraphStyle)
                  ])
            ]),
        textAlign: TextAlign.center,
      ),
    );

    Widget _ticketBoxBot = Container(
      height: sizeConfig.screenHeight / 1.9,
      color: Color(0xEEE62B1E),
      child: Text.rich(
        TextSpan(text: '\n\u{0024}5\n\n', style: _mobileHeaderStyle, children: [
          TextSpan(text: 'student\n', style: _mobileSubHeaderStyle, children: [
            TextSpan(
                text:
                    "- Early bird price valid until 2/29\n normal price \u{0024}10\n",
                style: _mobileMainParagraphStyle),
            TextSpan(
                text: "- Full access to the event and all related activities\n",
                style: _mobileMainParagraphStyle),
            TextSpan(
                text: "- Includes refreshments and gift packages\n",
                style: _mobileMainParagraphStyle),
            TextSpan(
                text:
                    "- Available to all college and high school students with valid ID\n",
                style: _mobileMainParagraphStyle),
            TextSpan(
                text:
                    "- Note: Transactions on Eventbrite are subject to additional taxes and fees\n\n",
                style: _mobileMainParagraphStyle)
          ])
        ]),
        textAlign: TextAlign.center,
      ),
    );

    Widget _purchaseButton = Container(
      width: sizeConfig.screenWidth,
      height: sizeConfig.blockSizeVertical * 8,
      child: GFButton(
        onPressed: () => launch('https://www.eventbrite.com/e/93687908055'),
        text: "buy now",
        color: Color(0xBB071894),
        shape: GFButtonShape.square,
        textStyle: _mobileButtonTextStyle,
      ),
    );

    return AnimatedBackground(
        behaviour: RacingLinesBehaviour(),
        vsync: this,
        child: Container(
          width: sizeConfig.screenWidth,
          height: sizeConfig.screenHeight,
          child: ListView(
            children: <Widget>[
              Center(
                  child: SolveForXLogo(sizeConfig.blockSizeHorizontal * 17,
                      sizeConfig.blockSizeVertical * 15)),
              SizedBox(
                height: sizeConfig.blockSizeVertical * 7,
              ),
              _ticketBoxTop,
              _purchaseButton,
              SizedBox(
                height: sizeConfig.blockSizeVertical * 10,
              ),
              _ticketBoxBot,
              _purchaseButton,
              SizedBox(
                height: sizeConfig.blockSizeVertical * 10,
              )
            ],
          ),
        ));
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
        fontSize: 66 * sizeConfig.sizeFactor,
        fontWeight: FontWeight.bold,
      ),
    );

    TextStyle _headerStyle = TextStyle(
        color: Colors.white,
        fontFamily: 'Raleway',
        fontWeight: FontWeight.bold,
        fontSize: 95 * sizeConfig.sizeFactor);
    TextStyle _subHeaderStyle = TextStyle(
        color: Colors.white,
        fontFamily: 'Raleway',
        fontSize: 55 * sizeConfig.sizeFactor);
    TextStyle _mainParagraphStyle = TextStyle(
        color: Colors.white,
        fontFamily: 'Raleway',
        fontSize: 24 * sizeConfig.sizeFactor);
    TextStyle _buttonTextStyle = TextStyle(
        color: Color(0xFFFFF7e6),
        fontFamily: 'Raleway',
        fontSize: 40 * sizeConfig.sizeFactor,
        fontWeight: FontWeight.bold);

    Widget _ticketBoxL = Container(
      color: Color(0xEEE62B1E),
      width: sizeConfig.screenWidth / 2.5,
      height: sizeConfig.screenHeight / 1.75,
      child: Stack(
        children: <Widget>[
          Positioned(
            top: sizeConfig.blockSizeVertical * 2,
            child: Container(
                width: sizeConfig.screenWidth / 2.5,
                height: sizeConfig.screenHeight / 1.75 -
                    sizeConfig.blockSizeVertical * 10,
                child: Text.rich(
                  TextSpan(
                      text: '\n\u{0024}15\n\n',
                      style: _headerStyle,
                      children: [
                        TextSpan(
                            text: 'general admission\n',
                            style: _subHeaderStyle,
                            children: [
                              TextSpan(
                                  text:
                                      "- Early bird price valid until 2/29; normal price \u{0024}20\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Full access to the event and all related activities\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Includes refreshments and gift packages\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Available to all members of the general public\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Note: Transactions on Eventbrite are subject to\n additional taxes and fees\n\n",
                                  style: _mainParagraphStyle)
                            ])
                      ]),
                  textAlign: TextAlign.center,
                )),
          ),
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
                textStyle: _buttonTextStyle,
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
            top: sizeConfig.blockSizeVertical * 2,
            child: Container(
                width: sizeConfig.screenWidth / 2.5,
                height: sizeConfig.screenHeight / 1.75 -
                    sizeConfig.blockSizeVertical * 10,
                child: Text.rich(
                  TextSpan(
                      text: '\n\u{0024}5\n\n',
                      style: _headerStyle,
                      children: [
                        TextSpan(
                            text: 'student\n',
                            style: _subHeaderStyle,
                            children: [
                              TextSpan(
                                  text:
                                      "- Early bird price valid until 2/29; normal price \u{0024}10\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Full access to the event and all related activities\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Includes refreshments and gift packages\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Available to all college and high school students with valid ID\n",
                                  style: _mainParagraphStyle),
                              TextSpan(
                                  text:
                                      "- Note: Transactions on Eventbrite are subject to\n additional taxes and fees\n\n",
                                  style: _mainParagraphStyle)
                            ])
                      ]),
                  textAlign: TextAlign.center,
                )),
          ),
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
                textStyle: _buttonTextStyle,
              ),
            ),
          )
        ],
      ),
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
                top: 100 * sizeConfig.sizeFactor,
                left: 25 * sizeConfig.sizeFactor,
                child: Container(
                  height: 100 * sizeConfig.sizeFactor,
                  width: 100 * sizeConfig.sizeFactor,
                  child: IconButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      icon: Icon(
                        FontAwesomeIcons.arrowCircleLeft,
                        size: 50 * sizeConfig.sizeFactor,
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
                  child: _ticketBoxL),
              Positioned(
                  right: sizeConfig.screenWidth / 12,
                  top: sizeConfig.screenHeight / 4,
                  child: _ticketBoxR),
              Positioned(bottom: 0, child: _footer)
            ],
          ),
        ));
  }
}
