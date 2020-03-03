import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:getflutter/getflutter.dart';
import 'size_config.dart';
import 'package:url_launcher/url_launcher.dart';
import 'components/logo_widgets.dart';
import 'components/navigation_buttons.dart';

// ignore: must_be_immutable
class LandingPage extends StatefulWidget {
  SizeConfig sizeConfig;

  LandingPage(SizeConfig sizeConfig) {
    this.sizeConfig = sizeConfig;
  }

  @override
  LandingPageState createState() => LandingPageState(sizeConfig);
}

//----------------------------------------------------------------------------//
class LandingPageState extends State {
  SizeConfig sizeConfig;

  LandingPageState(SizeConfig sizeConfig) {
    this.sizeConfig = sizeConfig;
  }

  Color _landingPageBackgroundColor = Color(0xFFFFF7e6);

  // Builds The Landing Page
  @override
  Widget build(BuildContext context) {
    this.sizeConfig.rebuild(context);
    return Scaffold(
        backgroundColor: _landingPageBackgroundColor,
        body: OrientationBuilder(
          builder: (context, orientation) {
            return orientation == Orientation.portrait
                ? _buildMobileLayout()
                : _buildDesktopLayout();
          },
        ),
        bottomNavigationBar: _makeFooter());
  }

//----------------------------------------------------------------------------//
  Widget _buildMobileLayout() {
    var _solveForXLogoWidth = 150 * sizeConfig.blockSizeHorizontal;
    var _solveForXLogoHeight = 25 * sizeConfig.blockSizeVertical;
    var _officialLogoWidth = 70 * sizeConfig.blockSizeHorizontal;
    var _officialLogoHeight = 10 * sizeConfig.blockSizeVertical;
    var _individualButtonWidth = 40 * sizeConfig.blockSizeHorizontal;
    var _individualButtonHeight = 12 * sizeConfig.blockSizeVertical;
    var _solveForXLogo =
        SolveForXLogoWithText(_solveForXLogoWidth, _solveForXLogoHeight);
    var _officialLogo =
        OfficialTextLogo(_officialLogoWidth, _officialLogoHeight);
    var _buttons = NavigationButtons();
    Widget _mobileNavigationButtons = _buttons.getMobileLayout(
        _individualButtonWidth, _individualButtonHeight, context);

    return Center(
      child: Container(
        color: _landingPageBackgroundColor,
        height: sizeConfig.screenHeight,
        width: sizeConfig.screenWidth,
        child: Center(
          child: ListView(
            children: <Widget>[
              _solveForXLogo,
              _mobileNavigationButtons,
              Padding(
                padding: const EdgeInsets.only(top: 20, bottom: 20),
                child: Center(
                    child: Container(
                      width: _individualButtonWidth,
                      height: _individualButtonHeight,
                      child: GFButton(
                        text: "Play Teaser Video",
                        textStyle: TextStyle(
                            color: Colors.white,
                            fontFamily: 'Raleway',
                            fontSize: 18,
                            height: 2,
                            fontWeight: FontWeight.bold),
                        color: Colors.red,
                        shape: GFButtonShape.pills,
                        icon: Icon(FontAwesomeIcons.playCircle, color: Colors.white, size: _individualButtonWidth / 10),
                        onPressed: () => launch("https://www.youtube.com/watch?v=M_Ei_AmQDEs"),
                      ),
                    )
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  SizedBox(
                    width: _officialLogoWidth / 14,
                  ),
                  _officialLogo
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

//----------------------------------------------------------------------------//
  Widget _buildDesktopLayout() {
    var _solveForXLogoWidth = 150 * sizeConfig.blockSizeHorizontal;
    var _solveForXLogoHeight = 25 * sizeConfig.blockSizeVertical;
    var _officialLogoWidth = 50 * sizeConfig.blockSizeHorizontal;
    var _officialLogoHeight = 10 * sizeConfig.blockSizeVertical;
    var _individualButtonWidth = 16 * sizeConfig.blockSizeHorizontal;
    var _individualButtonHeight = 8 * sizeConfig.blockSizeVertical;

    var _solveForXLogo =
        SolveForXLogoWithText(_solveForXLogoWidth, _solveForXLogoHeight);
    var _officialLogo =
        OfficialTextLogo(_officialLogoWidth, _officialLogoHeight);
    var _buttons = NavigationButtons();
    Widget _desktopNavigationButtons = _buttons.getDesktopLayout(
        sizeConfig.screenWidth,
        _individualButtonWidth,
        _individualButtonHeight,
        context);

    return Center(
      child: Container(
        color: _landingPageBackgroundColor,
        height: sizeConfig.screenHeight,
        width: sizeConfig.screenWidth,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            SizedBox(
              height: _officialLogoHeight,
            ),
            _solveForXLogo,
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                SizedBox(
                  width: _officialLogoWidth / 4,
                ),
                _officialLogo
              ],
            ),
            SizedBox(
              height: _solveForXLogoHeight * .8,
            ),
            _desktopNavigationButtons,
            SizedBox(height: sizeConfig.blockSizeVertical * 6),
            Container(
              width: _individualButtonWidth,
              height: _individualButtonHeight,
              child: GFButton(
                text: "Play Teaser Video",
                textStyle: TextStyle(
                    color: Colors.white,
                    fontFamily: 'Raleway',
                    fontSize: 23 * (sizeConfig.screenWidth / 1980),
                    height: 2,
                    fontWeight: FontWeight.bold),
                color: Colors.red,
                shape: GFButtonShape.pills,
                icon: Icon(FontAwesomeIcons.playCircle, color: Colors.white, size: _individualButtonWidth / 10),
                onPressed: () => launch("https://www.youtube.com/watch?v=M_Ei_AmQDEs"),
              ),
            )
          ],
        ),
      ),
    );
  }

//----------------------------------------------------------------------------//
  Widget _makeFooter() {
    if (sizeConfig.screenWidth < sizeConfig.screenHeight) {
      //Mobile Layout
      return Container(
        height: sizeConfig.blockSizeVertical * 8,
        color: Color(0xEEE62B1E),
        child: ListView(
          scrollDirection: Axis.horizontal,
          children: <Widget>[
            SizedBox(
              width: sizeConfig.blockSizeHorizontal * 5,
            ),
            Center(
              child: Text(
                "This independent TEDx event is operated under license from TED. | tedx@drew.edu",
                style: TextStyle(
                    color: Color(0xFFFFF7e6),
                    fontFamily: 'Helvetica',
                    fontSize: 10),
              ),
            ),
            SizedBox(
              width: sizeConfig.blockSizeHorizontal * 2,
            ),
            Icon(FontAwesomeIcons.arrowsAltH,
                size: sizeConfig.blockSizeHorizontal * 2),
            IconButton(
                // FACEBOOK
                onPressed: () => launch('https://www.facebook.com/TEDxDrewU/'),
                icon: Icon(FontAwesomeIcons.facebookSquare,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
            SizedBox(width: sizeConfig.blockSizeHorizontal),
            IconButton(
                // INSTAGRAM
                onPressed: () =>
                    launch('https://www.instagram.com/tedxdrewuniversity/'),
                icon: Icon(FontAwesomeIcons.instagram,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
            SizedBox(width: sizeConfig.blockSizeHorizontal),
            IconButton(
                // YOUTUBE
                onPressed: () => launch(
                    'https://www.youtube.com/playlist?list=PLsRNoUx8w3rOvVu1x8Vn5ECqMoYcYoJNw'),
                icon: Icon(FontAwesomeIcons.youtubeSquare,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
            SizedBox(width: sizeConfig.blockSizeHorizontal),
            IconButton(
                // FLICKR
                onPressed: () => launch(
                    'https://www.flickr.com/photos/157641040@N04/albums/with/72157667913519498'),
                icon: Icon(FontAwesomeIcons.flickr,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
          ],
        ),
      );
    }
//----------------------------------------------------------------------------//
    else if (sizeConfig.screenHeight < sizeConfig.screenWidth) {
      // Desktop Footer
      return Container(
        height: sizeConfig.blockSizeVertical * 8,
        color: Color(0xEEE62B1E),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "This independent TEDx event is operated under license from TED. | tedx@drew.edu",
              style: TextStyle(
                  color: Color(0xFFFFF7e6),
                  fontFamily: 'Helvetica',
                  fontSize: 19 * sizeConfig.sizeFactor),
            ),
            SizedBox(width: sizeConfig.blockSizeHorizontal * 10),
            IconButton(
                // FACEBOOK
                onPressed: () => launch('https://www.facebook.com/TEDxDrewU/'),
                icon: Icon(FontAwesomeIcons.facebookSquare,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
            SizedBox(width: sizeConfig.blockSizeHorizontal),
            IconButton(
                // INSTAGRAM
                onPressed: () =>
                    launch('https://www.instagram.com/tedxdrewuniversity/'),
                icon: Icon(FontAwesomeIcons.instagram,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
            SizedBox(width: sizeConfig.blockSizeHorizontal),
            IconButton(
                // YOUTUBE
                onPressed: () => launch(
                    'https://www.youtube.com/playlist?list=PLsRNoUx8w3rOvVu1x8Vn5ECqMoYcYoJNw'),
                icon: Icon(FontAwesomeIcons.youtubeSquare,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
            SizedBox(width: sizeConfig.blockSizeHorizontal),
            IconButton(
                // FLICKR
                onPressed: () => launch(
                    'https://www.flickr.com/photos/157641040@N04/albums/with/72157667913519498'),
                icon: Icon(FontAwesomeIcons.flickr,
                    size: sizeConfig.blockSizeVertical * 3.5,
                    color: Colors.black)),
          ],
        ),
      );
    }
  }
//----------------------------------------------------------------------------//
}
