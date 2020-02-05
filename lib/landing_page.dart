import 'package:flutter/material.dart';
import 'package:fluid_layout/fluid_layout.dart';
import 'package:tedx/navigation_buttons.dart';
import 'navigation_buttons.dart';

class LandingPage extends StatefulWidget {
  @override
  LandingPageState createState() => LandingPageState();
}


class LandingPageState extends State {

  Widget _tedxLogo = Container(
    width: 300,
    height: 300,
    child: Image(image: AssetImage('lib/assets/ted_x_logo.png'))
  );
  Widget _officialLogo = Container(
      width: 400,
      height: 200,
      child: Image(image: AssetImage('lib/assets/official_logo_vertical.png'))
  );

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
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                _renderTopRow(),
                SizedBox(height: 100),
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
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Container(
          width: 400,
          height: 400,
          child: Align(
            alignment: Alignment.center,
            child: _tedxLogo,
          ),
        ),
      ],
    );
  }

  Widget _renderButtonRow() {
    return NavigationButtons();
  }
}

