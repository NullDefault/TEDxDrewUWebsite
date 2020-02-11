import 'package:flutter/material.dart';

class AppConfig{
  var width;
  var height;
  var blockSize;
  var blockSizeVertical;

  rebuildUpdate(context){
    this.width = MediaQuery.of(context).size.width;
    this.height = MediaQuery.of(context).size.height;
    this.blockSize = this.width / 100;
    this.blockSizeVertical = this.height / 100;
  }

}