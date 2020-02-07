import 'package:flutter/cupertino.dart';

class TedXLogo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var _logoWidth = 400.0;
    var _logoHeight = 200.0;

    return Container(
        width: _logoWidth,
        height: _logoHeight,
        child:
            Image(image: AssetImage('lib/assets/official_logo_vertical.png')));
  }
}
