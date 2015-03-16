sudo ifconfig wlp2s0b1 up
sudo iwconfig wlp2s0b1 essid polimi-protected
sudo wpa_supplicant -i wlp2s0b1 -D wext -c $PWD/polimi-protected.conf -d
