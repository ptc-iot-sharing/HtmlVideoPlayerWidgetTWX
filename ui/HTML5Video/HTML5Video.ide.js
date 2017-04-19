TW.IDE.Widgets.HTML5Video = function () {
	this.widgetProperties = function () {
		return {
			'name' : 'HTML5Video',
			'description' : 'Enables playback of MP4 files.',
			'category' : ['Common'],
            'isResizable': true,
			'supportsAutoResize': true,
			'supportsLabel': true,
			'isExtension':true,
			'properties' : {
					'VideoLocation' : {
					'baseType' : 'STRING',
					'defaultValue' : 'http:',
					'isBindingTarget': true,
					'isVisible': true,
					'warnIfNotBoundAsSource': true
				},
				'AutoPlay': {
                    'baseType' : 'BOOLEAN',
					'isVisible': true,
					'defaultValue' : true,
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
                    'baseType' : 'BOOLEAN',
					'isVisible': true,
					'defaultValue' : true,
                }
			}
		};
	};
	 this.widgetServices = function () {
        return {
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