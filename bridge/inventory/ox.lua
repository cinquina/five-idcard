if GetResourceState('ox_inventory') ~= 'started' then return end

local ox_inventory = exports.ox_inventory

function NewMetaDataLicense(src, data)
    local newMetaDataItem = ox_inventory:Search(src, 1, Config.ItemName)
    for _, v in pairs(newMetaDataItem) do
        newMetaDataItem = v
        break
    end
    for key, value in pairs(data) do 
        newMetaDataItem.metadata[key] = value
    end
    ox_inventory:SetMetadata(src, newMetaDataItem.slot, newMetaDataItem.metadata)
end