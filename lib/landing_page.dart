import 'package:flutter/material.dart';
import 'package:tedx/app_config.dart';
import 'package:tedx/components/footer.dart';
import 'package:tedx/components/image_components/x_logo.dart';
import 'package:tedx/components/navigation_buttons.dart';

// ignore: must_be_immutable
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
    return Scaffold(
        backgroundColor: Colors.black,
        body: OrientationBuilder(
          builder: (context, orientation) {
            return orientation == Orientation.portrait
                ? _buildVerticalLayout()
                : _buildHorizontalLayout();
          },
        ),
        bottomNavigationBar: Footer(screenData)); // TODO: Make Footer Rebuild on Vertical Layout
  }

  // VERTICAL LAYOUT TODO: IMPLEMENT VERTICAL LAYOUT
  Widget _buildVerticalLayout(){
    return Center(
      child: Text(
        "Mobile Version Coming Soon",
        style: TextStyle(color: Colors.red),
      ),
    );
  }

  Widget _renderTopRowVerticaly(){

  }

  Widget _renderButtonRowVertically(){

  }


  // HORIZONTAL LAYOUT
  Widget _buildHorizontalLayout(){
    var _topRowOffset = 18 * screenData.blockSizeVertical;
    var _botRowOffset = 15 * screenData.blockSizeVertical;
    return Container(
        child: ListView(
          children: <Widget>[
            SizedBox(height: _topRowOffset),
            _renderTopRowHorizontally(),
            SizedBox(height: _botRowOffset),
            _renderButtonRowHorizontally()
          ],
        ));
  }

  Widget _renderTopRowHorizontally() {
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

  Widget _renderButtonRowHorizontally() {
    var navigationButtons = NavigationButtons(screenData);
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        navigationButtons.horizontalLayout(context)
      ],
    );
  }
}
