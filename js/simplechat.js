var SimpleChat = (function () {
    this.AppId = "MyApplication";
    this.User = {
        XNode: {},
        Entity: {}
    };
    this.Events = [];
});
SimpleChat.prototype.Message = function (type, json) {
    return {
        Type: type,
        JSON: json
    };
};
SimpleChat.prototype.setLocalStorage = function (args) {
    window.localStorage.setItem(this.AppId, JSON.stringify(args));
};
SimpleChat.prototype.getLocalStorage = function () {
    return window.localStorage.getItem(this.AppId);
};
SimpleChat.prototype.dispatcher = function (name, delagate) {
    this.Events[name] = delagate;
};
SimpleChat.prototype.Initialize = function (callback) {
    callback(JSON.parse(this.getLocalStorage()));
};
SimpleChat.prototype.User = function () {
    return this.User.Entity.JSON;
};
