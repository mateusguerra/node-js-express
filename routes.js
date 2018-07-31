'use strict';

module.exports = function(app) {
    app.route('/').get(
        (req, res) => res.send('Hello World!')
    );
};