import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:tedx/app_config.dart';
import 'package:tedx/components/footer_painter.dart';
import 'package:url_launcher/url_launcher.dart';

// Used to make the website Footer
class Footer extends StatelessWidget {
  AppConfig screenData;

  Footer(AppConfig screenData){
    this.screenData = screenData;
  }

  @override
  Widget build(BuildContext context) {
    this.screenData.rebuildUpdate(context);
    var _footerHeight = 7 * screenData.blockSizeVertical;
    var _textSocialSeparation = 8 * screenData.blockSize;
    var _textSize = 1.6 * screenData.blockSizeVertical;
    var _iconSize = 3.4 * screenData.blockSizeVertical;
    const _socialPadding = 8.0;

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
          height: _footerHeight,
          color: Colors.red,
          child: Center(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  "This independent TEDx event is operated under license from TED. | tedx@drew.edu",
                  style: TextStyle(
                      color: Colors.black,
                      fontFamily: 'Helvetica',
                      fontSize: _textSize),
                ),
                SizedBox(width: _textSocialSeparation),
                // Twitter
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed: () => launch('https://twitter.com/tedxdrewuni'),
                      icon: Icon(FontAwesomeIcons.twitterSquare,
                          size: _iconSize, color: Colors.black)),
                ),
                // Facebook
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed:  () => launch('https://www.facebook.com/TEDxDrewU/'),
                      icon: Icon(FontAwesomeIcons.facebookSquare,
                          size: _iconSize, color: Colors.black)),
                ),
                // Instagram
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed:  () => launch('https://www.instagram.com/tedxdrewuniversity/'),
                      icon: Icon(FontAwesomeIcons.instagram,
                          size: _iconSize, color: Colors.black)),
                ),
                // YouTube
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed:  () => launch('https://www.youtube.com/playlist?list=PLsRNoUx8w3rOvVu1x8Vn5ECqMoYcYoJNw'),
                      icon: Icon(FontAwesomeIcons.youtubeSquare,
                          size: _iconSize, color: Colors.black)),
                ),
                // Flickr
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed:  () => launch('https://www.flickr.com/photos/157641040@N04/albums/with/72157667913519498'),
                      icon: Icon(FontAwesomeIcons.flickr,
                          size: _iconSize, color: Colors.black)),
                ),
                // LinkedIn
                Padding(
                  padding: const EdgeInsets.only(
                      left: _socialPadding, right: _socialPadding),
                  child: IconButton(
                      onPressed:  () => launch('https://www.linkedin.com/company/tedxdrewuniversity/'),
                      icon: Icon(FontAwesomeIcons.linkedinIn,
                          size: _iconSize, color: Colors.black)),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
