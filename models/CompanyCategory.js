var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var CompanyCategory = new keystone.List('CompanyCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

CompanyCategory.add({
	name: { type: String, required: true },
});

CompanyCategory.relationship({ ref: 'company', path: 'categories' });

CompanyCategory.register();
