;
(function(w, d, $, undefined) {
	/**
	 * Drag image status 
	 * flag Draggable logo 
	 * startX, startY Drag the starting point 
	 * left, top Drag position 
	 */
	var ImgStatus = {
		flag: false,
		startX: 0,
		startY: 0,
		left: 0,
		top: 0
	}

	/* ******************* Waterfall constructor  ********************* */
	var Pinterest = function(elem, config) {
		this.$elem = elem;
		this.$imgs = this.$elem.find('img');
		this.images = [];
		this.config = config;
		this.streams = [];
		this.responsive = config.responsive ? config.responsive : [];
		this.setState();

		//Bind events to instances 
		this.onEvent();
	}

	Pinterest.prototype = {
		/**
		 * Set basic properties of waterfall 
		 */
		setState: function() {
			var len = this.responsive.length;
			//Determine whether to set up responsive 
			if (len > 0) {
				var WINDOW_WIDTH = $(w).width();
				for (var i = len - 1; i >= 0; i--) {
					var config = this.responsive[i];
					var maxWidth = config.maxWidth ? config.maxWidth : 99999;
					var minWidth = config.minWidth ? config.minWidth : 0;
					if (maxWidth >= WINDOW_WIDTH && minWidth <= WINDOW_WIDTH) {
						this.resetLine(config);
						return false;
					}
				}
			}
			this.line = this.config.line ? this.config.line : 4;
			this.gap = this.config.gap ? this.config.gap : 15;
			this.width = this.config.width ? this.config.width : this.getWidth();
		},
		/**
		 * Get the width of each column of waterfall 
		 * @return {number} [default: 200]
		 */
		getWidth: function() {
			var width = this.$elem.width();
			var index = this.line + 1;
			return width ? Math.floor((width - (this.gap * index)) / this.line) : 200;
		},
		/**
		 * Set the width of each column of waterfall 
		 * @param {number} width [require]
		 */
		setWidth: function(width) {
			var that = this;
			$.each(this.streams, function(i, v) {
				v.css('width', width);
			});
		},
		/**
		 * Get the current shortest waterfall flow 
		 * @return {number} [Waterfall number]
		 */
		getMinStreams: function() {
			var that = this;
			var min = that.streams[0].height();
			var index = 0;
			for (var i = 1; i < that.line; i++) {
				var height = that.streams[i].height();
				if (min > height) {
					min = height;
					index = i;
				}
			};
			return index;
		},
		/**
		 * Plug-in binding event 
		 */
		onEvent: function() {
			//Picture in full screen 
			this.$elem.on('click', 'img', this.fullScreen);
			//Show full picture 
			$(d).on('click', '.priterest-full-img', this.fullImg);
			//Full image zoom out 
			$(d).on('click', '.priterest-shrink-btn', this.shrinkImg);
			//Full picture drag 
			$(d).on('mousedown', '.priterest-big-img', this.dragImg);
			$(d).on('mousemove', '.priterest-big-img', this.moveImg);
			$(d).on('mouseup', '.priterest-big-img', this.dropImg);
			$(d).on('mouseout', this.dropImg);
			//Follow the browser waterfall to zoom 
			$(w).resize(function() {
				this.setState();
				this.width = this.getWidth();
				this.setWidth(this.width);
				this.init();
			}.bind(this));
		},
		/**
		 * Set the title below the picture 
		 * @param { dom } img
		 */
		setTitle: function(img) {
			var __this = img;
			var that = this;
			var title = $(__this).data('title');
			var subTitle = $(__this).data('subtitle');
			var $img_wrap = $("<div class='pinterest-img-wrap' style='margin-top:" + that.gap + "px'></div>");
			$(__this).wrap($img_wrap);
			if (subTitle) {
				var $img_subtitle = $("<div class='pinterest-img-subtitle'>" + subTitle + "</div>");
				$img_subtitle.insertAfter($(__this));
			}
			if (title) {
				var $img_title = $("<div class='pinterest-img-title'>" + title + "</div>");
				$img_title.insertAfter($(__this));
			}
		},
		/* ******************* Waterfall initialization ********************* */
		init: function() {
			var that = this;
			that.$elem.children().remove();
			that.streams.length = 0;
			for (var i = 0; i < this.line; i++) {
				that.streams.push($("<div class='pinterest-stream' style='margin-left:" + that.gap + "px; margin-bottom:" + that.gap + "px;'></div>"));
				that.streams[i].appendTo(this.$elem);
			};
			that.setWidth(that.width);
			that.$imgs.css('width', '100%');

			$.each(that.$imgs, function(i, v) {
				var index = that.getMinStreams(); //Get the current shortest waterfall flow
				that.$imgs.eq(i).appendTo(that.streams[index]);
			});

			//The title is displayed below the picture (traversing a single binding-it is convenient to add a new picture when the slice is bound) 
			that.$imgs.each(function(i, v) {
				that.setTitle(v);
			});
		},
		/**
		 * Add pictures to the waterfall 
		 * @param { Array[ src, {title}, {subtitle} ] } parameter     [ src: Picture path|title: Main title|subtitle: subtitle]
		 */
		add: function(parameter) {
			var $img = $("<img src=" + parameter[0] + " style='width: 100%;'/>");
			if (parameter[1]) {
				$img.attr('data-title', parameter[1]);
			}
			if (parameter[2]) {
				$img.attr('data-subtitle', parameter[2]);
			}
			this.$imgs.push($img[0]);
			var index = this.getMinStreams();
			$img.appendTo(this.streams[index]);
			this.setTitle($img[0]);
		},
		/**
		 * Remove picture 
		 * @param { int } index Picture number 
		 */
		remove: function(index) {
			index = parseInt(index);
			if (index === undefined) {
				this.$elem.children().remove();
				return false;
			}
			var i = index < 0 ? (index + this.$imgs.length) : index;
			this.$imgs.eq(i - 1).parent().remove();
		},
		/**
		 * Reset the number of waterfalls 
		 * @param  {[ number or string or object ]} param
		 */
		resetLine: function(param) {
			var config = param;
			if (typeof config === 'number' || typeof config === 'string') {
				this.line = parseInt(config);
				this.width = this.getWidth();
			} else {
				this.line = config.line ? parseInt(config.line) : 4;
				this.gap = config.gap ? parseInt(config.gap) : 15;
				this.width = config.width ? parseInt(config.width) : this.getWidth();
			}
			this.init();
		},
		/**
		 * Show picture in full screen 
		 */
		fullScreen: function() {
			var $wrap = $("<div class='priterest-wrap'></div>");
			var $fade = $("<div class='priterest-fade'></div>");
			var $full_img = $("<img src=" + this.src + " class='priterest-full-img priterest-off'/>");

			//Mask layer click event 
			$fade.click(function() {
				$wrap.remove();
			});

			$wrap.append($fade);
			$wrap.append($full_img);
			$wrap.appendTo('body');

			//When the full screen picture is less than or equal to the full picture, the zoom is invalid 
			if ($full_img[0].naturalWidth <= $full_img.width()) {
				$full_img.css('cursor', 'default');
			} else {
				var $shrink_btn = $("<a class='priterest-shrink-btn'></a>");
				$shrink_btn.css('cursor', setCursor('zoom-out'));
				$full_img.css('cursor', setCursor('zoom-in'));
				$wrap.append($shrink_btn);
			}

			//Deliver the full-screen image appearance effect to CSS style, which is convenient for plug-in users to customize 
			setTimeout(function() {
				$full_img.removeClass('priterest-off');
			}, 0);
		},
		/**
		 * Show full picture 
		 */
		fullImg: function() {
			if (!$(this).hasClass('priterest-big-img') && this.width < this.naturalWidth) {
				$(this).css("cursor", setCursor('grab')).addClass('priterest-big-img');
				$('.priterest-shrink-btn').show();
			}
		},
		/**
		 * Zoom out the full picture 
		 */
		shrinkImg: function() {
			$('.priterest-full-img').css({
				"left": "50%",
				"top": "50%",
				'cursor': setCursor('zoom-in')
			}).removeClass('priterest-big-img');
			$(this).hide();
		},
		/**
		 * Set the initial state of the picture 
		 */
		dragImg: function(event) {
			event.preventDefault();
			$(this).css("cursor", setCursor('grabbing'));

			ImgStatus.flag = true;
			ImgStatus.startX = event.pageX;
			ImgStatus.startY = event.pageY;
			ImgStatus.left = parseInt(w.getComputedStyle(this, null)['left']);
			ImgStatus.top = parseInt(w.getComputedStyle(this, null)['top']);
		},
		/**
		 * Drag the picture to change the position 
		 */
		moveImg: function(event) {
			if (ImgStatus.flag) {
				this.style.left = (event.pageX - ImgStatus.startX + ImgStatus.left) + 'px';
				this.style.top = (event.pageY - ImgStatus.startY + ImgStatus.top) + 'px';
			}
		},
		/**
		 * Drag to end 
		 */
		dropImg: function() {
			ImgStatus.flag = false;
			$(this).css('cursor', setCursor('grab'));
		}
	};
	/**
	 * @return { string } [ Modify the cursor properties according to the browser ]
	 */
	(function() {
		var v = navigator.userAgent;
		var prefix = v.indexOf('AppleWebKit') > -1 ? "-webkit-" : v.indexOf('Firefox') > -1 ? "-moz-" : ((v.indexOf('Trident') > -1 && v.indexOf('rv:11') > -1) || u_agent.indexOf('MSIE') > -1) ? 'IE' : '';

		return setCursor = function(prop) {
			if (prop === 'grabbing' || prop === 'grab') {
				if (prefix === 'IE') {
					return "move";
				} else {
					return prefix + prop;
				}
			}
			if (prop === 'zoom-in' || prop === 'zoom-out') {
				if (prefix === 'IE') {
					return "pointer";
				} else {
					return prop;
				}
			}
		};
	})();

	/**
	 * Waterfall stream plugin entrance 
	 * @param { object[ {line}, {gap}, {width} ] } option      [ line: Number of waterfalls  | gap: Waterfall spacing  | width: Waterfall width  ]
	 * 	      { string } option  [ "add", "remove" ]           [ "add": The second parameter is the image path (required), the third parameter is the main title, and the fourth parameter is the subtitle ]
	 * 	                                                       [ "remove": The second parameter is the serial number of the deleted picture (clear the picture when it is empty)  ]
	 */
	$.fn.pinterest = function(option) {
		var config = option ? option : {};
		var arg = arguments;

		return this.each(function() {
			var $this = $(this),
				data = $this.data('pinterest');

			if (!data) {
				$this.data('pinterest', (data = new Pinterest($this, config)));
			}

			if (typeof config === 'string') {
				var parameter = Array.prototype.slice.call(arg, 1);
				switch (config) {
					case 'add':
						{
							data.add(parameter);
							break;
						}
					case 'remove':
						{
							data.remove(parameter[0]);
							break;
						}
					case 'reset':
						{
							data.resetLine(parameter[0]);
							break;
						}
					default:
						{
							data.init();
							break;
						}
				}
			} else {
				data.init();
			}
		});
	}
})(window, document, jQuery)