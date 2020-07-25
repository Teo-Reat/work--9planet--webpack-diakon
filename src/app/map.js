$(function () {
	if ($('#map').length) {
		var markers = [
			[54.942092, 37.405220],
			[54.974596, 37.445918],
			[55.843894, 38.731038]
		]
		var mapHeight = $('#map').height();

		ymaps.ready(function () {

			var map = new ymaps.Map("map", {
					center: [54.942092, 37.405220],
					zoom: 6,
					behaviors: ['default'],
					controls: []
				}),
				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<span style="font-weight: 600;font-size: 18px;">{{ properties.geoObjects.length }}</span>'
				),
				clusterer = new ymaps.Clusterer({
					clusterIcons: [
						{
							href: 'images/mark-big.svg',
							size: [57, 67],
							offset: [-27.5, -67],
							iconContentOffset: [23, 15],
						},
						{
							href: 'images/mark-big.svg',
							size: [90, 108],
							offset: [-45, -108],
							iconContentOffset: [25, 25],
						}],
					clusterNumbers: [100],
					clusterIconContentLayout: MyIconContentLayout
				});


			var MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
				`
<div class="popover">
	<div class="popover__arrow"></div>
	<div class="popover__inner">
		<a class="popover__close" href="#">
			<svg class="icon icon-close">
				<use xlink:href="#icon-close"></use>
			</svg>
		</a>
		$[[options.contentLayout observeSize minWidth=300 maxWidth=432]]
		<span class="popover__tail"></span>
	</div>
</div>
`, {
					build: function () {
						this.constructor.superclass.build.call(this);

						this._$element = $('.popover', this.getParentElement());

						this.applyElementOffset();

						this._$element.find('.popover__close')
							.on('click', $.proxy(this.onCloseClick, this));
					},
					clear: function () {
						this._$element.find('.popover__close')
							.off('click');

						this.constructor.superclass.clear.call(this);
					},
					onSublayoutSizeChange: function () {
						MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

						if (!this._isElement(this._$element)) {
							return;
						}

						this.applyElementOffset();

						this.events.fire('shapechange');
					},
					applyElementOffset: function () {
						this._$element.css({
							left: -(this._$element[0].offsetWidth / 2),
							top: -(this._$element[0].offsetHeight + this._$element.find('.popover__arrow')[0].offsetHeight)
						});
					},
					onCloseClick: function (e) {
						e.preventDefault();

						this.events.fire('userclose');
					},
					getShape: function () {
						if (!this._isElement(this._$element)) {
							return MyBalloonLayout.superclass.getShape.call(this);
						}

						var position = this._$element.position();

						return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
							[position.left, position.top], [
								position.left + this._$element[0].offsetWidth,
								position.top + this._$element[0].offsetHeight + this._$element.find('.popover__arrow')[0].offsetHeight
							]
						]));
					},
					_isElement: function (element) {
						return element && element[0] && element.find('.popover__arrow')[0];
					}
				});

			var MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="popover__content">$[properties.balloonContent]</div>'
			);

			map.behaviors.disable(['scrollZoom']);

			let geoObjects = [];

			for (var i = 0; i < markers.length; i++) {
				var marker = markers[i];
				//       balloon__phone = '',
				//       balloon__email = '',
				//       balloon__site = '';

				// if (marker['PHONE']) {
				//   balloon__phone =  '<p class="partnerPhone"><i class="fas fa-phone"></i> <a href=tel:"'+marker['PHONE']+'">'+marker['PHONE']+'</a></p>';
				// }

				// if (marker['EMAIL']) {
				//   balloon__email = '<p class="partnerEmail"><i class="fas fa-envelope"></i> <a href="mailto:'+marker['EMAIL']+'">'+marker['EMAIL']+'</a></p>';
				// }

				// if (marker['SITE']) {
				//   balloon__site = '<p class="partnerSite"><i class="fas fa-home"></i> <a href="//'+marker['SITE']+'" target="_blank" title="'+marker['NAME']+'">'+marker['SITE']+'</a></p>';
				// }

				var balloon = `

<div class="balloon">
	<div class="balloon__header">
		<div class="balloon__title">
			<a href="#">Медико-биологический центр Фармалад</a>
		</div>
	</div>
	<div class="balloon__body">
		<div class="balloon__address">
			<svg class="icon icon-mark"><use xlink:href="#icon-mark"></use></svg>
			<span class="">г. Воронеж, ул. Правды, дом 26, офис 2</span>
		</div>
		<div class="balloon__phone">
			<svg class="icon icon-tel"><use xlink:href="#icon-tel"></use></svg>
			<a href="tel:+7 (926) 047-32-22" class="">+7 (926) 047-32-22</a>
		</div>
		<div class="balloon__email">
			<svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
			<span class="">somemail@mail.com</span>
		</div>
		<div class="balloon__work-time">
			<svg class="icon icon-time"><use xlink:href="#icon-time"></use></svg>
			<span class="">с 10:00 до 22:00</span>
		</div>
	</div>
</div>

`;

				geoObjects[i] = new ymaps.Placemark(marker, {
					balloonContent: balloon,
					hintContent: 'Магазин в Серпухове',
				}, {
					balloonLayout: MyBalloonLayout,
					balloonContentLayout: MyBalloonContentLayout,
					iconLayout: 'default#image',
					iconImageHref: 'images/mark-small.svg',
					iconImageSize: [39, 45],
					iconImageOffset: [-19.5, -45]
				});

			}

			clusterer.add(geoObjects);
			map.geoObjects.add(clusterer);

			map.controls.add('zoomControl', {
				size: 'small',
				float: 'none',
				position: {
					top: mapHeight / 2 - 30,
					right: '45px'
				}
			});
		});
	}
});
