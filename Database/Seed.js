const Pi_Temps = require("./Seeders/Pi_Temps");
const Achievements = require("./Seeders/Achievements");
const Characters_Achievements = require("./Seeders/Characters_Achievements");
const Characters = require("./Seeders/Characters");
const Class = require("./Seeders/Class");
const Files = require("./Seeders/Files");
const Friends = require("./Seeders/Friends");
const Inventory = require("./Seeders/Inventory");
const Items_Stats = require("./Seeders/Items_Stats");
const Items = require("./Seeders/Items");
const Level = require("./Seeders/Level");
const Logintokens = require("./Seeders/Logintokens");
const Roles = require("./Seeders/Roles");
const Stats = require("./Seeders/Stats");
const Users_Achievements = require("./Seeders/Users_Achievements");
const Users_Roles = require("./Seeders/Users_Roles");
const Users_Bans = require("./Seeders/Users_Bans");
const Users_Feed = require("./Seeders/Users_Feed");
const Profile_Pictures = require("./Seeders/Profile_Pictures");
const Users = require("./Seeders/Users");

run();

async function run(){
    await Achievements.Seed({

    });
    await Characters_Achievements.Seed({
    
    });
    await Characters.Seed({
    
    });
    await Class.Seed({
    
    });
    await Files.Seed({
    
    });
    await Friends.Seed({
    
    });
    await Inventory.Seed({
    
    });
    await Items_Stats.Seed({
    
    });
    await Items.Seed({
    
    });
    await Level.Seed({
    
    });
    await Logintokens.Seed({
    
    });
    await Pi_Temps.Seed({
    
    });
    await Profile_Pictures.Seed({
    
    });
    await Roles.Seed({
    
    });
    await Stats.Seed({
    
    });
    await Users_Achievements.Seed({
    
    });
    await Users_Bans.Seed({
    
    });
    await Users_Feed.Seed({
    
    });
    await Users_Roles.Seed({
        
    });
    await Users.Seed({
        
    });
    process.exit();
}
