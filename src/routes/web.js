import { getHomepage, getTest, getCreateForm, postCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleDeleteUser, getUploadPage, handleUploadFile, handleUploadMultipleFiles } from "../controllers/homeController"
import multer from "multer";
const path = require('path');
const router = require("express").Router();

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "src/public/images/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage, fileFilter: imageFilter })

const iniWebRoute = (app) => {
    router.get('/', getHomepage);

    router.get('/test', getTest);

    router.get('/create', getCreateForm);

    router.get('/update/:id', getUpdatePage);

    router.post('/update-user/', postUpdateUser);

    router.post('/create-user', postCreateUser);

    router.post('/delete-user/:id', postDeleteUser);

    router.post('/delete-user', postHandleDeleteUser);

    router.get('/upload', getUploadPage);

    router.post('/upload-profile-pic', upload.single('profile_pic'), handleUploadFile);

    router.post('/upload-multiples-images', (req, res, next) => {
        upload.array('multiple_images', 3)(req, res, (err) => {
            if (err instanceof multer.MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
                // handle multer file limit error here
                res.send('LIMIT_UNEXPECTED_FILE')
            } else if (err) {
                res.send(err)
            }

            else {
                // make sure to call next() if all was well
                next();
            }
        })
    }, handleUploadMultipleFiles);

    return app.use('/', router);
}

export {
    iniWebRoute
};