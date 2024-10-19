function init(){
			let baseTexbox = document.getElementById("a");
			let heightTexbox = document.getElementById("height");
		
			baseTexbox.value = "3.1";
			heightTexbox.value = "2";
		}
	
		function readBase(e){
		
			let baseTexbox = document.getElementById("a");
			
			console.log('key ' + e.keyCode);
			
			if (e.keyCode == 13){
				computeTriangle();				
			}
			else if (e.keyCode < 48 || e.keyCode > 57){
				heightTexbox.value = '';
			}
		}
	
		function readHeight(e){
		
			let heightTexbox = document.getElementById("height");
		
			console.log('key ' + e.keyCode);
			
			if (e.keyCode == 13){
				computeTriangle();				
			}
			else if (e.keyCode < 48 || e.keyCode > 57){
				heightTexbox.value = '';
			}
		}
		
		function computeTriangle() {
		
			let baseTexbox = document.getElementById("a");
			let heightTexbox = document.getElementById("height");
			let t=new Triangle(baseTexbox.value, heightTexbox.value);
			console.log(t.surface());
			
			let surfaceDiv = document.getElementById("surface");
			surfaceDiv.innerText="surface " +t.surface(); 
		}
	
		class Shape {
		
			constructor(){
			}
			
			perimeter(){
			}
			
			surface(){
			
			}
		
		}
		
		class Triangle extends Shape {
		
			constructor(a, h){
				super();
				this.a = a;
				this.h = h;
			}
			
			surface(){
				return this.a * this.h / 2;
			}
		}
		
		        const canvas = document.createElement('canvas');
        this.context = canvas.getContext('2d');
		let t1 = new Triangle(2, 1);
		