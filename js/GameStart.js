var InfiniteScroller = InfiniteScroller || {};

InfiniteScroller.GameStart = function () { };

var background2;
var button;

InfiniteScroller.GameStart.prototype = {
	create: function () {
		background2 = this.add.sprite(0, 0, "img");
		background2.scale.setTo(0.95)

		button = this.game.add.button(373, 210, 'button', function () {
			this.state.start('Game');
		}, this);
		button.anchor.setTo(0.4)
	},
	update: function () {

	}



};
