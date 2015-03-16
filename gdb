backtrace full
man gdb 
run
run 1 ”abc” passes 1 via argv[1] and "abc" as argv[2]
run `printf ”AAAAAAAAAAAA”` we’re passing the output of the print (very useful when you need to pass non printable characters such as raw bytes)
break *0xDEADBEAF places a break point at that address
break *main+1 with debugging symbols this can be less painful catch syscall block the execution when a syscall happens
c
step
next
break linenumber
watch variable
disable breakpointnumber
display a var every step: display variablename
print nomevariable (or expression)
x/d &nomevariable(int, or x/f for floats etc.)
info breakpoints
q quits
k kills
gdb --args to pass arguments
ni: allows to procede instruction per instruction
next 4: moves 4 lines ahead (if you have the line-numbers information in the binary)
continue: runs until the next break point (if any)
info registers: to inspect the content of the registers
info frame: to see the values of the stack frame related to the function where we are in
info file: print the information about the sections of the binary
Some useful view of the stack is achievable with:
x/100wx $esp: prints 100 words of memory from the address found in the ESP to ESP+100 (x = hexadecimal formatting)
x/10wo $ebp-100: prints 10 words of memory from EBP-100 to EBP-100+10 (o = octal formatting)
x/s $eax: prints the elements pointed by EAX (s = string formatting)
Do you have debug symbols? (i.e., gcc -ggdb)
print args: prints info about the main parameters
print a: prints the content of variable ‘a’
print *b: prints the value pointed by ‘b’

You’re not a big fun of the gdb command line?
Give a simple text-based interface to it 
layout asm: turn the interface to the assembly view always visible during debugging
layout src: if your binary has the dubugging symbols you will have your c source view visible
layout reg: add to the interface the register status view. It could be used in combination with one of the view described above
gdb -tui ./mybin runs gdb directly in this Text User Interface

The ~/.gdbinit file:
set history save on
set follow-fork-mode child
set disassembly-flavor att

