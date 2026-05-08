import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import fs from 'fs';

// Garante que o diretório de upload existe
const uploadDir = path.resolve(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Responsavel para as imagens

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg")
      cb(null,path.resolve(__dirname, '../../uploads/images'))
    else if (file.mimetype === "application/pdf") 
      cb(null, path.resolve(__dirname, '../../uploads/documents'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, name + ext);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    "image/jpg",
    'application/pdf',
    'text/csv',
  ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Tipo não permitido: ${file.mimetype}`));
    }
  }
});

export {upload}








// export type FileType = 'image' | 'document' | 'all';

// interface UploadConfig {
//   destination: string;
//   maxSize: number;
//   allowedMimes: string[];
// }

// const configs: Record<FileType, UploadConfig> = {
//   image: {
//     destination: path.resolve(__dirname, '../../uploads/images'),
//     maxSize: 5 * 1024 * 1024, // 5MB
//     allowedMimes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
//   },
//   document: {
//     destination: path.resolve(__dirname, '../../uploads/documents'),
//     maxSize: 20 * 1024 * 1024, // 20MB
//     allowedMimes: ['application/pdf', 'text/csv', 'application/msword'],
//   },
//   all: {
//     destination: path.resolve(__dirname, '../../uploads'),
//     maxSize: 10 * 1024 * 1024, // 10MB
//     allowedMimes: [
//       'image/jpeg',
//       'image/png',
//       'image/gif',
//       'application/pdf',
//       'text/csv',
//     ],
//   },
// };

// const ensureDirectory = (dirPath: string) => {
//   if (!fs.existsSync(dirPath)) {
//     fs.mkdirSync(dirPath, { recursive: true });
//   }
// };

// export const createMulterUpload = (fileType: FileType = 'all') => {
//   const config = configs[fileType];
//   ensureDirectory(config.destination);

//   const storage = multer.diskStorage({
//     destination: () => {
//       return config.destination;
//     },
//     filename: (req, file, cb) => {
//       const random = crypto.randomBytes(16).toString('hex');
//       const ext = path.extname(file.originalname);
//       cb(null, `${Date.now()}-${random}${ext}`);
//     },
//   });

//   const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
//     if (config.allowedMimes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error(`Tipo não permitido: ${file.mimetype}`));
//     }
//   };

//   return multer({
//     storage,
//     fileFilter,
//     limits: {
//       fileSize: config.maxSize,
//     },
//   });
// };

// // Instâncias prontas para uso
// export const uploadImage = createMulterUpload('image');
// export const uploadDocument = createMulterUpload('document');
// export const uploadAny = createMulterUpload('all');