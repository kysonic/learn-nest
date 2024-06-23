import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDescription1719144706540 implements MigrationInterface {
  name = 'AddDescription1719144706540';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "description"`);
  }
}
