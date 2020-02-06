import 'package:flutter/material.dart';
import 'footer_painter.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class Footer extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Positioned(
          left: 0.0,
          right: 0.0,
          top: 0.0,
          bottom: 0.0,
          child: new CustomPaint(
            painter: FooterPainter(),
            size: Size.infinite,
          ),
        ),
        Container(
          height: 70.0,
          color: Colors.red,
          child: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "This independent TEDx event is operated under license from TED. | tedx@drew.edu",
                  style: TextStyle(
                      color: Colors.black, fontFamily: 'Helvetica', fontSize: 16),
                ),
                SizedBox(
                    width: 80
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.twitter, size: 34, color: Colors.black)
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.facebook, size: 34, color: Colors.black)
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.instagram, size: 34, color: Colors.black)
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                  child: IconButton(
                      onPressed: () {},
                      icon: Icon(FontAwesomeIcons.youtube, size: 34, color: Colors.black)
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}