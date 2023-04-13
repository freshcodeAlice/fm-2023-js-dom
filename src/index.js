setTimeout(function() {
    console.log('timer tick!');
    setTimeout(function () {
        console.log('I need to be after timer');
        setTimeout(function() {
            console.log('another timer')
        }, 1000);
    }, 1000);
}, 1000);


console.log('Sync work');