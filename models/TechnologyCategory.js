var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var TechnologyCategory = new keystone.List('TechnologyCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

TechnologyCategory.add({
	name: { type: String, required: true },
});

TechnologyCategory.relationship({ ref: 'Technology', path: 'categories' });

TechnologyCategory.register();
