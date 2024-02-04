local function SendReactMessage(action, data)
    SendNUIMessage({action = action, data = data})
end

local function toggleNuiFrame(shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    SendReactMessage('setVisible', shouldShow)
end

local function ShowIDCard(data) 
    /*
        Data structure (table):
        firstName: string,
        lastName: string,
        dob: string,
        sex: string ('m' or 'f', not case sensitive),
        exp: string,
        cref: string,
        class: string,
        pref: string,

    */
    print(json.encode(data))
    toggleNuiFrame(true)
    SendReactMessage('openIDCard', data)
end
exports('ShowIDCard', ShowIDCard)

RegisterNetEvent('identity:client:showIdCard')
AddEventHandler('identity:client:showIdCard', ShowIDCard)

RegisterNUICallback('hideFrame', function(_, cb)
    toggleNuiFrame(false)
    cb({})
end)
