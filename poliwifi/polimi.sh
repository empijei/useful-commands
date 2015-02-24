sudo ifconfig wlan0 up
sudo iwconfig wlan0 essid polimi-protected
sudo wpa_supplicant -i wlan0 -D wext -c $PWD/polimi-protected.conf -d
