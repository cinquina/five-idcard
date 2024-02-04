if GetResourceState('qb-core') ~= 'started' or GetResourceState('qbx_core') ==
    'started' then return end

QBCore = exports['qb-core']:GetCoreObject()

local metadata = {}

--- Convert sex number to string M or F
---@param sexString number | string
---@return string
local function GetStringSex(sexString)
    return sex == 1 and 'F' or 'M'
end

--- Create metadata for license
---@param src number Source number
---@param itemTable string | table Item name or table of item names
local function CreateMetaLicense(src)
    local Player = QBCore.Functions.GetPlayer(src)

    metadata = {
        firstName = string.upper(Player.PlayerData.charinfo.firstname),
        lastName = string.upper(Player.PlayerData.charinfo.lastname),
        dob = string.upper(Player.PlayerData.charinfo.birthdate),
        sex = GetStringSex(Player.PlayerData.charinfo.gender),
        exp = '2028',
        cref = Player.PlayerData.citizenid,
        class = 'C',
        pref = 'UNKNOWN'
    }
    Player.Functions.AddItem(Config.ItemName, 1, false, metadata)
end

exports('CreateMetaLicense', CreateMetaLicense)

--- Create metadata for license
---@param k string item name
function CreateRegisterItem(k)
    QBCore.Functions.CreateUseableItem(k, function(source, item)
        TriggerClientEvent('identity:client:showIdCard', source, item.info or item.metadata)
    end)
end
