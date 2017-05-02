TW.IDE.Widgets.HTML5Video = function () {
	this.widgetProperties = function () {
		return {
			'name': 'HTML5Video',
			'description': 'Enables playback of MP4 files.',
			'category': ['Common'],
			'isResizable': true,
			'supportsAutoResize': true,
			'supportsLabel': true,
			'isExtension': true,
			'properties': {
				'VideoLocation': {
					'baseType': 'STRING',
					'defaultValue': 'http:',
					'isBindingTarget': true,
					'isVisible': true,
					'warnIfNotBoundAsSource': true
				},
				'AutoPlay': {
					'baseType': 'BOOLEAN',
					'isVisible': true,
					'defaultValue': true,
				},
				//				'FitMethod': {
				//                   'baseType': 'STRING',
				//                   'defaultValue': 'fittowidth',
				//                   'selectOptions': [
				//                       { value: 'fittowidth', text: 'Fit to Width' },
				//                       { value: 'fittoheight', text: 'Fit to Height' }
				//                   ]
				//               },
				'ShowControls': {
					'baseType': 'BOOLEAN',
					'isVisible': true,
					'defaultValue': true,
				},
				'AutoLoop': {
					'baseType': 'BOOLEAN',
					'isVisible': true,
					'defaultValue': false	
				},
				'Volume': {
					'baseType': 'NUMBER',
					'isVisible': true,
					'defaultValue': 1,
					'isBindingTarget': true,
					'description': 'Is a double indicating the audio volume, from 0.0 (silent) to 1.0 (loudest)'
				},
				'PlaybackRate': {
					'baseType': 'NUMBER',
					'isVisible': true,
					'defaultValue': 1,
					'isBindingTarget': true,
					'description': 'Is a double indicating the playback speed, where 0.5 is half speed, 1.0 is normal and 2.0 is double'
				},
				'MediaTime': {
					'baseType': "INTEGER",
					'isVisible': true,
					'defaultValue': 0,
					'isBindingTarget': true,
					'isBindingSource': true,
					'description': "The current playback time in seconds. Setting this property seeks the media to the new time."
				},
				'PreloadOption': {
					'baseType': 'STRING',
					'isVisible': true,
					'defaultValue': 'auto',
					'selectOptions': [{
						value: 'auto',
						text: 'Auto'
					}, {
						value: 'metadata',
						text: 'Metadata'
					}, {
						value: 'none',
						text: 'None'
					}]
				}
			}
		};
	};
	 this.widgetServices = function () {
        return {
            'Play': { 'warnIfNotBound': false },
            'Pause': { 'warnIfNotBound': false }
        };
    };
	this.renderHtml = function () {

		var html = '';
		html += '<div class="widget-content widget-HTML5Video">';
		html += '<span>HTML5Video here</span>';
		html += '</div>';
		return html;
	};

	this.afterRender = function () {
	};

	this.afterSetProperty = function (name, value) {
		return false;
	};

};