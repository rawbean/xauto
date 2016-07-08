var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var Files = new keystone.List('FilesCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Files.add({
	name: { type: String, required: true },
});

Files.relationship({ ref: 'Files', path: 'categories' });

Files.register();
