import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1720264224761 implements MigrationInterface {
  name = 'Init1720264224761';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`payload\` json NOT NULL, INDEX \`IDX_b535fbe8ec6d832dde22065ebd\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`flavor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`coffee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`brand\` varchar(255) NOT NULL, \`recommendations\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`coffee_flavors_flavor\` (\`coffeeId\` int NOT NULL, \`flavorId\` int NOT NULL, INDEX \`IDX_9cb98a3799afc95cf71fdb1c4f\` (\`coffeeId\`), INDEX \`IDX_25642975c6f620d570c635f418\` (\`flavorId\`), PRIMARY KEY (\`coffeeId\`, \`flavorId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`coffee_flavors_flavor\` ADD CONSTRAINT \`FK_9cb98a3799afc95cf71fdb1c4f9\` FOREIGN KEY (\`coffeeId\`) REFERENCES \`coffee\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`coffee_flavors_flavor\` ADD CONSTRAINT \`FK_25642975c6f620d570c635f418d\` FOREIGN KEY (\`flavorId\`) REFERENCES \`flavor\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`coffee_flavors_flavor\` DROP FOREIGN KEY \`FK_25642975c6f620d570c635f418d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`coffee_flavors_flavor\` DROP FOREIGN KEY \`FK_9cb98a3799afc95cf71fdb1c4f9\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_25642975c6f620d570c635f418\` ON \`coffee_flavors_flavor\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_9cb98a3799afc95cf71fdb1c4f\` ON \`coffee_flavors_flavor\``,
    );
    await queryRunner.query(`DROP TABLE \`coffee_flavors_flavor\``);
    await queryRunner.query(`DROP TABLE \`coffee\``);
    await queryRunner.query(`DROP TABLE \`flavor\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_b535fbe8ec6d832dde22065ebd\` ON \`event\``,
    );
    await queryRunner.query(`DROP TABLE \`event\``);
  }
}
