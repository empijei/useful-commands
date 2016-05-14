motd(){
if [[ -n $SSH_CONNECTION ]] ; then
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
fi
}
motd
