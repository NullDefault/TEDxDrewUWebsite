import 'package:flutter/material.dart';
import 'package:tedx/app_config.dart';
import 'package:tedx/components/footer.dart';
import 'package:tedx/components/image_components/x_logo.dart';
import 'package:tedx/components/navigation_buttons.dart';

class LandingPage extends StatefulWidget {
  AppConfig screenData;

  LandingPage(AppConfig screenData){
    this.screenData = screenData;
  }

  @override
  LandingPageState createState() => LandingPageState(screenData);
}

class LandingPageState extends State {
  AppConfig screenData;

  LandingPageState(AppConfig screenData){
    this.screenData = screenData;
  }

  @override
  Widget build(BuildContext context) {
    this.screenData.rebuildUpdate(context);
    return _renderLandingPage();
  }

  Widget _renderLandingPage() {
    var _topRowOffset = 18 * screenData.blockSizeVertical;
    var _botRowOffset = 15 * screenData.blockSizeVertical;

    return Scaffold(
        backgroundColor: Colors.black,
        body: Container(
            child: ListView(
          children: <Widget>[
            SizedBox(height: _topRowOffset),
            _renderTopRow(),
            SizedBox(height: _botRowOffset),
            _renderButtonRow()
          ],
        )),
        bottomNavigationBar: Footer(screenData));
  }

  Widget _renderTopRow() {
    var _xLogoDimensions = 40 * screenData.blockSizeVertical;

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
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        NavigationButtons(screenData)
      ],
    );
  }
}
