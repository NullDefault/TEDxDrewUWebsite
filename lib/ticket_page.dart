import 'package:flutter/material.dart';
import 'package:animated_background/animated_background.dart';

class TicketPage extends StatefulWidget{
  @override
  State<StatefulWidget> createState() {
    return TicketPageState();
  }
}

class TicketPageState extends State<TicketPage> with TickerProviderStateMixin{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: AnimatedBackground(
        behaviour: RandomParticleBehaviour(),
        vsync: this,
        child: Container(
          color: Colors.black,
          child: Container(
            color: Colors.redAccent,
            constraints: BoxConstraints(
              maxHeight: 600.0,
              maxWidth: 1000.0,
              minHeight: 300,
              minWidth: 500,
            ),
          ),
          alignment: Alignment(0.0, 0.0),
        ),
      ),
    );
  }

}