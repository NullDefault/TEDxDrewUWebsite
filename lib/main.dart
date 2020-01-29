import 'package:flutter/material.dart';
import 'landing_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return new LandingPage();
  }

}

isLarge(BuildContext context) => MediaQuery.of(context).size.width >= 1100;
