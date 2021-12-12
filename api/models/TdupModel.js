import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const data_tdup = db.define('data_tdup',{
    tdup_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: true,
    },
    jenis_usaha: {
        type: DataTypes.STRING,
    },
    nama_usaha: {
        type: DataTypes.STRING,
    },
    jenis_usaha: {
        type: DataTypes.STRING,
    },
    penanggung_jawab: {
        type: DataTypes.STRING,
    },
    alamat_usaha: {
        type: DataTypes.STRING,
    },
    no_tdup: {
        type: DataTypes.STRING,
    },
    no_surat_pengantar: {
        type: DataTypes.STRING,
    },
    no_rekomendasi: {
        type: DataTypes.STRING,
    },
    no_oss: {
        type: DataTypes.STRING,
    },
    ket: {
        type: DataTypes.STRING,
    }
},
{
    freezeTableName: true
});

export default data_tdup;