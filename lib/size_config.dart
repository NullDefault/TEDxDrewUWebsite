import 'package:flutter/widgets.dart';

class SizeConfig {
  var screenWidth;
  var screenHeight;
  var blockSizeHorizontal;
  var blockSizeVertical;

  rebuild(context){
    this.screenWidth = MediaQuery.of(context).size.width;
    this.screenHeight = MediaQuery.of(context).size.height;
    this.blockSizeHorizontal = this.screenWidth / 100;
    this.blockSizeVertical = this.screenHeight / 100;
  }
}