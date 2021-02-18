module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      // MySQL 에는 Image 테이블 생성
      //id가 기본적으로 들어있다.
      src: {
        type: DataTypes.STRING(200),
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 이모티콘 저장
    }
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.User);
  };
  return Image;
};
