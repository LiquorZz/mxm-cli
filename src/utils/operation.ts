import fs from 'fs';

export const writeTpl = (fromUrl: string, toUrl: string) => {
  fs.exists(toUrl, (res) => {
    if (res) {
      // 判断是否已经存在文件
      throw new Error(`${toUrl} is existed!`);
    }
    const fileBuffer = fs.readFileSync(fromUrl);
    try {
      fs.writeFileSync(toUrl, fileBuffer);
    } catch (error) {
      console.log(error);
    }
  });
};
