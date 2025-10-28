module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('Komik', { 
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING, 
    }
  }, {
    // Opsi tambahan, misalnya menonaktifkan timestamps
    // timestamps: false 
  });
  return Komik;
};