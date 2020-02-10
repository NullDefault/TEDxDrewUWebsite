import 'package:flutter/material.dart';
import 'package:animated_background/animated_background.dart';
import 'package:getflutter/getflutter.dart';
import 'package:url_launcher/url_launcher.dart';

class TicketPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return TicketPageState();
  }
}

class TicketPageState extends State<TicketPage> with TickerProviderStateMixin {
  BoxDecoration ticketBGdecoration = BoxDecoration(color: Colors.red);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: AnimatedBackground(
        behaviour: RacingLinesBehaviour(),
        vsync: this,
        child: Container(
          child: Stack(
            children: <Widget>[
              Container(
                  color: Colors.redAccent,
                  constraints: BoxConstraints(
                    maxHeight: 600.0,
                    maxWidth: 1000.0,
                    minHeight: 300,
                    minWidth: 500,
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: <Widget>[
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Center(
                            child: Padding(
                              padding: const EdgeInsets.only(top: 20),
                              child: Container(
                                decoration: ticketBGdecoration,
                                child: Padding(
                                  padding: const EdgeInsets.all(20.0),
                                  child: Text(
                                    "Tickets",
                                    style: TextStyle(
                                        fontSize: 36, color: Colors.white),
                                  ),
                                ),
                              ),
                            ),
                          )
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Column(
                            children: <Widget>[
                              Container(
                                decoration: ticketBGdecoration,
                                child: Column(
                                  children: <Widget>[
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        "General Admission",
                                        style: TextStyle(fontSize: 20),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        '\u{0024} 20 (Early Bird Price)',
                                        style: TextStyle(
                                            fontSize: 24, color: Colors.white),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        'Full access to the event and all related activities.',
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        'Includes refreshments and gift packages.',
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        "Available to all members of the general public.",
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        "Transactions on Eventbrite are subject to additional taxes and fees.",
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 51,
                                    ),
                                    Padding(
                                      padding:
                                          const EdgeInsets.only(bottom: 30),
                                      child: Container(
                                        height: 50,
                                        width: 100,
                                        child: GFButton(
                                          onPressed: () => launch(
                                              'https://www.eventbrite.com/e/93687908055'),
                                          color: Colors.redAccent,
                                          hoverColor: Colors.red,
                                          text: "Purchase",
                                          icon:
                                              Icon(Icons.local_play, size: 16),
                                          textStyle:
                                              TextStyle(color: Colors.black),
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              )
                            ],
                          ),
                          Column(
                            children: <Widget>[
                              Container(
                                decoration: ticketBGdecoration,
                                child: Column(
                                  children: <Widget>[
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        "Student",
                                        style: TextStyle(fontSize: 20),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        '\u{0024} 5 (Early Bird Price)',
                                        style: TextStyle(
                                            fontSize: 24, color: Colors.white),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        'Full access to the event and all related activities.',
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        'Includes refreshments and gift packages.',
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        "Available to all college and high school students with valid ID",
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    Padding(
                                      padding: const EdgeInsets.all(8.0),
                                      child: Text(
                                        "Transactions on Eventbrite are subject to additional taxes and fees.",
                                        style: TextStyle(fontSize: 14),
                                      ),
                                    ),
                                    SizedBox(
                                      height: 50,
                                    ),
                                    Padding(
                                      padding:
                                          const EdgeInsets.only(bottom: 30),
                                      child: Container(
                                        height: 50,
                                        width: 100,
                                        child: GFButton(
                                          onPressed: () => launch(
                                              'https://www.eventbrite.com/e/93687908055'),
                                          color: Colors.redAccent,
                                          hoverColor: Colors.red,
                                          text: "Purchase",
                                          icon:
                                              Icon(Icons.local_play, size: 16),
                                          textStyle:
                                              TextStyle(color: Colors.black),
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              )
                            ],
                          )
                        ],
                      ),
                      SizedBox(
                        height: 100,
                      )
                    ],
                  )),
              Positioned(
                top: 10,
                right: 10,
                child: IconButton(
                  icon: Icon(Icons.cancel, color: Colors.black, size: 30),
                  onPressed: () {
                    Navigator.pop(context);
                  },
                )
              )
            ],
          ),
          alignment: Alignment(0.0, 0.0),
        ),
      ),
    );
  }
}
