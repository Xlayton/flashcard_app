const nav = require("../util/nav.json");

/**
 * Renders page with given title with given opts
 * @param {Object} resp Object that represents server response
 * @param {String} page_title Title of the pug file to render
 * @param {Object} opts Additional options to render. Nav bar comes default
 */
const _render = (resp, page_title, opts) => {
    if(!opts) {
        opts = {};
    }
    opts.nav_content = nav.nav;
    resp.render(page_title, opts);
};


const index = (req, resp) => {
    _render(resp, "index");
};

const manage = (req, resp) => {
    _render(resp, "manage");
};

const view = (req, resp) => {
    _render(resp, "view");
};

module.exports = {
    index: index,
    manage: manage,
    view: view,
};