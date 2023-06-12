mp.events.addCommand('vwindow', (player, index) => {
    if (!index || !(index >= 0 && index <= 3)) return player.outputChatBox('Use: /window [value(0-3)]');
    if (!player.vehicle) return player.outputChatBox('You must be in a vehicle to use this command!');
    if(!player.vehicle.windows) {
        player.vehicle.windows = [];
        for(var x = 0; x < 4; x++) {
            player.vehicle.windows.push({ window: x, opened: false });
        }

        player.vehicle.windows[index] = { window: index, opened: true };
        player.outputChatBox(`You opened window number ${index}.`);
        player.vehicle.setVariable('vehicleWindows', player.vehicle.windows);
    }
    else if(player.vehicle.windows) {
        player.vehicle.windows[index].opened ? player.vehicle.windows[index].opened = false : player.vehicle.windows[index].opened = true;
        player.outputChatBox(`You ${player.vehicle.windows[index].opened ? 'opened' : 'closed'} your number ${index} window.`);
        player.vehicle.setVariable('vehicleWindows', player.vehicle.windows);
    }
})