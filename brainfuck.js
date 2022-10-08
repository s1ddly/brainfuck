/*
JS file for the brainfuck interpreter
Usage:
1. Import the js file into your html page
2. Call the brainfuck function with the 2 arguments
	2a. Argument 1 is codeblock, this is a block of brainfuck code to execute, in string format.
	2b. Argument 2 is the input for this codeblock, so far as a string, but will expand on this as the project evolves
*/
var bfmem = Array(30000).fill(0);
var bfind = 0;

function brainfuck(bfcode, bfinput){
	
}

function bfincrement(){
	if(bfmem[bfind] == 255){
		console.log("Memory value overflow, setting memory index to 0");
		bfmem[bfind] = 0;
	} else {
		bfmem[bfind] = bfmem[bfind] + 1;
	}
}

function bfdecrement(){
	if(bfmem[bfind] == 255){
		console.log("Memory value underflow, setting memory index to 255");
		bfmem[bfind] = 0;
	} else {
		bfmem[bfind] = bfmem[bfind] - 1;
	}
}

function bfright(){
	if(bfind == 29999){
		console.log("Memory reference overflow, setting memory index to 0");
		bfind = 0;
	} else {
		bfind = bfind + 1;
	}
}

function bfleft(){
	if(bfind == 0){
		console.log("Memory reference underflow, setting memory index to 29999");
		bfind = 29999;
	} else {
		bfind = bfind - 1;
	}
}

function bfinput(){
	
}

function bfoutput(){
	
}
