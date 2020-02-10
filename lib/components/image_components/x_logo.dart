import 'package:flutter/widgets.dart';

class XLogo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var _wHeight = 350.0;
    var _xHeight = 350.0;

    return Container(
        width: _wHeight,
        height: _xHeight,
        child: Image(image: AssetImage('lib/assets/ted_x_logo.png')));
  }
}
