import 'package:flutter/material.dart';
import 'package:tedx/landing_page.dart';
import 'package:tedx/ticket_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: LandingPage(),
      routes: <String, WidgetBuilder>{
        '/tickets':(BuildContext context){
          return TicketPage();
        }
      },
    );
  }
}
