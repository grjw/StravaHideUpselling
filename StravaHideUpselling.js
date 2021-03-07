// ==UserScript==
// @name         Hide Strava upselling UI elements
// @namespace    https://github.com/grjw
// @version      0.1
// @description  Hide upselling DOM elements, making page easier to read. Sorry Strava!
// @author       You
// @match        https://www.strava.com/activities/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $("[class*=upsell], [id*=upsell]").hide();
})();
