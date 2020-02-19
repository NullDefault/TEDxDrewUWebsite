import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:getflutter/getflutter.dart';

class NavigationButtons {
//----------------------------------------------------------------------------//
  GFButtonShape _buttonShape = GFButtonShape.standard;
  Color _buttonColor = Colors.black;
  Color _buttonHoverColor = Colors.red;
  Color _buttonHighlightColor = Colors.red;
  List<String> _buttonText = ["About", "Team", "Catalog", "Tickets"];
//----------------------------------------------------------------------------//
  Widget getDesktopLayout(buttonWidth, buttonHeight) {
    var _buttonSeparation = buttonWidth / 8;
    TextStyle _buttonStyle = TextStyle(
        color: Colors.white,
        fontFamily: 'Raleway',
        fontSize: 28,
        height: 2,
        fontWeight: FontWeight.bold);
    var _buttons = [
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[0],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.questionCircle),
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[1],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.users),
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[2],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.calendarAlt),
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[3],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.ticketAlt),
        ),
      ),
    ];
    return Container(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: _buttons,
    ));
  }
//----------------------------------------------------------------------------//
  Widget getMobileLayout(buttonWidth, buttonHeight) {
    var _buttonSeparation = buttonWidth / 8;
    TextStyle _buttonStyle = TextStyle(
        color: Colors.white,
        fontFamily: 'Raleway',
        fontSize: 20,
        height: 2,
        fontWeight: FontWeight.bold);
    List<Widget> _topRow = [
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[0],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.questionCircle),
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[1],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.users),
        ),
      ),
    ];
    List<Widget> _botRow = [
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[2],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.calendarAlt),
        ),
      ),
      SizedBox(
        width: _buttonSeparation,
      ),
      Container(
        width: buttonWidth,
        height: buttonHeight,
        child: GFButton(
          onPressed: () {},
          color: _buttonColor,
          hoverColor: _buttonHoverColor,
          highlightColor: _buttonHighlightColor,
          text: _buttonText[3],
          textStyle: _buttonStyle,
          shape: _buttonShape,
          icon: Icon(FontAwesomeIcons.ticketAlt),
        ),
      ),
    ];
    return Container(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: _topRow,
          ),
          SizedBox(
            height: buttonHeight / 3,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: _botRow,
          )
        ],
      ),
    );
  }
//----------------------------------------------------------------------------//
}
