if GetResourceState('ps-inventory') ~= 'started' then return end

QBCore = exports['qb-core']:GetCoreObject()

function NewMetaDataLicense(src, data)
    local Player = QBCore.Functions.GetPlayer(src)
    if not Player then return end

    local newMetaDataItem = Player.Functions.GetItemByName(Config.ItemName)
    if newMetaDataItem then
        for key, value in pairs(data) do 
            Player.PlayerData.items[newMetaDataItem.slot].info[key] = value
        end
        Player.Functions.SetInventory(Player.PlayerData.items)
    end
end
