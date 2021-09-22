const Migration = require('../../core/Migration');

module.exports = class Class_Seeder {
    constructor() {
    }

    static async Run() {
        await Migration.CreateDatabase(process.env.DB)

        await Migration.CreateTable(
            {
                tableName: 'users',
                defaults: ['name', 'username'],
                values: {'email': ["varchar(255)", "NN"], 'password': ["varchar(255)", "NN"], 'enabled': ["BOOLEAN", "NN"], "resetpassword": ["varchar(255)"], "verifytoken": ["varchar(255)"], "verified": ["BOOLEAN"], "resettoken": ["varchar(255)"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'users_bans',
                defaults: [],
                values: {'user_id': ["INT", "NN"], 'banned_by': ["INT", "NN"], 'until': ["DATETIME", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'users_feed',
                defaults: [],
                values: {'user_id': ["INT", "NN"], 'message': ["TEXT", "NN"], 'time': ['TIMESTAMP', 'NN']}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'users_achievements',
                defaults: [],
                values: {'user_id': ["INT", "NN"], 'achievement_id': ["INT", "NN"], 'progress_value': ['INT', 'NN'], 'required_value': ['INT', 'NN'], 'complrseted': ['BOOLEAN', 'NN']}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'roles',
                defaults: ['name'],
                values: {'user_id': ["INT", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'logintokens',
                defaults: [],
                values: {'user_id': ["INT", "NN"], 'token': ["VARCHAR(255)", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'friends',
                defaults: [],
                values: {'user_id': ["INT", "NN"], 'sender_id': ["INT", "NN"], 'receiver_id': ["INT", "NN"], 'status': ["VARCHAR(255)", "NN"]}
            }
        )
        
        await Migration.CreateTable(
            {
                tableName: 'achievements',
                defaults: ['name', 'description'],
                values: {'achievement_type': ["VARCHAR(255)", "NN"]}
            }
        )
        
        await Migration.CreateTable(
            {
                tableName: 'level',
                defaults: [],
                values: {'user_id': ["INT", "NN"], 'money': ["INT", "NN"], 'exp': ["INT", "NN"], 'level': ["INT", "NN"], 'health': ["INT", "NN"], 'attack': ["INT", "NN"], 'speed': ["INT", "NN"], 'defense': ["INT", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'characters',
                defaults: ['name'],
                values: {'user_id': ["INT", "NN"], 'class_id': ["INT", "NN"], 'stats_id': ["INT", "NN"], 'kills': ["BOOLEAN", "NN"], 'deaths': ["VARCHAR(255)"], 'level': ["INT", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'inventory',
                defaults: [],
                values: {'character_id': ["INT", "NN"], 'json': ["LONGTEXT", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'stats',
                defaults: [],
                values: {'user_id': ["INT", "NN"], 'money': ["INT", "NN"], 'exp': ["INT", "NN"], 'level': ["INT", "NN"], 'health': ["INT", "NN"], 'attack': ["INT", "NN"], 'speed': ["INT", "NN"], 'defense': ["INT", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'class',
                defaults: [],
                values: {'attack': ["INT", "NN"], 'health': ["INT", "NN"], 'speed': ["INT", "NN"], 'defense': ["INT", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'items',
                defaults: [],
                values: {'items_stats_id': ["INT", "NN"], 'type': ["INT", "NN"], 'rarity': ["INT", "NN"], 'stats_range': ["INT", "NN"], 'texture': ["INT", "NN"]}
            }
        )

        await Migration.CreateTable(
            {
                tableName: 'items_stats',
                defaults: [],
                values: {'required_level': ["INT", "NN"], 'min_health': ["INT", "NN"], 'max_health': ["INT", "NN"], 'min_attack': ["INT", "NN"], 'max_attack': ["INT", "NN"], 'min_speed': ["INT", "NN"], 'max_speed': ["INT", "NN"]}
            }
        )

        console.log("\r\n Finished migrations")
    }
}