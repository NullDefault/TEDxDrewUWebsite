import 'package:flutter/material.dart';

class LandingPage extends StatefulWidget {
  @override
  LandingPageState createState() => LandingPageState();
}

class LandingPageState extends State {
  Widget _tedxLogo = Image(image: AssetImage('lib/assets/ted_x_logo.png'));
  Widget _officialLogo =
      Image(image: AssetImage('lib/assets/official_logo_vertical.png'));

  var _navigationButtons = [
    RaisedButton(
        onPressed: () {},
        padding: EdgeInsets.all(20),
        color: Colors.red,
        child:
            Text('About', style: TextStyle(fontSize: 20, color: Colors.black))),
    SizedBox(
      width: 100,
    ),
    RaisedButton(
        onPressed: () {},
        padding: EdgeInsets.all(20),
        color: Colors.red,
        child:
            Text('Team', style: TextStyle(fontSize: 20, color: Colors.black))),
    SizedBox(
      width: 100,
    ),
    RaisedButton(
        onPressed: () {},
        color: Colors.red,
        padding: EdgeInsets.all(20),
        child: Text('Catalog',
            style: TextStyle(fontSize: 20, color: Colors.black))),
    SizedBox(
      width: 100,
    ),
    RaisedButton(
        onPressed: () {},
        color: Colors.red,
        padding: EdgeInsets.all(20),
        child: Text('Tickets',
            style: TextStyle(fontSize: 20, color: Colors.black))),
  ];

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: "TEDxDrewUniversity",
      home: _renderLandingPage(),
    );
  }

  Widget _renderLandingPage() {
    return Material(
      type: MaterialType.transparency,
      child: new Container(
          color: Colors.black,
          child: FittedBox(
            fit: BoxFit.contain,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: <Widget>[
                _renderTopRow(),
                _renderButtonRow(),
              ],
            ),
          )),
    );
  }

  Widget _renderTopRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Container(
          width: 740,
          height: 740,
          child: Align(
            alignment: Alignment.topLeft,
            child: _officialLogo,
          ),
        ),
        Column(
          children: <Widget>[
            Container(
              width: 500,
              height: 500,
              child: _tedxLogo,
            ),
            Padding(
              padding: const EdgeInsets.only(top: 40),
              child: Text(
                '2020',
                style: TextStyle(fontSize: 70, color: Colors.red),
              ),
            )
          ],
        ),
        Container(
          width: 740,
          height: 740,
        )
      ],
    );
  }

  Widget _renderButtonRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: _navigationButtons,
    );
  }
}
