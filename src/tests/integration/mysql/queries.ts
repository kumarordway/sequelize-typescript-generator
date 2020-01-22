export const dataTypesTableNAME = 'data_types';

export const dataTypesTableDROP = `DROP TABLE IF EXISTS ${dataTypesTableNAME}`;

export const dataTypesTableCREATE = `
    CREATE TABLE ${dataTypesTableNAME}
    (
        id                   INT                  auto_increment          primary key,  
        f_bit                BIT(7)               null,        
        f_bigint             BIGINT               null,
        f_smallint           SMALLINT             null,
        f_mediumint          MEDIUMINT            null,
        f_tinyint            TINYINT              null,
        f_decimal            DECIMAL(7, 3)        null,
        f_float              FLOAT(5, 3)          null,
        f_double             DOUBLE(7, 4)         null,
        f_int                INT                  null,
        f_varchar            VARCHAR(80)          null,
        f_char               CHAR(10)             null,
        f_tinytext           TINYTEXT             null,
        f_mediumtext         MEDIUMTEXT           null,
        f_longtext           LONGTEXT             null,
        f_text               TEXT                 null,        
        f_date               DATE                 null,
        f_time               TIME                 null,
        f_datetime           DATETIME(6)          null,
        f_timestamp          TIMESTAMP(3)         null,
        f_year               YEAR                 null,        
        f_enum               ENUM ('AA', 'BB')    null,
        f_set                SET ('X', 'Y')       null,                
        f_binary             BINARY               null,
        f_blob               BLOB                 null,
        f_tinyblob           TINYBLOB             null,
        f_mediumblob         MEDIUMBLOB           null,
        f_longblob           LONGBLOB             null,
        f_point              POINT                null,
        f_multipoint         MULTIPOINT           null,
        f_linestring         LINESTRING           null,
        f_multilinestring    MULTILINESTRING      null,
        f_polygon            POLYGON              null,
        f_multipolygon       MULTIPOLYGON         null,
        f_geometry           GEOMETRY             null,        
        f_json               JSON                 null
    ) CHARSET = 'latin1'
`;

export const indicesTableNAME = 'indices';

export const indicesTableDROP = `DROP TABLE IF EXISTS ${indicesTableNAME}`;

export const indicesTableCREATE = `
    create table ${indicesTableNAME}
    (
        id              int             auto_increment          primary key,
        f_unique        bigint          null,
        f_multi_1       int not         null,
        f_multi_2       varchar(80)     null,
        constraint indices_f_multi_1_uindex unique (f_multi_1),
        constraint indices_f_unique_uindex unique (f_unique)
    ) CHARSET = 'latin1'
`;

export const indicesTableINDEX = `
    create index indices_f_multi_1_f_multi_2_index
        on ${indicesTableNAME} (f_multi_1, f_multi_2);
`;
