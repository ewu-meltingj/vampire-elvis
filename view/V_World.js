if(oso === undefined) {var oso = {};}

oso.View.prototype.renderWorld = function(world, scene, camera) {
	if(!world.rendering)
		render();

	function render() {
		var geometry = new THREE.BoxGeometry(
			world.dimension.width, 
			world.dimension.height, 
			world.dimension.depth
		);
		var material = new THREE.MeshLambertMaterial( { 
			color: 0xffffff, 
			shading: THREE.FlatShading, 
			overdraw: 2.5
		});
		if(world.texture) {
			material.map = THREE.ImageUtils.loadTexture(world.texture);
		}
		world.rendering = new THREE.Mesh( geometry, material );
		world.rendering.position.x = world.position.x;
		world.rendering.position.y = world.position.y;
		world.rendering.position.z = world.position.z;

		scene.add(world.rendering);

	};
}