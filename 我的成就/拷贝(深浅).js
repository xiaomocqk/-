Object.prototype.Clone = function() {
	var objClone;
	// 可能是Object/Function/Array/...等等
	objClone = this.constructor == Object ? new this.constructor() : new this.constructor(this.valueOf());
	for (var key in this) {
		if (objClone[key] != this[key]) {
			/*if (typeof(this[key]) == 'object') {
				objClone[key] = this[key].Clone();
			} else {
				objClone[key] = this[key];
			}*/
			objClone[key] = typeof(this[key]) == 'object' ? this[key].Clone() : this[key];
		}
	}
	objClone.toString = this.toString;
	objClone.valueOf = this.valueOf;
	return objClone;
}