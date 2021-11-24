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
    await new Achievements();
    await new Characters_Achievements();
    await new Characters();
    await new Class();
    await new Files();
    await new Friends();
    await new Inventory();
    await new Items_Stats();
    await new Items();
    await new Level();
    await new Logintokens();
    await new Pi_Temps();
    await new Profile_Pictures();
    await new Roles();
    await new Stats();
    await new Users_Achievements();
    await new Users_Bans();
    await new Users_Feed();
    await new Users_Roles();
    await new Users();
    process.exit();
}