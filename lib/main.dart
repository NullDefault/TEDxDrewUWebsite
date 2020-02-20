import 'package:flutter/material.dart';
import 'package:tedx/landing_page.dart';
import 'package:tedx/ticket_page.dart';
import 'package:tedx/size_config.dart';
//----------------------------------------------------------------------------//
void main() => runApp(MyApp());
//----------------------------------------------------------------------------//
// ignore: must_be_immutable
class MyApp extends StatelessWidget {
  SizeConfig screenSizeData = SizeConfig();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LandingPage(screenSizeData),
      routes: <String, WidgetBuilder>{
        '/tickets': (BuildContext context) {
          return TicketPage(screenSizeData);
        }
      },
    );
  }
//----------------------------------------------------------------------------//
}
