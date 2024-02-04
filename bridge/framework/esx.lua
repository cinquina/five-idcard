if GetResourceState('es_extended') ~= 'started' then return end

ESX = exports['es_extended']:getSharedObject()

local hasQs = GetResourceState('qs-inventory') == 'started'

local metadata = {}

local function CreateMetaLicense(src)
    local xPlayer = ESX.GetPlayerFromId(src)

    metadata = {
        firstName = string.upper(xPlayer.variables.firstName),
        lastName = string.upper(xPlayer.variables.lastName),
        dob = string.upper(xPlayer.variables.dateofbirth),
        sex = string.upper(xPlayer.variables.sex),
        exp = '2028',
        cref = math.random(000000, 999999),
        class = 'C',
        pref = 'UNKNOWN'
    }
    if hasQs then
        return exports['qs-inventory']:AddItem(src, Config.ItemName, 1, false, metadata)
    end
    exports.ox_inventory:AddItem(src, Config.ItemName, 1, metadata)
end

exports('CreateMetaLicense', CreateMetaLicense)

--- Create metadata for license
---@param k string item name
function CreateRegisterItem(k)
    if hasQs then
        ESX.RegisterUsableItem(k, function(source, item)
            TriggerClientEvent('identity:client:showIdCard', source, item.info)
        end)
        return
    end
    ESX.RegisterUsableItem(k, function(source, _, item)
        TriggerClientEvent('identity:client:showIdCard', source, item.metadata)
    end)
end
