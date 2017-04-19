TW.Runtime.Widgets.HTML5Video = function () {
	var valueElem;
	var htmlToWrite = '';


	this.runtimeProperties = function () {
		return {
			'supportsAutoResize': true
		};
	};

	this.renderHtml = function () {
		var html = '<div class="widget-content widget-HTML5Video">' +
			'<div class="widget-HTML5Video-container ">' +
			'<video preload="' + this.getProperty("PreloadOption") + '"' + this.GetAutoPlay() + ' ' + this.GetShowControls() + ' ' + this.GetFitMethod() + ' >' +
			'<source src=" ' + this.getProperty('VideoLocation') + "#t=" + this.getProperty('MediaTime') + '" type="video/mp4">' +
			'Your browser does not support the video tag.' +
			'</video> ' +
			'</div></div>';
		return html;
	};
	this.GetAutoPlay = function () {
		if (this.getProperty('AutoPlay') == true)
			return "autoplay";
		else return "";
	};

	this.GetShowControls = function () {
		if (this.getProperty('ShowControls') == true)
			return "controls";
		else return "";
	}

	this.GetFitMethod = function () {
		/* 		if (this.getProperty('FitMethod') == 'fittowidth')
				{
					return "width=\"100%\"";
				}
				else if (this.getProperty('FitMethod') == 'fittoheight')
				{
					return "height=\"100%\"";
				} */
		return "height=\"100%\" width=\"100%\"";
	}

	this.afterRender = function () {
		var thisWidget = this;
		this.jqElement.find('video').on(
			"timeupdate",
			function (event) {
				thisWidget.setProperty("MediaTime", this.currentTime);
			});
	};

	this.updateProperty = function (updatePropertyInfo) {
		var widgetElement = this.jqElement.find("source");
		var videoPlayer = this.jqElement.find("video");
		// TargetProperty tells you which of your bound properties changed
		if (updatePropertyInfo.TargetProperty === 'VideoLocation') {

			var srcVideo = updatePropertyInfo.SinglePropertyValue;

			this.setProperty('VideoLocation', srcVideo);

			widgetElement.attr("src", srcVideo);

			videoPlayer.trigger('load');
			if (this.getProperty('AutoPlay') == true)
				videoPlayer.trigger('play');
		} else if (updatePropertyInfo.TargetProperty === 'MediaTime') {
			videoPlayer[0].currentTime = parseFloat(updatePropertyInfo.SinglePropertyValue);
			this.setProperty('MediaTime', updatePropertyInfo.SinglePropertyValue);
		}
	};
};