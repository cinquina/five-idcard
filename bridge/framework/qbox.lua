if GetResourceState('qbx_core') ~= 'started' then return end

local metadata = {}

--- Convert sex number to string M or F
---@param sex number
---@return string
local function GetStringSex(sex) return sex == 1 and 'F' or 'M' end

--- Create metadata for license
---@param src number Source number
---@param itemTable string | table Item name or table of item names
local function CreateMetaLicense(src)
    local player = exports.qbx_core:GetPlayer(src)

    metadata = {
        firstName = string.upper(player.PlayerData.charinfo.firstname),
        lastName = string.upper(player.PlayerData.charinfo.lastname),
        dob = string.upper(player.PlayerData.charinfo.birthdate),
        sex = GetStringSex(player.PlayerData.charinfo.gender),
        exp = '2028',
        cref = player.PlayerData.citizenid,
        class = 'C',
        pref = 'UNKNOWN'
    }
    player.Functions.AddItem(Config.ItemName, 1, false, metadata)
end

exports('CreateMetaLicense', CreateMetaLicense)

--- Create metadata for license
---@param k string item name
function CreateRegisterItem(k)
    exports.qbx_core:CreateUseableItem(k, function(source, item)
        TriggerClientEvent('identity:client:showIdCard', source, item.info or item.metadata)
    end)
end
