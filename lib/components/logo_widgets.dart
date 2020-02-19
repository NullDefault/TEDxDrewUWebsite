import 'package:flutter/widgets.dart';

//----------------------------------------------------------------------------//
// ignore: must_be_immutable
class OfficialTextLogo extends StatelessWidget {
  var w;
  var h;

  OfficialTextLogo(logoWidth, logoHeight) {
    this.w = logoWidth;
    this.h = logoHeight;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        width: this.w,
        height: this.h,
        child: Image(image: AssetImage('lib/assets/officialLogo.png')));
  }
}

//----------------------------------------------------------------------------//
// ignore: must_be_immutable
class SolveForXLogo extends StatelessWidget {
  var w;
  var h;

  SolveForXLogo(logoWidth, logoHeight) {
    this.w = logoWidth;
    this.h = logoHeight;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        width: this.w,
        height: this.h,
        child: Image(image: AssetImage('lib/assets/solveForX_Logo.png')));
  }
}

//----------------------------------------------------------------------------//
// ignore: must_be_immutable
class GenericXLogo extends StatelessWidget {
  var w;
  var h;

  GenericXLogo(logoWidth, logoHeight) {
    this.w = logoWidth;
    this.h = logoHeight;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        width: this.w,
        height: this.h,
        child: Image(image: AssetImage('lib/assets/ted_x_logo.png')));
  }
}