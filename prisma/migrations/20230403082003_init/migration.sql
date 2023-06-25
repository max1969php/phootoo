-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(256) NULL,
    `password` VARCHAR(60) NOT NULL DEFAULT '',
    `hashedPassword` VARCHAR(60) NOT NULL DEFAULT '',
    `salt` VARCHAR(60) NOT NULL DEFAULT '',
    `token` VARCHAR(6) NOT NULL DEFAULT '',
    `emailVerificata` BOOLEAN NOT NULL DEFAULT false,
    `situation` INTEGER NOT NULL DEFAULT 0,
    `tipoCliente` VARCHAR(50) NOT NULL DEFAULT '',
    `profilo_fiscale` VARCHAR(2) NOT NULL DEFAULT 'no',
    `id_paese` VARCHAR(2) NOT NULL DEFAULT '',
    `dataDiNascita` DATE NULL,
    `nickName` VARCHAR(20) NOT NULL DEFAULT '',
    `nome` VARCHAR(60) NOT NULL DEFAULT '',
    `cognome` VARCHAR(60) NOT NULL DEFAULT '',
    `cod_fisc` VARCHAR(16) NULL,
    `telefono` VARCHAR(12) NOT NULL DEFAULT '',
    `indirizzo` VARCHAR(60) NOT NULL DEFAULT '',
    `civ` VARCHAR(8) NOT NULL DEFAULT '',
    `cap` INTEGER NOT NULL DEFAULT 0,
    `citta` VARCHAR(60) NOT NULL DEFAULT '',
    `provincia` VARCHAR(2) NOT NULL DEFAULT '',
    `nazione` VARCHAR(2) NOT NULL DEFAULT 'IT',
    `Lingua` VARCHAR(2) NOT NULL DEFAULT 'it',
    `DarkMode` VARCHAR(5) NOT NULL DEFAULT 'false',
    `created_at` DATETIME(0) NULL,
    `updated_at` DATETIME(0) NULL,

    UNIQUE INDEX `email`(`email`),
    UNIQUE INDEX `cod_fisc`(`cod_fisc`),
    UNIQUE INDEX `Indice 1`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `type` VARCHAR(3) NOT NULL,
    `thumbUrl` VARCHAR(120) NOT NULL,
    `Url` VARCHAR(120) NOT NULL,
    `views` INTEGER NOT NULL DEFAULT 0,
    `lastView` DATETIME(0) NULL DEFAULT (curdate()),
    `createdAt` DATETIME(0) NULL DEFAULT (curdate()),
    `updatedAt` DATETIME(0) NULL DEFAULT (curdate()),

    UNIQUE INDEX `Indice 1`(`thumbUrl`),
    UNIQUE INDEX `Indice 2`(`Url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `FK_document_owner` FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
