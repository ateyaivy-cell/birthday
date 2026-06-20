const giftContainer = document.getElementById('giftBox');
const messageContent = document.getElementById('message-content');


const partyColors = ['pink', 'blue', 'yellow', 'red', 'white'];


giftContainer.addEventListener('touchstart', () => {
    openGift();
});


giftContainer.addEventListener('click', () => {
    openGift();
});

function openGift() {
    giftContainer.classList.add('open');
    
    setTimeout(() => {
        messageContent.classList.add('show');
    }, 250);
    
    
    launchBalloons();
    triggerCelebrationEffects();

    
    setInterval(() => {
        launchBalloons();
    }, 3500);

    
    setInterval(() => {
        triggerCelebrationEffects();
    }, 1500);
}

function launchBalloons() {
    
    for (let i = 0; i < 8; i++) { 
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.innerHTML = '🎈';
            balloon.style.position = 'fixed';
            balloon.style.bottom = '-50px';
            balloon.style.left = Math.random() * 100 + 'vw';
            balloon.style.fontSize = Math.random() * 20 + 20 + 'px';
            balloon.style.zIndex = '5';
            balloon.style.transition = 'transform 4s linear, opacity 4s ease-out';
            
            document.body.appendChild(balloon);
            
            setTimeout(() => {
                balloon.style.transform = `translateY(-120vh) translateX(${(Math.random() - 0.5) * 100}px)`;
                balloon.style.opacity = '0';
            }, 50);
            
            
            setTimeout(() => balloon.remove(), 4000);
        }, i * 300);
    }
}

function triggerCelebrationEffects() {
    for (let i = 0; i < 25; i++) {
        const spark = document.createElement('div');
        spark.style.position = 'fixed';
        spark.style.width = Math.random() * 8 + 4 + 'px';
        spark.style.height = spark.style.width;
        spark.style.backgroundColor = partyColors[Math.floor(Math.random() * partyColors.length)];
        spark.style.borderRadius = '50%';
        
        
        spark.style.left = Math.random() * 100 + 'vw';
        spark.style.top = Math.random() * 80 + 'vh';
        spark.style.zIndex = '12';
        spark.style.transition = 'transform 1.2s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 1.2s ease-out';
        
        document.body.appendChild(spark);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 120 + 30;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        setTimeout(() => {
            spark.style.transform = `translate(${x}px, ${y}px)`;
            spark.style.opacity = '0';
        }, 50);
        
        setTimeout(() => spark.remove(), 1200);
    }
}
