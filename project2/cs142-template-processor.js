"use strict";

function Cs142TemplateProcessor() {
	function Freind(){
		this.arrive=function(){
			consol.log("Hello");
		};
	}
	var friend1 = new Freind();
	var friend2 = new Freind();
	friend2.arrive = funciton(){
		console.log("Hi");
	};
	friend1.arrive();
	friend2.arrive();

	Freind.prototype.leave = function() {
		console.log("Bye");
	};
	friend1.leave();
	friend2.leave();
	var friend3 = new Freind();
	friend3.leave();
	friend3.leave = function (){
		console.log("Adieu");
	};
	friend3.leave();
	friend2.leave();
};

