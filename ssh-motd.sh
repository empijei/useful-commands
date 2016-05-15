motd(){
	local TIMEOFDAY=""
	d=$(date +%H)
	if [ $d -lt 12 ]
	then
		TIMEOFDAY="Good Morning"
	elif [ $d -lt 16 ]
	then
		TIMEOFDAY="Good Afternoon"
	elif [ $d -lt 20 ]
	then
		TIMEOFDAY="Good Evening"
	else 
		TIMEOFDAY="Good Night"
	fi
	figlet "$TIMEOFDAY, $(whoami)"
	local PADDING="$(($(tput cols)/2))"
	local SHIFTPAD="$(($PADDING-13))" #13 is half the width of the ascii arti
	local PAD="$(printf '%-'"$SHIFTPAD"'s%s')"
	while read line
	do
		echo "$PAD$line"
	done < $HOME/.muffet
}
if [[ -n $SSH_CONNECTION ]] ; then
	motd
fi

