import 'package:flutter/material.dart';
import 'footer_painter.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

// Used to make the website Footer
class Footer extends StatelessWidget {
  var _footerHeight = 70.0;
  var _textSocialSeparation = 80.0;
  var _textSize = 26.0;
  var _iconSize = 34.0;
  static const _socialPadding = 8.0;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
          left: 0.0,
          right: 0.0,
          top: 0.0,
          bottom: 0.0,
          child: new CustomPaint(
            painter: FooterPainter(),
            size: Size.infinite,
          ),
        ),
        Container(
          height: _footerHeight,
          color: Colors.red,
          child: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "This independent TEDx event is operated under license from TED. | tedx@drew.edu",
                  style: TextStyle(
                      color: Colors.black,
                      fontFamily: 'Helvetica',
                      fontSize: _textSize),
                ),
                SizedBox(width: _textSocialSeparation),
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.twitter,
                          size: _iconSize, color: Colors.black)),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.facebook,
                          size: _iconSize, color: Colors.black)),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.instagram,
                          size: _iconSize, color: Colors.black)),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.youtube,
                          size: _iconSize, color: Colors.black)),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
