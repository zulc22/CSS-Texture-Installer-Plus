# CSS Texture Installer Plus (v1.4.0)
![Installer Screenshot](https://github.com/zulc22/CSS-Texture-Installer-Plus/blob/master/screenshots/Capture.PNG?raw=true)

### An easy to use, straight forward Counter Strike: Source texture installer for Garry's Mod. Utilizies steamcmd under the hood to obtain resources legally, direct from Valve.

## How to install
1. Download the zip file from the [releases page](https://github.com/zulc22/CSS-Texture-Installer-Plus/releases).
2. Extract the ZIP file and run the executable inside called `cssource-installer.exe`.
3. Wait until the installer gets to the prompt asking `Would you like to start installing the CSSource textures?`. Press `y` on your keyboard.
4. From there, the installer should automatically start downloading the needed dependecies such as `steamcmd`. Everything from this point is automated, so as long as your computer doesn't automtically go into rest mode, feel free to let it do its thing for 5-10 minutes (time may vary depending on connection speeds)
5. After the installation is finished, the installer will automatically clean up after itself, from which point you are free to delete it off your computer or save it for later use if for whatever reason your textures get messed up or you want to share the installer with a friend.

## Changelog
### v1.4.0
Replaced the external library with another, among other tweaks to get the project building and running properly on Node 22.
### v1.3.0
Fixed issues with a custom registry library by replacing it with an external library.
### v1.2.0
First release - added detection of the Steam install directory to the project. (This project was originally a pull request, the author just told me to fork, lol)