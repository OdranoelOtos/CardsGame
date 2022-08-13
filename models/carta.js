module.exports = (sequelize, DataTypes) => {
    const Carta = sequelize.define('carta', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        carta: DataTypes.STRING(200),
        valor: DataTypes.INTEGER(6),
        imagen: DataTypes.STRING(200)
    }, {
        freeTableName: true,
        timestamps: false
    });

    return Carta;
}
