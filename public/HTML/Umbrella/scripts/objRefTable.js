const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Physics,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Mouse.Exps.X
	];
};
self.C3_JsPropNameTable = [
	{实体: 0},
	{物理: 0},
	{精灵: 0},
	{精灵2: 0},
	{精灵3: 0},
	{鼠标: 0},
	{精灵4: 0}
];

self.InstanceType = {
	精灵: class extends self.ISpriteInstance {},
	精灵2: class extends self.ISpriteInstance {},
	精灵3: class extends self.ISpriteInstance {},
	鼠标: class extends self.IInstance {},
	精灵4: class extends self.ISpriteInstance {}
}