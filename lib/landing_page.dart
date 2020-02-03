import 'package:flutter/material.dart';
import 'package:getflutter/getflutter.dart';
import 'package:fluid_layout/fluid_layout.dart';
import 'package:flutter_shine/flutter_shine.dart';

class LandingPage extends StatefulWidget {
  @override
  LandingPageState createState() => LandingPageState();
}

class LandingPageState extends State {
  Widget _tedxLogo = Image(image: AssetImage('lib/assets/ted_x_logo.png'));
  Widget _officialLogo =
      Image(image: AssetImage('lib/assets/official_logo_vertical.png'));

  static double buttonWidth = 180;
  static double buttonHeight = 65;
  static double buttonSeparation = 50;
  static double buttonFontSize = 28;
  static double iconSize = 36;
  static GFButtonShape buttonShape = GFButtonShape.pills;

  var _navigationButtons = [
    Container(
      width: buttonWidth,
      height: buttonHeight,
      child: GFButton(
        onPressed: () {},
        text: "About",
        color: Colors.red,
        icon: Icon(Icons.help, size: iconSize),
        textStyle: TextStyle(fontSize: buttonFontSize, color: Colors.black),
        shape: buttonShape,
      ),
    ),
    SizedBox(
      width: buttonSeparation,
    ),
    Container(
      child: CustomPaint(painter: DrawCircle()),
    ),
    SizedBox(
      width: buttonSeparation,
    ),
    Container(
      width: buttonWidth,
      height: buttonHeight,
      child: GFButton(
        onPressed: () {},
        text: "Team",
        color: Colors.red,
        icon: Icon(Icons.supervised_user_circle, size: iconSize),
        textStyle: TextStyle(fontSize: buttonFontSize, color: Colors.black),
        shape: buttonShape,
      ),
    ),
    SizedBox(
      width: buttonSeparation,
    ),
    Container(
      child: CustomPaint(painter: DrawCircle()),
    ),
    SizedBox(
      width: buttonSeparation,
    ),
    Container(
      width: buttonWidth,
      height: buttonHeight,
      child: GFButton(
        onPressed: () {},
        text: "Catalog",
        color: Colors.red,
        icon: Icon(Icons.local_library, size: iconSize),
        textStyle: TextStyle(fontSize: buttonFontSize, color: Colors.black),
        shape: buttonShape,
      ),
    ),
    SizedBox(
      width: buttonSeparation,
    ),
    Container(
      child: CustomPaint(painter: DrawCircle()),
    ),
    SizedBox(
      width: buttonSeparation,
    ),
    Container(
      width: buttonWidth,
      height: buttonHeight,
      child: GFButton(
        onPressed: () {},
        text: "Tickets",
        color: Colors.red,
        icon: Icon(Icons.local_play, size: iconSize),
        textStyle: TextStyle(fontSize: buttonFontSize, color: Colors.black),
        shape: buttonShape,
      ),
    )
  ];

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: "TEDxDrewUniversity",
      home: _renderLandingPage(),
    );
  }

  Widget _renderLandingPage() {
    return Material(
      type: MaterialType.transparency,
      child: new Container(
          color: Colors.black,
          child: FittedBox(
            fit: BoxFit.contain,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                _renderTopRow(),
                _renderButtonRow(),
              ],
            ),
          )),
    );
  }

  Widget _renderTopRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Container(
          width: 740,
          height: 740,
          child: Align(
            alignment: Alignment.topLeft,
            child: _officialLogo,
          ),
        ),
        Column(
          children: <Widget>[
            Container(
              width: 500,
              height: 500,
              child: _tedxLogo,
            ),
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Text(
                '2020',
                style: TextStyle(fontSize: 70, color: Colors.red),
              ),
            ),
          ],
        ),
        Container(
          width: 740,
          height: 740,
        )
      ],
    );
  }

  Widget _renderButtonRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: _navigationButtons,
    );
  }
}

class DrawCircle extends CustomPainter {
  Paint _paint;

  DrawCircle() {
    _paint = Paint()
      ..color = Colors.red
      ..strokeWidth = 5.0
      ..style = PaintingStyle.fill;
  }

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawCircle(Offset(0.0, 0.0), 10.0, _paint);
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) {
    return false;
  }
}
