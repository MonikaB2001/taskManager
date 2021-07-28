const Admin = require("../../models/admin");

const getAdmin = (req) => {
    try {
        return User.find(req.query);
    } catch (e) {
        return e;
    }
}

const saveAdmin = (req) => {
    try {
        var user = new User(req.body);
        return user.save();
    } catch (e) {
        return e;
    }
}

const updateAdmin = (req) => {
    try {
        return User.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteAdmin = (req) => {
    try {
        return User.findByIdAndDelete(req.params.id);
    } catch (e) {
        return  e;
    }
}

const getAdminById = (req) => {
    try {
        return User.findById(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAdmin,
    saveAdmin,
    updateAdmin,
    deleteAdmin,
    getAdminById
}