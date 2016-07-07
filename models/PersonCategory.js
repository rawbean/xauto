var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var CompanyCategory = new keystone.List('PersonCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

CompanyCategory.add({
	name: { type: String, required: true },
});

CompanyCategory.relationship({ ref: 'Person', path: 'categories' });

CompanyCategory.register();
