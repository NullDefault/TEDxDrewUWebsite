import 'package:flutter/material.dart';
import 'landing_page.dart';
import 'size_config.dart';
import 'ticket_page.dart';

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
