const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Physics,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Physics.Acts.ApplyForceAtAngle,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Physics.Acts.ApplyImpulse,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{实体: 0},
	{物理: 0},
	{精灵: 0},
	{精灵2: 0},
	{精灵3: 0},
	{鼠标: 0},
	{精灵4: 0},
	{音频: 0},
	{文本: 0},
	{文本3: 0},
	{文本4: 0},
	{精灵5: 0},
	{Sadness: 0},
	{isGameOpened: 0}
];

self.InstanceType = {
	精灵: class extends self.ISpriteInstance {},
	精灵2: class extends self.ISpriteInstance {},
	精灵3: class extends self.ISpriteInstance {},
	鼠标: class extends self.IInstance {},
	精灵4: class extends self.ISpriteInstance {},
	音频: class extends self.IInstance {},
	文本: class extends self.ITextInstance {},
	文本3: class extends self.ITextInstance {},
	文本4: class extends self.ITextInstance {},
	精灵5: class extends self.ISpriteInstance {}
}