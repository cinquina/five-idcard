if GetResourceState('qs-inventory') ~= 'started' then return end
local Inventory = exports['qs-inventory']

function NewMetaDataLicense(src, data)
    local newMetaDataItem = Inventory:GetItemByName(src, Config.ItemName)
    if newMetaDataItem then
        local items = Inventory:GetInventory(src)
        local info = items[newMetaDataItem.slot].info
        for key, value in pairs(data) do 
            info[key] = value
        end
        Inventory:SetItemMetadata(src, newMetaDataItem.slot, info)
    end
end
