import 'package:flutter/material.dart';
import 'package:getflutter/getflutter.dart';
import 'package:fluid_layout/fluid_layout.dart';

import 'draw_circle.dart';

class LandingPage extends StatefulWidget {
  @override
  LandingPageState createState() => LandingPageState();
}


class LandingPageState extends State {

  Widget _tedxLogo = Container(
    width: 200,
    height: 200,
    child: Image(image: AssetImage('lib/assets/ted_x_logo.png'))
  );
  Widget _officialLogo = Container(
      width: 400,
      height: 100,
      child: Image(image: AssetImage('lib/assets/official_logo_vertical.png'))
  );

  static double _buttonWidth = 180;
  static double _buttonHeight = 65;
  static double _buttonSeparation = 50;
  static double _buttonFontSize = 28;
  static double _iconSize = 36;

  static GFButtonShape _buttonShape = GFButtonShape.pills;

  static TextStyle _buttonStyle = TextStyle(fontSize: _buttonFontSize, color: Colors.black);

  static Color _buttonColor = Colors.redAccent;
  static Color _buttonHoverColor = Colors.red;
  static Color _buttonHighlightColor = Colors.deepOrange;

  static var _buttonText = ["About", "Team", "Catalog", "Tickets"];
  static var _buttonIcons = [
    Icon(Icons.help, size: _iconSize),
    Icon(Icons.supervised_user_circle, size: _iconSize),
    Icon(Icons.local_library, size: _iconSize),
    Icon(Icons.local_play, size: _iconSize)
  ];

  var _navigationButtons = [
    Container(
      width: _buttonWidth,
      height: _buttonHeight,
      child: GFButton(
        onPressed: () {},

        color: _buttonColor,
        hoverColor: _buttonHoverColor,
        highlightColor: _buttonHighlightColor,

        text: _buttonText[0],
        icon: _buttonIcons[0],

        textStyle: _buttonStyle,
        shape: _buttonShape,
      ),
    ),
    SizedBox(
      width: _buttonSeparation,
    ),
    Container(
      child: CustomPaint(painter: DrawCircle()),
    ),
    SizedBox(
      width: _buttonSeparation,
    ),
    Container(
      width: _buttonWidth,
      height: _buttonHeight,
      child: GFButton(
        onPressed: () {},

        color: _buttonColor,
        hoverColor: _buttonHoverColor,
        highlightColor: _buttonHighlightColor,

        text: _buttonText[1],
        icon: _buttonIcons[1],

        textStyle: _buttonStyle,
        shape: _buttonShape,
      ),
    ),
    SizedBox(
      width: _buttonSeparation,
    ),
    Container(
      child: CustomPaint(painter: DrawCircle()),
    ),
    SizedBox(
      width: _buttonSeparation,
    ),
    Container(
      width: _buttonWidth,
      height: _buttonHeight,
      child: GFButton(
        onPressed: () {},

        color: _buttonColor,
        hoverColor: _buttonHoverColor,
        highlightColor: _buttonHighlightColor,

        text: _buttonText[2],
        icon: _buttonIcons[2],

        textStyle: _buttonStyle,
        shape: _buttonShape,
      ),
    ),
    SizedBox(
      width: _buttonSeparation,
    ),
    Container(
      child: CustomPaint(painter: DrawCircle()),
    ),
    SizedBox(
      width: _buttonSeparation,
    ),
    Container(
      width: _buttonWidth,
      height: _buttonHeight,
      child: GFButton(
        onPressed: () {},

        color: _buttonColor,
        hoverColor: _buttonHoverColor,
        highlightColor: _buttonHighlightColor,

        text: _buttonText[3],
        icon: _buttonIcons[3],

        textStyle: _buttonStyle,
        shape: _buttonShape,
      ),
    )
  ];

  @override
  Widget build(BuildContext context) {
    return  _renderLandingPage();
  }

  Widget _renderLandingPage() {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Container(
        child: FluidLayout(
          child: Fluid(
            child: Column(
              children: <Widget>[
                _renderTopRow(),
                _renderButtonRow()
              ],
            )
          )
        )
      )
    );
  }

  Widget _renderTopRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: <Widget>[
            _officialLogo,
            _tedxLogo,
            Container(
              width: 400,
            )
      ],
    );
  }

  Widget _renderButtonRow() {
    return Row(
      children: _navigationButtons,
    );
  }
}

