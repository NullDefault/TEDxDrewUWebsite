import 'package:flutter/material.dart';
import 'package:getflutter/getflutter.dart';
import 'draw_circle.dart';

class NavigationButtons extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    Widget _circle = CustomPaint(painter: DrawCircle());

    double _buttonSeparation = 50;
    double _buttonFontSize = 26;
    double _iconSize = 36;
    GFButtonShape _buttonShape = GFButtonShape.pills;

    TextStyle _buttonStyle =
        TextStyle(fontSize: _buttonFontSize, color: Colors.black);

    Color _buttonColor = Colors.redAccent;
    Color _buttonHoverColor = Colors.red;
    Color _buttonHighlightColor = Colors.deepOrange;

    var _buttonText = ["About", "Team", "Catalog", "Tickets"];
    var _buttonIcons = [
      Icon(Icons.help, size: _iconSize),
      Icon(Icons.supervised_user_circle, size: _iconSize),
      Icon(Icons.local_library, size: _iconSize),
      Icon(Icons.local_play, size: _iconSize,)
    ];

    double _buttonWidth = 180;
    double _buttonHeight = 70;

    var _navigationButtons = [
      Container(
        width: _buttonWidth,
        height: _buttonHeight,
        child: GFButton(
          onPressed: null,
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[0],
          icon: _buttonIcons[0],
          textStyle: _buttonStyle,
          shape: _buttonShape,
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(child: _circle),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: _buttonWidth,
        height: _buttonHeight,
        child: GFButton(
          onPressed: null,
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[1],
          icon: _buttonIcons[1],
          textStyle: _buttonStyle,
          shape: _buttonShape,
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(child: _circle),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: _buttonWidth,
        height: _buttonHeight,
        child: GFButton(
          onPressed: null,
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[2],
          icon: _buttonIcons[2],
          textStyle: _buttonStyle,
          shape: _buttonShape,
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(child: _circle),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: _buttonWidth,
        height: _buttonHeight,
        child: GFButton(
          onPressed: () {
            Navigator.pushNamed(context, '/tickets');
          },
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[3],
          icon: Hero(
            tag: 'ticket_tag',
            child: _buttonIcons[3]
          ),
          textStyle: _buttonStyle,
          shape: _buttonShape,
        ),
      )
    ];

    return Row(children: _navigationButtons);
  }
}
