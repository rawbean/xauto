var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Person = new keystone.List('Person', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Person.add({
	name: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'Y', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'PersonCategory', many: true },
});

Person.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Person.defaultColumns = 'name, state|20%, author|20%, publishedDate|20%';
Person.register();
