import 'package:flutter/widgets.dart';

// Size Config - used to maintain element sizes between different resolutions

class SizeConfig {
  var screenWidth;
  var screenHeight;
  var blockSizeHorizontal;
  var blockSizeVertical;
  var sizeFactor; // Website is developed in 1080p resolution and this variable is used to scale it to other screen sizes

  rebuild(context) {
    this.screenWidth = MediaQuery.of(context).size.width;
    this.screenHeight = MediaQuery.of(context).size.height;
    this.blockSizeHorizontal = this.screenWidth / 100;
    this.blockSizeVertical = this.screenHeight / 100;
    this.sizeFactor = this.screenWidth / 1980;
  }
}
