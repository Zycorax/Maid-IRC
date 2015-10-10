var Templates = {
	messageSource: {
		source: '<ul class="message-source-list"><li class="server" data-connection-id="{{connectionId}}" data-value="SERVER"><i class="fa fa-server"></i><span>{{serverName}}</span></li>{{#with sources}}<li class="channel" data-connection-id="{{data.connectionId}}" data-value="{{key}}" data-alert=""><i class="fa fa-comments-o"></i><span>{{key}}</span></li>{{/with}}</ul>'
	},
	userList: {
		source: '<li><p data-rank="{{rank}}" data-rank-icon="{{{icon}}}">{{nick}}</p></li>'
	},
	message: {
		source: '<article class="consoleMessage" data-messageType="{{type}}" data-source="{{source}}"><aside><time>{{timestamp}}</time><span class="{{icon}}">{{head}}</span></aside><p>{{{message}}}</p></article><article class="filler"><div></div></article>'
	},
	modal: {
		source: '<div class="modal"><header>{{title}}<button type="button">&times;</button></header>{{> modalContent}}</div>'
	}
};

var Partials = {
	settingsPartial: '',
	connectPartial: ''
};

Handlebars.registerHelper('with', function(context, options) {
	// console.log(JSON.stringify(options.data.root));
	var content = (function() {
		var results = [];
		for (var key in context) {
			var value = context[key];
			results.push(options.fn({
				key: key,
				value: value,
				data: options.data.root
			}));
		}

		return results;
	})();

	return content.join('');
});

// Compile templates and save them back in the template object
for (var index in Templates) {
	Templates[index].compiled = Handlebars.compile(Templates[index].source);
}

// Register all partials
Handlebars.registerPartial(Partials);
