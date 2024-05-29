import multer from "multer";

const storage = multer.diskStorage({
    destination : function(req, file, cd) {
        cd(null , "C:/Users/admin/Desktop/Backend/chaiAurBackend/public/temp")
    },
    filename : function(req, res, cd) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }

})

export const upload = multer({
    storage,
})