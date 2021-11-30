const Pi_Temps = require("./Migrations/Pi_Temps");
const Achievements = require("./Migrations/Achievements");
const Characters_Achievements = require("./Migrations/Characters_Achievements");
const Characters = require("./Migrations/Characters");
const Class = require("./Migrations/Class");
const Files = require("./Migrations/Files");
const Friends = require("./Migrations/Friends");
const Inventory = require("./Migrations/Inventory");
const Items_Stats = require("./Migrations/Items_Stats");
const Items = require("./Migrations/Items");
const Level = require("./Migrations/Level");
const Logintokens = require("./Migrations/Logintokens");
const Roles = require("./Migrations/Roles");
const Stats = require("./Migrations/Stats");
const Users_Achievements = require("./Migrations/Users_Achievements");
const Users_Roles = require("./Migrations/Users_Roles");
const Users_Bans = require("./Migrations/Users_Bans");
const Users_Feed = require("./Migrations/Users_Feed");
const Profile_Pictures = require("./Migrations/Profile_Pictures");
const Users = require("./Migrations/Users");
const Database = require("../Core/Database/Database")

run()

async function run(){
    await Database.create(process.env.DB);
    await Achievements.Migrate();
    await Characters_Achievements.Migrate();
    await Characters.Migrate();
    await Class.Migrate();
    await Files.Migrate();
    await Friends.Migrate();
    await Inventory.Migrate();
    await Items_Stats.Migrate();
    await Items.Migrate();
    await Level.Migrate();
    await Logintokens.Migrate();
    await Pi_Temps.Migrate();
    await Profile_Pictures.Migrate();
    await Roles.Migrate();
    await Stats.Migrate();
    await Users_Achievements.Migrate();
    await Users_Bans.Migrate();
    await Users_Feed.Migrate();
    await Users_Roles.Migrate();
    await Users.Migrate();
    process.exit();
}