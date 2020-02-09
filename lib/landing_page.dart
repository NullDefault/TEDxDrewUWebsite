import 'package:flutter/material.dart';
import 'package:fluid_layout/fluid_layout.dart';
import 'components/footer.dart';
import 'components/navigation_buttons.dart';
import 'components/image_components/x_logo.dart';

class LandingPage extends StatefulWidget {
  @override
  LandingPageState createState() => LandingPageState();
}

class LandingPageState extends State {
  var _topRowOffset = 180.0;
  var _botRowOffset = 150.0;

  var _xLogoDimensions = 400.0;

  @override
  Widget build(BuildContext context) {
    return _renderLandingPage();
  }

  Widget _renderLandingPage() {
    return Scaffold(
        backgroundColor: Colors.black,
        body: Container(
            child: FluidLayout(
                child: Fluid(
                    child: ListView(
          children: <Widget>[
            SizedBox(height: _topRowOffset),
            _renderTopRow(),
            SizedBox(height: _botRowOffset),
            _renderButtonRow()
          ],
        )))),
        bottomNavigationBar: Footer());
  }

  Widget _renderTopRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Container(
          width: _xLogoDimensions,
          height: _xLogoDimensions,
          child: Align(
            alignment: Alignment.center,
            child: XLogo(),
          ),
        ),
      ],
    );
  }

  Widget _renderButtonRow() {
    return NavigationButtons();
  }
}
