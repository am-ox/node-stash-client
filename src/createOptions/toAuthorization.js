"use strict";

module.exports = config => !!config.token
    ? `Bearer ${config.token}`
    : `Basic ${Buffer.from(`${config.username}:${config.password}`).toString("base64")}`;
