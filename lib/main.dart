import 'package:flutter/material.dart';
import 'package:tedx/landing_page.dart';
import 'package:tedx/ticket_page.dart';
import 'package:tedx/app_config.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    AppConfig screenData = AppConfig();

    return MaterialApp(
      home: LandingPage(screenData),
      routes: <String, WidgetBuilder>{
        '/tickets':(BuildContext context){
          return TicketPage(screenData);
        }
      },
    );
  }
}
