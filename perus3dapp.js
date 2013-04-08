
// refactored from Chapter 3 code example in WebGL Up and Running book
// https://github.com/tparisi/WebGLBook

var renderer = null, 
		scene = null;
		
function setUpRender() {
		// Grab our container div
        var container = document.getElementById("container");

        // Create the Three.js renderer, add it to our div
	    renderer = new THREE.WebGLRenderer( { antialias: true } );
	    renderer.setSize(container.offsetWidth, container.offsetHeight);
	    container.appendChild( renderer.domElement );

	    // Create a new Three.js scene
	    scene = new THREE.Scene();
	}
	
function Perus3Dapp () {
	
	
	this.init = function() {
		setUpRender();
		setCamera();
		letThereBeLight();

        this.addMouseHandler();
		
	}
	
	this.run = function () {run(); };
	
	this.addMouseHandler =	function ()
		{
			var dom = renderer.domElement;
			dom.addEventListener( 'mouseup', this.onMouseUp, false);
		}
	
	this.onMouseUp = function (event)
		{
			event.preventDefault();
			animating = !animating;
		}	
	this.add = function (kdobjekti ){
	scene.add(kdobjekti.mesh);
	}
	
	this.init()
					
	}
	
var run = function()
		{
			// Render the scene
			renderer.render( scene, camera );

			// Spin the kolmedobj for next frame
			if (animating)
			{
				 animate();  
			}
			// Ask for another frame
			requestAnimationFrame(run);	
		}